import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getFirestore, addDoc, collection, getDocs, onSnapshot } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyBeYH_Vyy2M6_uR5C189ucjFjiYW5_NpN8",
  authDomain: "mibiblioteca11-7dbe0.firebaseapp.com",
  projectId: "mibiblioteca11-7dbe0",
  storageBucket: "mibiblioteca11-7dbe0.appspot.com",
  messagingSenderId: "871605905106",
  appId: "1:871605905106:web:2040f53f38414852f5ef0b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)

//guardar libro
export const saveLibro = (titulo, autor, editorial, isbn, fecha) =>
    addDoc(collection(db, "libros"), { titulo, autor, editorial, isbn, fecha });

//lista libros
export const onGetLibros = (callback) => onSnapshot(collection(db,'libros'),callback)
