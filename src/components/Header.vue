<template>
  <nav class="navbar navbar-expand-xxlg navbar-light bg-light p-3 shadow">
    <router-link to="/" class="navbar-brand mb-0 h1">Apprication</router-link>
    <div class="row">
      <div class="col">
        <router-link to="/form">Form</router-link>
      </div>
      <div class="col">
        <router-link to="/result">Result</router-link>
      </div>
      <div class="col">
        <a href="#" v-on:click="logOut">log-out</a>
      </div>
    </div>
  </nav>
</template>

<script>
import { getAuth, signOut } from "firebase/auth"
export default {
  methods: {
    logOut() {
      signOut(getAuth()).then(() => {})
      this.$router.push("log-in")
    },
  },
}
</script>
