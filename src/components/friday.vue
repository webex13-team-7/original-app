<template>
  <div class="container m-5 p-5 shadow">
    <div class="row m-1">
      <div class="col mb-5">
        <h3>{{ date }}</h3>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col">-</div>
      <div class="col">10-11</div>
      <div class="col">11-12</div>
      <div class="col">12-13</div>
      <div class="col">13-14</div>
      <div class="col">14-15</div>
      <div class="col">15-16</div>
      <div class="col">16-17</div>
      <div class="col">17-18</div>
      <div class="col">18-19</div>
      <div class="col">19-20</div>
      <div class="col">20-21</div>
      <div class="col">21-22</div>
      <div class="col">22-23</div>
    </div>
    <div
      class="row m-0"
      v-for="(scheduledata, index) in scheduleDatas"
      v-bind:key="index"
    >
      <div class="col p-2 m-0">{{ scheduledata.name }}</div>
      <div
        class="col"
        v-on:click="changeColor1(scheduledata)"
        v-if="scheduledata.schedule[4].friday.includes('1')"
        v-bind:class="
          unko1.includes(scheduledata)
            ? ['col', 'bg-primary', 'p-2', 'm-0']
            : ['col', 'p-2', 'm-0']
        "
      >
        〇
      </div>
      <div class="col p-2 m-0 bg-light" v-else>✕</div>
      <div
        class="col"
        v-on:click="changeColor2(scheduledata)"
        v-if="scheduledata.schedule[4].friday.includes('2')"
        v-bind:class="
          unko2.includes(scheduledata)
            ? ['col', 'bg-primary', 'p-2', 'm-0']
            : ['col', 'p-2', 'm-0']
        "
      >
        〇
      </div>
      <div class="col p-2 m-0 bg-light" v-else>✕</div>
      <div
        class="col"
        v-on:click="changeColor3(scheduledata)"
        v-if="scheduledata.schedule[4].friday.includes('3')"
        v-bind:class="
          unko3.includes(scheduledata)
            ? ['col', 'bg-primary', 'p-2', 'm-0']
            : ['col', 'p-2', 'm-0']
        "
      >
        〇
      </div>
      <div class="col p-2 m-0 bg-light" v-else>✕</div>
      <div
        class="col"
        v-on:click="changeColor4(scheduledata)"
        v-if="scheduledata.schedule[4].friday.includes('4')"
        v-bind:class="
          unko4.includes(scheduledata)
            ? ['col', 'bg-primary', 'p-2', 'm-0']
            : ['col', 'p-2', 'm-0']
        "
      >
        〇
      </div>
      <div class="col p-2 m-0 bg-light" v-else>✕</div>
      <div
        class="col"
        v-on:click="changeColor5(scheduledata)"
        v-if="scheduledata.schedule[4].friday.includes('5')"
        v-bind:class="
          unko5.includes(scheduledata)
            ? ['col', 'bg-primary', 'p-2', 'm-0']
            : ['col', 'p-2', 'm-0']
        "
      >
        〇
      </div>
      <div class="col p-2 m-0 bg-light" v-else>✕</div>
      <div
        class="col"
        v-on:click="changeColor6(scheduledata)"
        v-if="scheduledata.schedule[4].friday.includes('6')"
        v-bind:class="
          unko6.includes(scheduledata)
            ? ['col', 'bg-primary', 'p-2', 'm-0']
            : ['col', 'p-2', 'm-0']
        "
      >
        〇
      </div>
      <div class="col p-2 m-0 bg-light" v-else>✕</div>
      <div
        class="col"
        v-on:click="changeColor7(scheduledata)"
        v-if="scheduledata.schedule[4].friday.includes('7')"
        v-bind:class="
          unko7.includes(scheduledata)
            ? ['col', 'bg-primary', 'p-2', 'm-0']
            : ['col', 'p-2', 'm-0']
        "
      >
        〇
      </div>
      <div class="col p-2 m-0 bg-light" v-else>✕</div>
      <div
        class="col"
        v-on:click="changeColor8(scheduledata)"
        v-if="scheduledata.schedule[4].friday.includes('8')"
        v-bind:class="
          unko8.includes(scheduledata)
            ? ['col', 'bg-primary', 'p-2', 'm-0']
            : ['col', 'p-2', 'm-0']
        "
      >
        〇
      </div>
      <div class="col p-2 m-0 bg-light" v-else>✕</div>
      <div
        class="col"
        v-on:click="changeColor9(scheduledata)"
        v-if="scheduledata.schedule[4].friday.includes('9')"
        v-bind:class="
          unko9.includes(scheduledata)
            ? ['col', 'bg-primary', 'p-2', 'm-0']
            : ['col', 'p-2', 'm-0']
        "
      >
        〇
      </div>
      <div class="col p-2 m-0 bg-light" v-else>✕</div>
      <div
        class="col"
        v-on:click="changeColor10(scheduledata)"
        v-if="scheduledata.schedule[4].friday.includes('10')"
        v-bind:class="
          unko10.includes(scheduledata)
            ? ['col', 'bg-primary', 'p-2', 'm-0']
            : ['col', 'p-2', 'm-0']
        "
      >
        〇
      </div>
      <div class="col p-2 m-0 bg-light" v-else>✕</div>
      <div
        class="col"
        v-on:click="changeColor11(scheduledata)"
        v-if="scheduledata.schedule[4].friday.includes('11')"
        v-bind:class="
          unko11.includes(scheduledata)
            ? ['col', 'bg-primary', 'p-2', 'm-0']
            : ['col', 'p-2', 'm-0']
        "
      >
        〇
      </div>
      <div class="col p-2 m-0 bg-light" v-else>✕</div>
      <div
        class="col"
        v-on:click="changeColor12(scheduledata)"
        v-if="scheduledata.schedule[4].friday.includes('12')"
        v-bind:class="
          unko12.includes(scheduledata)
            ? ['col', 'bg-primary', 'p-2', 'm-0']
            : ['col', 'p-2', 'm-0']
        "
      >
        〇
      </div>
      <div class="col p-2 m-0 bg-light" v-else>✕</div>
      <div
        class="col"
        v-on:click="changeColor13(scheduledata)"
        v-if="scheduledata.schedule[4].friday.includes('13')"
        v-bind:class="
          unko13.includes(scheduledata)
            ? ['col', 'bg-primary', 'p-2', 'm-0']
            : ['col', 'p-2', 'm-0']
        "
      >
        〇
      </div>
      <div class="col p-2 m-0 bg-light" v-else>✕</div>
    </div>
    <div class="row mt-5">
      <div class="col">
        <button class="btn btn-success" v-on:click="submit">確定</button>
      </div>
    </div>
  </div>
</template>
<script>
import { collection, getDocs, addDoc } from "firebase/firestore"
import { onAuthStateChanged, getAuth } from "firebase/auth"
import { db } from "../firebase"

export default {
  data() {
    return {
      date: "金曜",
      Names: ["tinko", "manko", "unko"],
      scheduleDatas: [],
      scheduleWeeklyDatas: [],
      monday: [],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [],
      sunday: [],
      someonesSchedule: [],
      currentUser: "",
      dayCondition: "",
      unko1: [],
      unko2: [],
      unko3: [],
      unko4: [],
      unko5: [],
      unko6: [],
      unko7: [],
      unko8: [],
      unko9: [],
      unko10: [],
      unko11: [],
      unko12: [],
      unko13: [],
    }
  },
  methods: {
    changeColor1(scheduledata) {
      if (!this.unko1.includes(scheduledata)) {
        this.unko1.push(scheduledata)
      } else {
        this.unko1 = this.unko1.filter((value) => {
          return value !== scheduledata
        })
      }
    },
    changeColor2(scheduledata) {
      if (!this.unko2.includes(scheduledata)) {
        this.unko2.push(scheduledata)
      } else {
        this.unko2 = this.unko2.filter((value) => {
          return value !== scheduledata
        })
      }
    },
    changeColor3(scheduledata) {
      if (!this.unko3.includes(scheduledata)) {
        this.unko3.push(scheduledata)
      } else {
        this.unko3 = this.unko3.filter((value) => {
          return value !== scheduledata
        })
      }
    },
    changeColor4(scheduledata) {
      if (!this.unko4.includes(scheduledata)) {
        this.unko4.push(scheduledata)
      } else {
        this.unko4 = this.unko4.filter((value) => {
          return value !== scheduledata
        })
      }
    },
    changeColor5(scheduledata) {
      if (!this.unko5.includes(scheduledata)) {
        this.unko5.push(scheduledata)
      } else {
        this.unko5 = this.unko5.filter((value) => {
          return value !== scheduledata
        })
      }
    },
    changeColor6(scheduledata) {
      if (!this.unko6.includes(scheduledata)) {
        this.unko6.push(scheduledata)
      } else {
        this.unko6 = this.unko6.filter((value) => {
          return value !== scheduledata
        })
      }
    },
    changeColor7(scheduledata) {
      if (!this.unko7.includes(scheduledata)) {
        this.unko7.push(scheduledata)
      } else {
        this.unko7 = this.unko7.filter((value) => {
          return value !== scheduledata
        })
      }
    },
    changeColor8(scheduledata) {
      if (!this.unko8.includes(scheduledata)) {
        this.unko8.push(scheduledata)
      } else {
        this.unko8 = this.unko8.filter((value) => {
          return value !== scheduledata
        })
      }
    },
    changeColor9(scheduledata) {
      if (!this.unko9.includes(scheduledata)) {
        this.unko9.push(scheduledata)
      } else {
        this.unko9 = this.unko9.filter((value) => {
          return value !== scheduledata
        })
      }
    },
    changeColor10(scheduledata) {
      if (!this.unko10.includes(scheduledata)) {
        this.unko10.push(scheduledata)
      } else {
        this.unko10 = this.unko10.filter((value) => {
          return value !== scheduledata
        })
      }
    },
    changeColor11(scheduledata) {
      if (!this.unko11.includes(scheduledata)) {
        this.unko11.push(scheduledata)
      } else {
        this.unko11 = this.unko11.filter((value) => {
          return value !== scheduledata
        })
      }
    },
    changeColor12(scheduledata) {
      if (!this.unko12.includes(scheduledata)) {
        this.unko12.push(scheduledata)
      } else {
        this.unko12 = this.unko12.filter((value) => {
          return value !== scheduledata
        })
      }
    },
    changeColor13(scheduledata) {
      if (!this.unko13.includes(scheduledata)) {
        this.unko13.push(scheduledata)
      } else {
        this.unko13 = this.unko13.filter((value) => {
          return value !== scheduledata
        })
      }
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
    submit() {
      addDoc(collection(db, "sifts"), {
        friday1: this.unko1,
        friday2: this.unko2,
        friday3: this.unko3,
        friday4: this.unko4,
        friday5: this.unko5,
        friday6: this.unko6,
        friday7: this.unko7,
        friday8: this.unko8,
        friday9: this.unko9,
        friday10: this.unko10,
        friday11: this.unko11,
        friday12: this.unko12,
        friday13: this.unko13,
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
