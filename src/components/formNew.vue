<template>
  {{ selection }}
  <div class="container-lg bg-light m-5 p-5">
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div
          class="carousel-item active"
          data-bs-interval="99999"
          style="height: 5000px"
        >
          <div class="container mt-5 p-5">
            <div class="row m-5"><h2>Week1</h2></div>
            <div class="row">
              <div class="co" v-for="day in Days.slice(0, 8)" v-bind:key="day">
                <div>{{ day }}日</div>
                <select v-model="selection[day]" multiple class="form-control">
                  <option
                    v-for="(option, index) in Options"
                    v-bind:key="index"
                    v-bind:value="option"
                  >
                    {{ option }}
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div
          class="carousel-item"
          data-bs-interval="99999"
          style="height: 5000px; width: 800px"
        >
          <div class="container mt-5 p-5">
            <div class="row m-auto"><h2>Week2</h2></div>
            <div class="row m-3">
              <div class="co" v-for="day in Days.slice(8)" v-bind:key="day">
                <div>{{ day }}日</div>
                <select v-model="selection[day]" multiple class="form-control">
                  <option
                    v-for="(option, index) in Options"
                    v-bind:key="index"
                    v-bind:value="option"
                  >
                    {{ option }}
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div class="row">
      <div class="col">
        <button class="btn btn-md btn-primary" v-on:click="submit">確定</button>
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
        if (this.selection[day]) {
          setDoc(
            doc(
              db,
              "schedule",
              `${this.siftStartMonth}月${day}日-${this.currentUserdata[0].name}`
            ),
            {
              employeeName: this.currentUserdata[0].name,
              employeeStatus: this.currentUserdata[0].status,
              workingTime: this.selection[day],
              date: `${this.siftStartMonth}月${day}日`,
            }
          )
        } else {
          setDoc(
            doc(
              db,
              "schedule",
              `${this.siftStartMonth}月${day}日-${this.currentUserdata[0].name}`
            ),
            {
              employeeName: this.currentUserdata[0].name,
              employeeStatus: this.currentUserdata[0].status,
              workingTime: null,
              date: `${this.siftStartMonth}月${day}日`,
            }
          )
        }
      }
    },
    // submit() {
    //   for (let n = 0; n < this.Days.length; n++) {
    //     let day = this.siftStartday + n
    //     addDoc(collection(db, "schedules"), {
    //       // workingTime: this.selection[day],
    //       employeeName: this.currentUserdata[0].name,
    //       status: this.currentUserdata[0].status,
    //       date: `${this.siftStartMonth}月${day}日`,
    //     })
    //   }
    // },
    // calcu() {
    //   this.employeeName = this.currentUserdata[0].name
    //   this.employeeStatus = this.currentUserdata[0].status
    // },
  },
  created() {
    this.Calender()
    this.whenToStart()
    this.whenToEnd()
    this.getDays()
    // this.calcu()
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
        this.email = user.email
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
