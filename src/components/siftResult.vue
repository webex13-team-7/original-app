<template>
  <div class="container shadow">
    <div class="row"><h1>シフト作成画面</h1></div>
    <div class="container">
      <div class="row">
        <div class="col">-</div>
        <div class="col" v-for="(option, index) in Options" v-bind:key="index">
          {{ option }}
        </div>
      </div>
      <div
        class="row"
        v-for="(schedule, index) in schedules"
        v-bind:key="index"
      >
        <div class="col">
          {{ schedule.name }}
        </div>
        <div class="col">{{ schedule.schedule }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../firebase"
import { getDocs, collection, getDoc, setDoc, doc } from "firebase/firestore"
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
    }
  },
  methods: {
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
    // calcu() {
    //   this.employeeName = this.currentUserdata[0].name
    //   this.employeeStatus = this.currentUserdata[0].status
    // },
  },
  created() {
    this.Caleder()
    this.whenToStar()
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
    getDocs(collection(db, "schedule")).then((snapshot) => {
      snapshot.forEach((doc) => {
        this.schedules.push(doc.data())
      })
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
  },
}
</script>
