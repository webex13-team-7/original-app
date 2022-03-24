<template>
  <div class="container">
    <div class="row">{{ userName[0] }}</div>
    {{ schedules2 }}
  </div>
</template>
<script>
import { collection, getDocs } from "firebase/firestore"
import { onAuthStateChanged, getAuth } from "firebase/auth"
import { db } from "../firebase"

export default {
  data() {
    return {
      userName: [],
      currentUser: "",
    }
  },
  created() {
    getDocs(collection(db, "schedule")).then((snapshot) => {
      snapshot.forEach((doc) => {
        if (doc.get("email") === this.currentUser) {
          this.userName.push(doc.get("name"))
        }
      })
    }),
      onAuthStateChanged(getAuth(), (user) => {
        if (user) {
          this.currentUser = user.email
        }
      })
  },
}
</script>
