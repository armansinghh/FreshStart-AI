import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getFirestore,
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

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

export { db };
