# 🎓 FreshStart AI

**Academic Onboarding Assistant for First-Year Students**

FreshStart AI is a web-based onboarding assistant designed to help first-year college students understand syllabus structure, exam patterns, assignments, and academic guidelines.
It provides **clear, structured answers generated strictly from official academic documents**, ensuring accuracy and reliability.

---

## ✨ Key Features

* 📘 **Official-Source–Only Answers**
  Responses are generated strictly from verified academic documents.

* 🧩 **Structured & Readable Output**
  Answers are formatted using headings and bullet points for clarity.

* 🎓 **First-Year Focused**
  Covers syllabus, exams, assignments, PPTs, and lab guidelines.

* 📱 **Responsive UI**
  Works seamlessly across desktop and mobile devices.

---

## 🧠 How It Works (High Level)

1. Student enters an academic question.
2. The system fetches relevant official academic data from Firestore.
3. Gemini AI processes the query using only the provided data.
4. A structured and reliable answer is displayed to the student.

---

## 🛠 Google Technologies Used

* **Gemini AI** – AI-powered response generation
* **Firebase Firestore** – Storage for official academic documents
* **Google Cloud (Gemini API)** – Access to Gemini AI services

---

## 🚀 Tech Stack

* Frontend: HTML, CSS, JavaScript, Tailwind CSS
* Database: Firebase Firestore
* AI: Google Gemini
* Hosting & Backend: Vercel (Serverless Functions)

---

## 📂 Project Structure (Simplified)

```
/
├── index.html
├── script.js
├── /api
│   └── ask.js        # Vercel serverless function (Gemini SDK)
├── /img
│   └── og-image.png
└── README.md
```

---

## ⚙️ How to Create Your Own FreshStart AI

Follow these steps to build your own version.

---

### 1️⃣ Set Up Firebase Firestore (Database)

1. Go to **Firebase Console**

2. Create a new project

3. Enable **Firestore Database**

4. Create a collection (example):

   ```
   freshstart_data
   ```

5. Add documents (example IDs):

   ```
   syllabus_structure
   exam_format_marking
   assignment_ppt_guidelines
   lab_report_guidelines
   ```

6. Each document should have fields like:

   ```json
   {
     "title": "Exam Format",
     "content": "Details about exam pattern..."
   }
   ```

7. Set Firestore rules (for MVP):

   ```js
   allow read: if true;
   ```

---

### 2️⃣ Get Gemini API Key

1. Go to **Google Cloud Console**
2. Enable **Gemini API**
3. Create an API key
4. Keep this key **private** (do not expose in frontend)

---

### 3️⃣ Set Up Vercel Serverless Function

1. Install Gemini SDK:

   ```bash
   npm install @google/genai
   ```

2. Create file:

   ```
   /api/ask.js
   ```

3. Use Gemini SDK inside this function to generate responses
   (API key is accessed via environment variables).

4. In **Vercel Dashboard → Settings → Environment Variables**:

   ```
   GEMINI_API_KEY = your_api_key_here
   ```

---

### 4️⃣ Frontend Setup

* Fetch Firestore data using Firebase Web SDK
* Build a prompt using official data
* Send the prompt to `/api/ask`
* Render the response using Markdown formatting

> ⚠️ Important:
> The frontend **never** directly accesses the Gemini API key.

---

### 5️⃣ Deploy on Vercel

1. Push your project to GitHub
2. Import the repo into **Vercel**
3. Set environment variables
4. Deploy 🚀

Vercel will automatically:

* Host the frontend
* Deploy the serverless backend
* Secure your API keys

---

## 🔐 Security Notes

* Gemini API key is stored securely in Vercel environment variables
* Firestore is used as a **trusted data source**
* AI responses are constrained to official documents only

---

## 📌 Future Enhancements

* Support for multiple branches and semesters
* Role-based access for faculty to update documents
* Follow-up question handling
* Personalized responses based on student profile

---

## 📄 License

This project is intended for educational and demonstration purposes.

---

## 🙌 Acknowledgements

* Google Gemini
* Firebase
* Vercel

---

### ⭐ Final Note

FreshStart AI is built as a **focused, reliable MVP** that prioritizes **clarity over complexity** — helping students start college with confidence.
