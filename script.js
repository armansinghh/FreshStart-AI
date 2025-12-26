import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getFirestore,
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

/* firebase db */
const firebaseConfig = {
  apiKey: "AIzaSyAzzWgQNeLIQXzoIdC488IhgGAJT4j0Bz8",
  authDomain: "freshstart-ai-a8581.firebaseapp.com",
  projectId: "freshstart-ai-a8581",
  storageBucket: "freshstart-ai-a8581.firebasestorage.app",
  messagingSenderId: "34272612578",
  appId: "1:34272612578:web:5e6977fe59b056eaa80ebb"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/* ui elem */
const askBtn = document.getElementById("askBtn");
const answerDiv = document.getElementById("answer");
const questionInput = document.getElementById("question");

const continueBtn = document.getElementById("continueBtn");
const onboarding = document.getElementById("onboarding");
const chat = document.getElementById("chat");

const greeting = document.getElementById("greeting");
const inputBox = document.getElementById("inputBox");

/* ask que */
askBtn.addEventListener("click", async () => {
  const question = questionInput.value;

  if (!question.trim()) {
    answerDiv.innerText = "Please enter a question.";
    return;
  }

  try {
    /* fetch data */
    const docsToFetch = [
      "syllabus_structure",
      "exam_format_marking",
      "lab-report-guidelines"
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

    /* ask gemini */
    answerDiv.innerText = "Thinking...";

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

    answerDiv.innerHTML = marked.parse(data.text);

  } catch (err) {
    console.error(err);
    answerDiv.innerText = "Something went wrong while fetching data.";
  }
});

/* flow */
continueBtn.addEventListener("click", () => {
  onboarding.classList.add("opacity-0", "-translate-y-5");

  setTimeout(() => {
    onboarding.classList.add("hidden");

    chat.classList.remove("hidden");
    chat.offsetHeight; // force reflow

    chat.classList.remove("opacity-0", "translate-y-5");
    chat.classList.add("opacity-100", "translate-y-0");
  }, 500);
});

/* chat layout transition */
askBtn.addEventListener("click", () => {
  // fade greeting out
  greeting.classList.add("opacity-0", "translate-y-4", "h-0");

  setTimeout(() => {
    greeting.classList.add("hidden");
  }, 600);

  // move input
  inputBox.classList.add("translate-y-4");

  // show answer
  answerDiv.classList.remove("hidden");

  setTimeout(() => {
    answerDiv.classList.remove("opacity-0", "translate-y-4", "pointer-events-none");
    answerDiv.classList.add("opacity-100");
  }, 600);
});
