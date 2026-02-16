# 🎓 FreshStart AI

**Academic Onboarding Assistant for First Year Students**

FreshStart AI is a React-based web application designed to help first-year college students understand syllabus structure, exam patterns, assignments, and academic guidelines.
It provides **clear, structured answers generated strictly from official academic documents**, ensuring accuracy and reliability.

---

## ✨ Key Features

* 📘 **Official-Source–Only Answers**
  Responses are generated strictly from verified academic documents stored in Firebase Firestore.

* 🧩 **Structured & Readable Output**
  Answers are formatted using headings and bullet points for clarity with Markdown parsing.

* 🎓 **First-Year Focused**
  Covers syllabus, exams, assignments, reports, and lab guidelines.

* 📱 **Responsive UI**
  Works seamlessly across desktop and mobile devices with smooth transitions.

* ⚛️ **Modern React Architecture**
  Fully componentized React application with a Node.js backend.

---

## 🧠 How It Works (High Level)

1. Student enters an academic question in the chat interface.
2. The system fetches relevant official academic data from Firebase Firestore.
3. The backend Node.js server sends the query to Google Gemini AI with the context data.
4. Gemini AI processes the query using only the provided data.
5. A structured and reliable answer is displayed, parsed as Markdown for better readability.

---

## 🛠 Technologies Used

* **Gemini AI** – AI-powered response generation
* **Firebase Firestore** – Storage for official academic documents
* **Google Cloud (Gemini API)** – Access to Gemini AI services

---

## 🚀 Tech Stack

**Frontend:**
* React 19
* Tailwind CSS 4
* Vite (dev server & build tool)
* Marked (Markdown parser)

**Backend:**
* Node.js + Express (local development)
* Google Generative AI SDK

**Database:**
* Firebase Firestore

**Deployment Ready:**
* Vercel (for both frontend and serverless backend)

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation header
│   ├── OnboardingSection.jsx # Welcome screen
│   ├── ChatSection.jsx      # Main chat interface
│   └── Footer.jsx           # Footer
├── services/
│   └── firebase.js          # Firebase initialization & config
├── utils/
│   └── api.js               # API utility functions
├── App.jsx                  # Main app component
├── main.jsx                 # React entry point
├── index.css                # Global styles
└── App.css                  # App component styles

server.cjs                    # Express backend server
vite.config.js              # Vite configuration
package.json                # Dependencies & scripts
index.html                  # HTML template
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn
- Gemini API key
- Firebase project with Firestore database

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd FreshStart-AI
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

### Development

**Run both frontend and backend together:**
```bash
npm run dev-all
```

**Or run separately:**

Terminal 1 - Start backend server:
```bash
npm run server
```

Terminal 2 - Start frontend dev server:
```bash
npm run dev
```

The app will be available at:
- Frontend: `http://localhost:5174` (or next available port)
- Backend: `http://localhost:3001`

### Production Build

```bash
npm run build
```

This generates an optimized build in the `dist/` folder.

---

## 📋 Available npm Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server for frontend |
| `npm run server` | Start Express backend server on port 3001 |
| `npm run dev-all` | Run both frontend and backend concurrently |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

---

## 🔌 API Endpoints

### POST `/api/ask`
Sends a user question to Gemini AI with academic context.

**Request Body:**
```json
{
  "prompt": "Your question with academic context..."
}
```

**Response:**
```json
{
  "text": "Formatted markdown response..."
}
```

---

## 🔐 Environment Variables

| Variable | Description |
|----------|-------------|
| `GEMINI_API_KEY` | Google Gemini API key for AI responses |
| `PORT` | Backend server port (default: 3001) |

---

## 🎨 UI/UX Features

* **Smooth Transitions** - CSS transitions between onboarding and chat screens
* **Loading States** - Visual feedback while waiting for AI responses
* **Markdown Support** - Formatted answers with headings and bullet points
* **Responsive Design** - Mobile-friendly interface using Tailwind CSS
* **Gradient UI** - Modern gradient buttons and accents

---

## 📝 Component Details

### Header.jsx
Navigation bar with logo, menu links, and user avatar.

### OnboardingSection.jsx
Welcome screen with introduction and "Get Started" button.

### ChatSection.jsx
Main interface with:
- Welcome greeting that fades when first question is asked
- Question input field with send button
- Answer display area with Markdown rendering
- Loading state indicator

### Footer.jsx
Footer with copyright and version information.

---

## 🔄 Component Communication

- **App.jsx** - Manages global state (showChat boolean)
- **Components** - Receive props for visibility state and callbacks
- **Services** - Centralized Firebase and API utilities
- **Utils** - Reusable API functions for data fetching and AI requests

---

## 🚀 Deployment to Vercel

### Setup

1. **Create a Vercel account** at [vercel.com](https://vercel.com)
2. **Connect your GitHub repository** to Vercel
3. **Add environment variables** in Vercel dashboard:
   - Go to Project Settings → Environment Variables
   - Add `GEMINI_API_KEY` with your Google Gemini API key

### Deployment

1. Push your code to GitHub (make sure you have `api/ask.js` and `vercel.json`)
2. Vercel will automatically:
   - Build the React frontend (`npm run build`)
   - Deploy serverless functions from the `/api` directory
   - Serve the frontend and route `/api/*` to the serverless functions

### How It Works on Vercel

- **Frontend:** React app served from `dist/` folder
- **Backend:** `/api/ask.js` runs as a serverless function that calls Gemini AI
- **Routing:** Requests to `/api/ask` automatically route to the serverless function

### Local Development vs Production

| Aspect | Local | Vercel |
|--------|-------|--------|
| Frontend | Vite dev server (port 5174) | Vercel static hosting |
| Backend API | Node.js Express (port 3001) | Vercel Serverless Functions |
| Proxy | Vite proxy redirects `/api/*` → localhost:3001 | Direct route to `/api/*` functions |

See [Vercel documentation](https://vercel.com/docs) for more details.

---

## 🤝 Contributing

Contributions are welcome! Please follow the existing code structure and React best practices.

---

## 📄 License

This project is open source and available under the MIT License.

---

Made with ❤️
by Arman Singh