<template>
  <div class="container shadow mt-5">
    <div class="container container-lg p-5">
      <div class="row row-cols-auto">
        <div class="col">{{ userName[0] }}さんのマイページ</div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col">
          <button class="btn" v-on:click="toForm">シフト登録</button>
        </div>
        <div class="col">
          <button class="btn" v-on:click="toTable">シフト編集</button>
        </div>
        <div class="col">
          <button class="btn" v-on:click="toResult">今週のシフト</button>
        </div>
        <div class="col">
          <button class="btn" v-on:click="Exam">シフト</button>
        </div>
      </div>
      <div class="row">
        <component v-bind:is="whichPage"></component>
      </div>
    </div>
  </div>
  <FormNew />
</template>
<script>
import { db } from "../firebase"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { collection, getDocs } from "@firebase/firestore"

import Form from "@/components/form.vue"
import Table from "@/components/tableOX.vue"
import Result from "@/components/siftResult.vue"
import Exam from "@/components/formNew.vue"

export default {
  components: {
    Form: Form,
    Table: Table,
    Result: Result,
    Exam: Exam,
  },
  data() {
    return {
      text: "unko",
      date: "",
      youbi: ["日", "月", "火", "水", "木", "金", "土"],
      whichPage: "Table",
      userName: [],
      userData: [],
      userEmail: "",
    }
  },
  methods: {
    Exam() {
      this.whichPage = "Exam"
    },
    toForm() {
      this.whichPage = "Form"
    },
    toTable() {
      this.whichPage = "Table"
    },
    toResult() {
      this.whichPage = "Result"
    },
    Calender() {
      this.date =
        new Date().getMonth() +
        1 +
        "月" +
        new Date().getDate() +
        "日" +
        this.youbi[new Date().getDay()] +
        "曜日"
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
    this.Calender()
  },
}
</script>
