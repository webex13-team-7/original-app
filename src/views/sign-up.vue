<template>
  <div class="container p-2">
    <div class="row"><h1>Sign Up</h1></div>
    <div class="row">
      <div class="container m-1 p-1">
        <div class="row">
          <div class="col col-3 m-auto">e-mail</div>
        </div>
        <div class="row m-2">
          <div class="col col-3 m-auto">
            <input type="text" class="form-control" v-model="email" />
          </div>
        </div>
        <div class="row">
          <div class="col col-3 m-auto">password</div>
        </div>
        <div class="row m-2">
          <div class="col col-3 m-auto">
            <input type="text" class="form-control" v-model="password" />
          </div>
        </div>
        <div class="row">
          <div class="col col-3 m-auto">name</div>
        </div>
        <div class="row m-2">
          <div class="col col-3 m-auto">
            <input type="text" class="form-control" v-model="employeeName" />
          </div>
        </div>
        <div class="row">
          <div class="col col-3 m-auto">役職</div>
        </div>
        <div class="row m-2">
          <!-- <div
            class="form-check col-1 m-auto"
            v-for="(checkbox, index) in checkboxes"
            v-bind:key="index"
          >
            <input
              class="form-check-input"
              type="checkbox"
              value="true"
              id="flexCheckDefault"
              v-model="value"
            />
            <label class="form-check-label" for="flexCheckDefault">
              {{ checkbox }}
            </label>
          </div> -->
          <div class="container">
            <div class="row form-check">
              <div class="col-1 m-auto">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="true"
                  id="flexCheckDefault"
                  v-model="kitchen"
                />
              </div>
              <div class="col-1 m-auto">
                <label class="form-check-label" for="flexCheckDefault">
                  キッチン
                </label>
              </div>
            </div>
            <div class="row form-check m-auto">
              <div class="col-1 m-auto">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="true"
                  id="flexCheckDefault"
                  v-model="whole"
                />
              </div>
              <div class="col-1 m-auto">
                <label class="form-check-label" for="flexCheckDefault">
                  ホール
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <button class="btn btn-primary btn-sm" v-on:click="submit">登録</button>
      </div>
    </div>
  </div>
  {{ errorCode }},{{ errorMessage }}
  {{ unko }}
  {{ returnValue }}
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
      value: { kitchen: "", whole: "" },
      usersId: "",
      unko: [],
      errorCode: "",
      errorMessage: "",
      user: "",
      kitchen: false,
      whole: false,
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
      this.signUp()
    },
    signUp() {
      const auth = getAuth()
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          this.user = userCredential.user
          this.$router.push("form")
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
    getValue() {
      this.value.kitchen = this.kitchen
      this.value.whole = this.whole
      return this.value
    },
  },
  created: function () {
    getDocs(collection(db, "users")).then((snapshot) => {
      snapshot.forEach((doc) => {
        this.unko.push(doc.data())
      })
    })
  },
  computed: {
    returnValue: function () {
      return this.getValue()
    },
  },
}
</script>
