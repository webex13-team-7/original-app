// 必要な関数を import
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDidDLvN71O5rkI9MPKU74AHfsNBL-DysA",
  authDomain: "webex13-original-app.firebaseapp.com",
  projectId: "webex13-original-app",
  storageBucket: "webex13-original-app.appspot.com",
  messagingSenderId: "925100350280",
  appId: "1:925100350280:web:076637c5e0bcc479cf317d",
  measurementId: "G-0GG6QB8FTQ",
}

// Firebaseアプリオブジェクトを初期化
const app = initializeApp(firebaseConfig)
// Firestoreを読み込み、db(databaseの略)として export
export const db = getFirestore(app)
