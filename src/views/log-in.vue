<template>
  <h1>Log In</h1>
  <div class="log-in" v-if="seen">
    <div class="email">
      <input type="text" placeholder="email" name="uname" required /><br />
    </div>

    <div class="pass">
      <input type="password" placeholder="Password" name="psw" required /><br />
    </div>
    <div class="submit">
      <button type="submit" v-on:click="googleSignIn">google log in</button>
    </div>
  </div>
  <div v-else>
    <p>unko</p>
  </div>
  {{ user }}
</template>

<script>
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"

export default {
  data() {
    return {
      email: "",
      password: "",
      user: null,
      seen: true,
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
  },
}
</script>
