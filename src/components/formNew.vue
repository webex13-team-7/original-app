<template>
  <div class="container m-5 p-5 shadow">
    <div class="row">
      <div class="col">
        <h2>
          {{ siftStartMonth }}月の{{ siftStartday }}日から{{
            siftEndDay
          }}日までのシフトを送信してください。
        </h2>
        <button class="btn btn-danger" v-on:click="submit">送信</button>
      </div>
    </div>
  </div>
</template>
<script>
import { db } from "../firebase"
import { setDoc, doc } from "firebase/firestore"
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
    submit() {
      setDoc(
        doc(
          db,
          "sifts",
          `${this.siftStartMonth}月${this.siftStartday}日-${this.siftEndDay}`
        ),
        {
          unko: "セックス",
        }
      )
    },
  },
  created() {
    this.Calender()
    this.whenToStart()
    this.whenToEnd()
  },
}
</script>

００月００日 [{name:oo,schedule:[0,0,0,],satus:{kitchen:t,whole:t}}...]
