import { db } from "../services/firebase";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

export const fetchContextData = async () => {
  const docsToFetch = [
    "syllabus_structure",
    "exam_format_marking",
    "lab_report_guidelines"
  ];

  let contextText = "";

  for (const docId of docsToFetch) {
    const ref = doc(db, "freshstart_data", docId);
    const snap = await getDoc(ref);

    if (snap.exists()) {
      const data = snap.data();
      contextText += `\n\n${data.title}:\n${data.content}`;
    }
  }

  return contextText;
};

export const askAI = async (question, contextText) => {
  const res = await fetch("/api/ask", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      prompt: `
You are FreshStart AI, an onboarding assistant for first-year college students.

You must answer ONLY using the official data provided below.

Use a clear, readable format with headings and bullet points.
Do not add extra assumptions.

Official Data:
${contextText}

Student Question:
${question}
`
    })
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || "AI request failed");
  }

  const contentType = res.headers.get("content-type") || "";
  const data = contentType.includes("application/json")
    ? await res.json()
    : { text: await res.text() };

  if (data.error) {
    throw new Error(data.error || "AI request failed");
  }

  return data.text;
};
