<template>
  <div class="container mt-5 p-5 shadow" style="width: 800px">
    <div class="row">
      <div class="col-4 m-auto"><h1>Sign Up</h1></div>
    </div>
    <div class="row">
      <div class="row">
        <div class="col m-auto">e-mail</div>
      </div>
      <div class="row m-2">
        <div class="col-6 m-auto">
          <input type="text" class="form-control" v-model="email" />
        </div>
      </div>
      <div class="row">
        <div class="col m-auto">password</div>
      </div>
      <div class="row m-2">
        <div class="col-6 m-auto">
          <input type="text" class="form-control" v-model="password" />
        </div>
      </div>
      <div class="row">
        <div class="col m-auto">name</div>
      </div>
      <div class="row m-2">
        <div class="col-5 m-auto">
          <input type="text" class="form-control" v-model="employeeName" />
        </div>
      </div>
      <div class="row">
        <div class="col m-auto">役職</div>
      </div>
    </div>
    <div class="row form-check m-auto">
      <div class="col-2 m-auto">
        <input
          class="form-check-input"
          type="checkbox"
          value="true"
          id="flexCheckDefault"
          v-model="kitchen"
        />
      </div>
      <div class="col-3 m-auto">
        <label class="form-check-label" for="flexCheckDefault">
          キッチン
        </label>
      </div>
    </div>
    <div class="row form-check m-auto">
      <div class="col-2 m-auto">
        <input
          class="form-check-input"
          type="checkbox"
          value="true"
          id="flexCheckDefault"
          v-model="whole"
        />
      </div>
      <div class="col-3 m-auto">
        <label class="form-check-label" for="flexCheckDefault"> ホール </label>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col">
        <button class="btn btn-primary btn-md" v-on:click="submit">登録</button>
      </div>
    </div>
  </div>
</template>

<script>
import { setDoc, doc, collection, getDocs } from "firebase/firestore"
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
      value: { kitchen: "", whole: "" },
      usersId: "",
      unko: [],
      errorCode: "",
      errorMessage: "",
      user: "",
      kitchen: "",
      whole: "",
    }
  },
  methods: {
    submit() {
      setDoc(doc(db, "users", `${this.employeeName}`), {
        uid: this.email,
        password: this.password,
        name: this.employeeName,
        status: this.getValue,
      })
      // addDoc(collection(db, "users"), {
      //   uid: this.email,
      //   password: this.password,
      //   name: this.employeeName,
      //   status: this.value,
      // })
      this.signUp()
    },
    signUp() {
      const auth = getAuth()
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          this.user = userCredential.user
          this.$router.push("my-page")
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
  computed: {
    getValue: function () {
      let value = { kitchen: this.kitchen, whole: this.whole }
      value.kitchen = this.kitchen
      value.whole = this.whole
      return value
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
