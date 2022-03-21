<template>
  <div class="container p-2">
    <div class="row"><h1>Sign Up</h1></div>
    <div class="row">
      <div class="container m-1 p-1">
        <div class="row">e-mail</div>
        <div class="row m-2">
          <input type="text" v-model="email" />
        </div>
        <div class="row">password</div>
        <div class="row m-2">
          <input type="text" v-model="password" />
        </div>
        <div class="row">name</div>
        <div class="row m-2">
          <input type="text" v-model="employeeName" />
        </div>
        <div class="row">役職</div>
        <div class="row m-2">
          <select v-model="value" multiple>
            <option value="true">ホール</option>
            <option value="true">キッチン</option>
          </select>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <button class="btn btn-primary btn-sm" v-on:click="signIn">登録</button>
      </div>
    </div>
  </div>
  {{ errorCode }},{{ errorMessage }}
  <!-- {{ unko }} -->
</template>

<script>
import { collection, addDoc, getDocs } from "firebase/firestore"
// firebase.js で db として export したものを import
import { db } from "../firebase"

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth"

export default {
  data() {
    return {
      email: "",
      password: "",
      employeeName: "",
      value: { ホール: "false", キッチン: "false" },
      usersId: "",
      unko: [],
      errorCode: "",
      errorMessage: "",
      user: "",
    }
  },
  methods: {
    submit() {
      addDoc(collection(db, "users"), {
        uid: this.email,
        password: this.password,
        name: this.employeeName,
        status: this.value,
      })
    },
    signIn() {
      const auth = getAuth()
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          this.user = userCredential.user
        })
        .catch((error) => {
          this.errorCode = error.code
          this.errorMessage = error.message
        })
    },
    logIn() {
      const auth = getAuth()
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          this.user = userCredential.user
        })
        .catch((error) => {
          this.errorCode = error.code
          this.errorMessage = error.message
        })
    },
  },
  created: function () {
    getDocs(collection(db, "users")).then((snapshot) => {
      snapshot.forEach((doc) => {
        this.unko.push(doc.data())
      })
    })
  },
}
</script>
