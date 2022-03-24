<template>
  <div class="container">
    <div class="row m-5">
      <div class="col">
        <button class="btn" v-on:click="toMonday">月曜</button>
      </div>
      <div class="col">
        <button class="btn" v-on:click="toTuesday">火曜</button>
      </div>
      <div class="col">
        <button class="btn" v-on:click="toWednesday">水曜</button>
      </div>
      <div class="col">
        <button class="btn" v-on:click="toThursday">木曜</button>
      </div>
      <div class="col">
        <button class="btn" v-on:click="toFriday">金曜</button>
      </div>
      <div class="col">
        <button class="btn" v-on:click="toSaturday">土曜</button>
      </div>
      <div class="col">
        <button class="btn" v-on:click="toSunday">日曜</button>
      </div>
    </div>
  </div>
  <component v-bind:is="whichDay"></component>
</template>

<script>
import { collection, getDocs } from "firebase/firestore"
import { onAuthStateChanged, getAuth } from "firebase/auth"
import { db } from "../firebase"
import monday from "@/components/monday.vue"
import tuesday from "@/components/tuesday.vue"
import wednesday from "@/components/wednesday.vue"
import thursday from "@/components/thursday.vue"
import friday from "@/components/friday.vue"
import saturday from "@/components/saturday.vue"
import sunday from "@/components/sunday.vue"

export default {
  components: {
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sunday,
  },
  data() {
    return {
      date: "月曜",
      scheduleDatas: [],
      currentUser: "",
      whichDay: "monday",
    }
  },
  methods: {
    toMonday() {
      this.whichDay = "monday"
    },
    toTuesday() {
      this.whichDay = "tuesday"
    },
    toWednesday() {
      this.whichDay = "wednesday"
    },
    toThursday() {
      this.whichDay = "thursday"
    },
    toFriday() {
      this.whichDay = "friday"
    },
    toSaturday() {
      this.whichDay = "saturday"
    },
    toSunday() {
      this.whichDay = "sunday"
    },
    weeklyToDay() {
      this.scheduleDatas.forEach((onesSchedule) => {
        this.whoCanWork.push(onesSchedule.name)
        this.monday.push(onesSchedule.schedule[0].monday)
        this.tuesday.push(onesSchedule.schedule[1].tuesday)
        this.wednesday.push(onesSchedule.schedule[2].wednesday)
        this.thursday.push(onesSchedule.schedule[3].thursday)
        this.friday.push(onesSchedule.schedule[4].friday)
        this.saturday.push(onesSchedule.schedule[5].saturday)
        this.sunday.push(onesSchedule.schedule[6].sunday)
      })
    },
  },
  created() {
    getDocs(collection(db, "schedule")).then((manko) => {
      manko.forEach((doc) => {
        this.scheduleDatas.push(doc.data())
      })
    }),
      onAuthStateChanged(getAuth(), (user) => {
        if (user) {
          this.currentUser = user.email
        }
      }),
      this.weeklyToDay()
  },
}
</script>
