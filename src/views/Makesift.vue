<template>
  {{ whichSift }}
  {{ submitObjS }}
  {{ submitObjL }}
  <div class="container shadow">
    <div class="row"><h1>シフト作成画面</h1></div>
    <div class="row-12">{{ siftStartMonth }}月{{ whichDay }}日のシフト</div>
    <div class="row">
      <div class="col" v-for="(Day, index) in Days" v-bind:key="index">
        <button class="btn" v-on:click="toWhichiDay(Day)">{{ Day }}</button>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col">名前</div>
        <div class="col" v-for="(option, index) in Options" v-bind:key="index">
          {{ option }}
        </div>
      </div>
      <div
        class="row"
        v-for="(schedule, index) in whichSift"
        v-bind:key="index"
      >
        <div class="col">
          {{ schedule.employeeName }}
        </div>
        <div class="col" v-for="(time, col) in Options" v-bind:key="col">
          <div
            class="col"
            v-on:click="changeColor(schedule, time, Day)"
            v-if="schedule.workingTime.includes(time)"
          >
            〇
          </div>
          <div class="col p-2 m-0 bg-light" v-else-if="workingTime === null">
            ✕
          </div>
          <div class="col p-2 m-0 bg-light" v-else>✕</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../firebase"
import {
  getDocs,
  collection,
  getDoc,
  setDoc,
  doc,
  query,
  where,
} from "firebase/firestore"
import { onAuthStateChanged, getAuth } from "firebase/auth"
export default {
  data() {
    return {
      today: 1,
      Month: 2,
      date: "",
      siftStartMonth: 1,
      siftStartday: 1,
      siftEndDay: 1,
      youbi: ["日", "月", "火", "水", "木", "金", "土"],
      Days: [],
      Options: [],
      selection: {},
      email: "",
      currentUserdata: [],
      schedules: [],
      whichDay: 0,
      whichSift: [],
      newArr: [],
      submitObjS: {},
      submitObjL: {},
    }
  },
  methods: {
    changeColor(schedule, time) {
      let key2 = this.whichDay
      this.submitObjL[key2] = this.submitObjS
      let key1 = schedule.employeeName
      this.submitObjS[key1] = time
    },
    default() {
      this.whichDay = this.siftStartday
    },
    toWhichiDay(Day) {
      this.whichDay = Day
      this.whichSift.length = 0
      getDocs(
        query(
          collection(db, "schedule"),
          where("date", "==", `${this.siftStartMonth}月${this.whichDay}日`)
        )
      ).then((snapshot) => {
        snapshot.forEach((doc) => {
          this.newArr.push(doc.data())
        })
      })

      this.whichSift = this.newArr
    },
    Calender() {
      this.Month = new Date().getMonth() + 1
      this.today = new Date().getDate()
      this.date = this.youbi[new Date().getDay()]
    },
    whenToStart() {
      if (this.today < 6 && this.today > 0) {
        this.siftStartMonth = this.Month
        this.siftStartday = 15
      } else if (this.today < 21 && this.today >= 6) {
        this.siftStartMonth = this.Month + 1
        this.siftStartday = 1
      } else if (this.today >= 21 && this.today < 31) {
        this.siftStartMonth = this.Month + 1
        this.siftStartday = 15
      }
    },
    whenToEnd() {
      if (
        (this.siftStartMonth === 4 ||
          this.siftStartMonth === 6 ||
          this.siftStartMonth === 9 ||
          this.siftStartMonth === 11) &&
        this.siftStartday !== 1
      ) {
        this.siftEndDay = 30
      } else if (this.siftStartMonth === 2 && this.siftStartday !== 1) {
        this.siftEndDay = 28
      } else if (this.siftStartday !== 1) {
        this.siftEndDay = 31
      } else if (this.siftStartday === 1) {
        this.siftEndDay = 15
      }
    },
    getDays() {
      for (let n = 0; n + this.siftStartday <= this.siftEndDay; n++) {
        this.Days.push(this.siftStartday + n)
      }
    },
    submit() {
      for (let n = 0; n < this.Days.length; n++) {
        let day = this.siftStartday + n
        setDoc(doc(db, "schedule", `${this.siftStartMonth}月${day}日`), {
          employeeName: this.currentUserdata[0].name,
          employeeStatus: this.currentUserdata[0].status,
          workingTime: this.selection[day],
        })
      }
    },
  },
  created() {
    this.Calender()
    this.whenToStart()
    this.default()
    this.whenToEnd()
    this.getDays()
    getDoc(doc(db, "company", "天下一品千里小野原店")).then((snapshot) => {
      for (
        let n = 0;
        n < snapshot.get("営業終了") - snapshot.get("営業開始");
        n++
      ) {
        this.Options.push(
          `${snapshot.get("営業開始") + n}~${snapshot.get("営業開始") + n + 1}`
        )
      }
    })
    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        this.emai = user.email
      }
    })
    getDocs(collection(db, "users")).then((snapshot) => {
      snapshot.forEach((doc) => {
        if (doc.get("uid") === this.email) {
          this.currentUserdata.push(doc.data())
        }
      })
    })
    getDocs(
      query(
        collection(db, "schedule"),
        where("date", "==", `${this.siftStartMonth}月${this.whichDay}日`)
      )
    ).then((snapshot) => {
      snapshot.forEach((doc) => {
        this.whichSift.push(doc.data())
      })
    })
  },
}
</script>
