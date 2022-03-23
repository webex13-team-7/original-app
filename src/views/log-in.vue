<template>
  {{ user }}
  <div class="container p-5">
    <div class="row-3 m-lg-4">
      <div class="col-3 m-auto"><h1>ログイン</h1></div>
    </div>
    <div class="row-3 m-lg-4">
      <div class="col-3 m-auto">
        <input
          type="text"
          class="form-control"
          placeholder="メール"
          v-model="email"
        />
      </div>
    </div>
    <div class="row-3 m-lg-4">
      <div class="col-3 m-auto">
        <input
          type="text"
          class="form-control"
          placeholder="パスワード"
          v-model="password"
        />
      </div>
    </div>
    <div class="row-3 m-lg-4">
      <div class="col-2 m-auto">
        <button class="btn btn-success" v-on:click="logIn">ログイン</button>
      </div>
    </div>
    <div class="row-3 m-lg-4">
      <button class="btn btn-success" v-on:click="googleSignIn">
        googleログイン
      </button>
    </div>
    <div class="row-3 m-lg-4">
      <button class="btn btn-success" v-on:click="toSignUp">新規登録</button>
    </div>
  </div>
  {{ msg }},{{ errorMessage }}
</template>

<script>
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth"

export default {
  name: "log-in",
  data() {
    return {
      email: "",
      password: "",
      user: null,
      seen: true,
      mgs: "",
      errorCode: "",
      errorMessage: "",
    }
  },
  methods: {
    googleSignIn() {
      const auth = getAuth()
      auth.languageCode = "ja"
      const provider = new GoogleAuthProvider()
      signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user
          this.user = user
          JSON.parse(localStorage.setItem("currentUser", JSON.stringify(user)))
          alert(user.email + "ログイン完了！")
        })
        .catch((error) => {
          console.log(error)
        })
    },
    logIn() {
      const auth = getAuth()
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          this.user = userCredential.user
          this.$router.push("/form")
          alert("ログイン成功")
        })
        .catch((error) => {
          this.errorCode = error.code
          this.errorMessage = error.message
        })
    },
    toSignUp() {
      this.$router.push("sign-up")
    },
  },
}
</script>
