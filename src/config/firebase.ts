import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDKcwASBPNpG9_DJGqAtYWaFWIqRhUB0pk",
  authDomain: "pr-landing-37367.firebaseapp.com",
  projectId: "pr-landing-37367",
  storageBucket: "pr-landing-37367.firebasestorage.app",
  messagingSenderId: "906775283444",
  appId: "1:906775283444:web:8d6d0d6365f685cb9d80a1",
  measurementId: "G-HSWNN4S0MV"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);