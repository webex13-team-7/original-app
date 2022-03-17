// 必要な関数を import
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// googleログイン ポップアップ画面
// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"

// // 新規登録&ログイン
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from "firebase/auth"


// //ユーザー情報更新
// import {updateProfile} from "firebase/auth"

// //ログアウト
// import { signOut } from "firebase/auth"

// //メアド再設定
// import { updateEmail } from "firebase/auth";

// //e-mail 確認メール送信
// import { sendEmailVerification } from "firebase/auth";

// //password 更新
// import { updatePassword } from "firebase/auth";

// //password変更メールの送信
// import { sendPasswordResetEmail } from "firebase/auth";

// //user削除
// import { deleteUser } from "firebase/auth";

// //新規登録
// const auth = getAuth()
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code
//     const errorMessage = error.message
//     // ..
//   })

// //ログイン
// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code
//     const errorMessage = error.message
//   })



// //ユーザーのログイン状況が変化した時の処理
// // ※userにcurrentUserを代入すると、ログイン中のユーザーが取得できる
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     const uid = user.uid
//     // ...
//   } else {
//     // User is signed out
//     // ...
//   }
// })



// //ログイン中のユーザーの情報を取得
// const user = auth.currentUser;
// if (user !== null) {
//   // The user object has basic properties such as display name, email, etc.
//   // const displayName = user.displayName
//   // const email = user.email
//   // const photoURL = user.photoURL
//   // const emailVerified = user.emailVerified

//   // The user's ID, unique to the Firebase project. Do NOT use
//   // this value to authenticate with your backend server, if
//   // you have one. Use User.getToken() instead.
//   const uid = user.uid
// }

// //ユーザー情報更新
// updateProfile(auth.currentUser, {
//   displayName: "Jane Q. User", photoURL: "https://example.com/jane-q-user/profile.jpg"
// }).then(() => {
//   // Profile updated!
//   // ...
// }).catch((error) => {
//   // An error occurred
//   // ...
// });

// //メアドの再設定
// updateEmail(auth.currentUser, "user@example.com").then(() => {
//   // Email updated!
//   // ...
// }).catch((error) => {
//   // An error occurred
//   // ...
// });

// //e-mail送信
// sendEmailVerification(auth.currentUser)
//   .then(() => {
//     // Email verification sent!
//     // ...
//   });


// //パスワード更新
//   const newPassword = getASecureRandomPassword();

// updatePassword(user, newPassword).then(() => {
//   // Update successful.
// }).catch((error) => {
//   // An error ocurred
//   // ...
// });

//パスワード更新メールの送信
// sendPasswordResetEmail(auth, email)
//   .then(() => {
//     // Password reset email sent!
//     // ..
//   })
//   .catch((error) => {
//     // const errorCode = error.code;
//     // const errorMessage = error.message;
//     // ..
//   });

//   //user削除
//   deleteUser(user).then(() => {
//     // User deleted.
//   }).catch((error) => {
//     // An error ocurred
//     // ...
//   });

// //グーグルプロバイダーオブジェクトを生成
// const provider = new GoogleAuthProvider()
// //グーグルログイン
// signInWithPopup(auth, provider)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result)
//     const token = credential.accessToken
//     // The signed-in user info.
//     const user = result.user
//     // ...
//   })
//   .catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code
//     const errorMessage = error.message
//     // The email of the user's account used.
//     const email = error.email
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error)
//     // ...
//   })


// //プロバイダーのユーザー情報
//   if (user !== null) {
//     user.providerData.forEach((profile) => {
//       console.log("Sign-in provider: " + profile.providerId);
//       console.log("  Provider-specific UID: " + profile.uid);
//       console.log("  Name: " + profile.displayName);
//       console.log("  Email: " + profile.email);
//       console.log("  Photo URL: " + profile.photoURL);
//     });
//   }

// //ログアウト
// signOut(auth)
//   .then(() => {
//     // Sign-out successful.
//   })
//   .catch((error) => {
//     // An error happened.
//   })

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
