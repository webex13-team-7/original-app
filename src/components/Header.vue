<template>
  <nav class="navbar navbar-expand-xxlg navbar-light bg-light p-3 shadow">
    <router-link to="/" class="navbar-brand mb-0 h1 headerTitle"
      >すまシフ</router-link
    >
    <div class="row">
      <div class="col" v-if="logedIn">
        <a href="#" v-on:click="logOut">log-out</a>
      </div>
      <div class="col" v-else></div>
    </div>
  </nav>
</template>

<script>
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth"
import { collection, getDocs } from "@firebase/firestore"
import { db } from "../firebase"
export default {
  data() {
    return {
      logedIn: false,
      userEmail: "",
      userData: [],
      userName: [],
    }
  },
  methods: {
    logOut() {
      signOut(getAuth()).then(() => {})
      this.logedIn = false
      this.$router.push("log-in")
      this.userEmail = ""
      this.userName = []
    },
  },
  created: function () {
    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        this.userEmail = user.email
        getDocs(collection(db, "users")).then((snapshot) => {
          snapshot.forEach((doc) => {
            if (doc.get("uid") === this.userEmail) {
              this.userData.push(doc.data())
              this.userName.push(doc.get("name"))
              this.logedIn = true
            }
          })
        })
      }
    })
  },
}
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Hachi+Maru+Pop&display=swap");
.headerTitle {
  font-family: "Hachi Maru Pop", cursive;
  font-size: 35px;
}
</style>
