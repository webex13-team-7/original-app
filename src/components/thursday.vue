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
        v-if="scheduledata.schedule[3].thursday.includes('1')"
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
        v-if="scheduledata.schedule[3].thursday.includes('2')"
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
        v-if="scheduledata.schedule[3].thursday.includes('3')"
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
        v-if="scheduledata.schedule[3].thursday.includes('4')"
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
        v-if="scheduledata.schedule[3].thursday.includes('5')"
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
        v-if="scheduledata.schedule[3].thursday.includes('6')"
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
        v-if="scheduledata.schedule[3].thursday.includes('7')"
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
        v-if="scheduledata.schedule[3].thursday.includes('8')"
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
        v-if="scheduledata.schedule[3].thursday.includes('9')"
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
        v-if="scheduledata.schedule[3].thursday.includes('10')"
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
        v-if="scheduledata.schedule[3].thursday.includes('11')"
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
        v-if="scheduledata.schedule[3].thursday.includes('12')"
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
        v-if="scheduledata.schedule[3].thursday.includes('13')"
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
    <div class="row m-0">
      <div class="col p-2 m-0">うんこ</div>
      <div
        class="col bg-danger p-2 m-0"
        v-if="kitchenNinzu1 === 0 || wholeNinzu1 === 0"
      >
        ✕
      </div>
      <div class="col bg-primary p-2 m-0" v-else>〇</div>
      <div
        class="col bg-danger p-2 m-0"
        v-if="kitchenNinzu2 === 0 || wholeNinzu2 === 0"
      >
        ✕
      </div>
      <div class="col bg-primary p-2 m-0" v-else>〇</div>
      <div
        class="col bg-danger p-2 m-0"
        v-if="kitchenNinzu3 === 0 || wholeNinzu3 === 0"
      >
        ✕
      </div>
      <div class="col bg-primary p-2 m-0" v-else>〇</div>
      <div
        class="col bg-danger p-2 m-0"
        v-if="kitchenNinzu4 === 0 || wholeNinzu4 === 0"
      >
        ✕
      </div>
      <div class="col bg-primary p-2 m-0" v-else>〇</div>
      <div
        class="col bg-danger p-2 m-0"
        v-if="kitchenNinzu5 === 0 || wholeNinzu5 === 0"
      >
        ✕
      </div>
      <div class="col bg-primary p-2 m-0" v-else>〇</div>
      <div
        class="col bg-danger p-2 m-0"
        v-if="kitchenNinzu6 === 0 || wholeNinzu6 === 0"
      >
        ✕
      </div>
      <div class="col bg-primary p-2 m-0" v-else>〇</div>
      <div
        class="col bg-danger p-2 m-0"
        v-if="kitchenNinzu7 === 0 || wholeNinzu7 === 0"
      >
        ✕
      </div>
      <div class="col bg-primary p-2 m-0" v-else>〇</div>
      <div
        class="col bg-danger p-2 m-0"
        v-if="kitchenNinzu8 === 0 || wholeNinzu8 === 0"
      >
        ✕
      </div>
      <div class="col bg-primary p-2 m-0" v-else>〇</div>
      <div
        class="col bg-danger p-2 m-0"
        v-if="kitchenNinzu9 === 0 || wholeNinzu9 === 0"
      >
        ✕
      </div>
      <div class="col bg-primary p-2 m-0" v-else>〇</div>
      <div
        class="col bg-danger p-2 m-0"
        v-if="kitchenNinzu10 === 0 || wholeNinzu10 === 0"
      >
        ✕
      </div>
      <div class="col bg-primary p-2 m-0" v-else>〇</div>
      <div
        class="col bg-danger p-2 m-0"
        v-if="kitchenNinzu11 === 0 || wholeNinzu11 === 0"
      >
        ✕
      </div>
      <div class="col bg-primary p-2 m-0" v-else>〇</div>
      <div
        class="col bg-danger p-2 m-0"
        v-if="kitchenNinzu12 === 0 || wholeNinzu12 === 0"
      >
        ✕
      </div>
      <div class="col bg-primary p-2 m-0" v-else>〇</div>
      <div
        class="col bg-danger p-2 m-0"
        v-if="kitchenNinzu13 === 0 || wholeNinzu13 === 0"
      >
        ✕
      </div>
      <div class="col bg-primary p-2 m-0" v-else>〇</div>
    </div>
    <div class="row mt-5">
      <div class="col">
        <button class="btn btn-success" v-on:click="submit">確定</button>
      </div>
    </div>
  </div>
</template>
<script>
import { doc, setDoc, collection, getDocs } from "firebase/firestore"
import { onAuthStateChanged, getAuth } from "firebase/auth"
import { db } from "../firebase"

export default {
  data() {
    return {
      date: "木曜",
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
      if(
        this.kitchenNinzu1 !== 0 &&
        this.wholeNinzu1 !== 0 &&
        this.kitchenNinzu2 !== 0 &&
        this.wholeNinzu2 !== 0 &&
        this.kitchenNinzu3 !== 0 &&
        this.wholeNinzu3 !== 0 &&
        this.kitchenNinzu4 !== 0 &&
        this.wholeNinzu4 !== 0 &&
        this.kitchenNinzu5 !== 0 &&
        this.wholeNinzu5 !== 0 &&
        this.kitchenNinzu6 !== 0 &&
        this.wholeNinzu6 !== 0 &&
        this.kitchenNinzu7 !== 0 &&
        this.wholeNinzu7 !== 0 &&
        this.kitchenNinzu8 !== 0 &&
        this.wholeNinzu8 !== 0 &&
        this.kitchenNinzu9 !== 0 &&
        this.wholeNinzu9 !== 0 &&
        this.kitchenNinzu10 !== 0 &&
        this.wholeNinzu10 !== 0 &&
        this.kitchenNinzu11 !== 0 &&
        this.wholeNinzu11 !== 0 &&
        this.kitchenNinzu12 !== 0 &&
        this.wholeNinzu12 !== 0 &&
        this.kitchenNinzu13 !== 0 &&
        this.wholeNinzu13 !== 0
      ){
      setDoc(doc(db, "sifts" , "thursday"), {
        thursday1: this.unko1,
        thursday2: this.unko2,
        thursday3: this.unko3,
        thursday4: this.unko4,
        thursday5: this.unko5,
        thursday6: this.unko6,
        thursday7: this.unko7,
        thursday8: this.unko8,
        thursday9: this.unko9,
        thursday10: this.unko10,
        thursday11: this.unko11,
        thursday12: this.unko12,
        thursday13: this.unko13,
      })
      }else{
        alert("キッチンスタッフあるいはホールスタッフがいない時間帯があります！！")
      }
    },
  },
    computed: {
    kitchenNinzu1: function () {
      let kitchenNinzu = 0
      this.unko1.forEach((value) => {
        if (value.status.kitchen === true) {
          kitchenNinzu++
        }
      })
      return kitchenNinzu
    },
    wholeNinzu1: function () {
      let wholeNinzu = 0
      this.unko1.forEach((value) => {
        if (value.status.whole === true) {
          wholeNinzu++
        }
      })
      return wholeNinzu
    },
    kitchenNinzu2: function () {
      let kitchenNinzu = 0
      this.unko2.forEach((value) => {
        if (value.status.kitchen === true) {
          kitchenNinzu++
        }
      })
      return kitchenNinzu
    },
    wholeNinzu2: function () {
      let wholeNinzu = 0
      this.unko2.forEach((value) => {
        if (value.status.whole === true) {
          wholeNinzu++
        }
      })
      return wholeNinzu
    },
    kitchenNinzu3: function () {
      let kitchenNinzu = 0
      this.unko3.forEach((value) => {
        if (value.status.kitchen === true) {
          kitchenNinzu++
        }
      })
      return kitchenNinzu
    },
    wholeNinzu3: function () {
      let wholeNinzu = 0
      this.unko3.forEach((value) => {
        if (value.status.whole === true) {
          wholeNinzu++
        }
      })
      return wholeNinzu
    },
    kitchenNinzu4: function () {
      let kitchenNinzu = 0
      this.unko4.forEach((value) => {
        if (value.status.kitchen === true) {
          kitchenNinzu++
        }
      })
      return kitchenNinzu
    },
    wholeNinzu4: function () {
      let wholeNinzu = 0
      this.unko4.forEach((value) => {
        if (value.status.whole === true) {
          wholeNinzu++
        }
      })
      return wholeNinzu
    },
    kitchenNinzu5: function () {
      let kitchenNinzu = 0
      this.unko5.forEach((value) => {
        if (value.status.kitchen === true) {
          kitchenNinzu++
        }
      })
      return kitchenNinzu
    },
    wholeNinzu5: function () {
      let wholeNinzu = 0
      this.unko5.forEach((value) => {
        if (value.status.whole === true) {
          wholeNinzu++
        }
      })
      return wholeNinzu
    },
    kitchenNinzu6: function () {
      let kitchenNinzu = 0
      this.unko6.forEach((value) => {
        if (value.status.kitchen === true) {
          kitchenNinzu++
        }
      })
      return kitchenNinzu
    },
    wholeNinzu6: function () {
      let wholeNinzu = 0
      this.unko6.forEach((value) => {
        if (value.status.whole === true) {
          wholeNinzu++
        }
      })
      return wholeNinzu
    },
    kitchenNinzu7: function () {
      let kitchenNinzu = 0
      this.unko7.forEach((value) => {
        if (value.status.kitchen === true) {
          kitchenNinzu++
        }
      })
      return kitchenNinzu
    },
    wholeNinzu7: function () {
      let wholeNinzu = 0
      this.unko7.forEach((value) => {
        if (value.status.whole === true) {
          wholeNinzu++
        }
      })
      return wholeNinzu
    },
    kitchenNinzu8: function () {
      let kitchenNinzu = 0
      this.unko8.forEach((value) => {
        if (value.status.kitchen === true) {
          kitchenNinzu++
        }
      })
      return kitchenNinzu
    },
    wholeNinzu8: function () {
      let wholeNinzu = 0
      this.unko8.forEach((value) => {
        if (value.status.whole === true) {
          wholeNinzu++
        }
      })
      return wholeNinzu
    },
    kitchenNinzu9: function () {
      let kitchenNinzu = 0
      this.unko9.forEach((value) => {
        if (value.status.kitchen === true) {
          kitchenNinzu++
        }
      })
      return kitchenNinzu
    },
    wholeNinzu9: function () {
      let wholeNinzu = 0
      this.unko9.forEach((value) => {
        if (value.status.whole === true) {
          wholeNinzu++
        }
      })
      return wholeNinzu
    },
    kitchenNinzu10: function () {
      let kitchenNinzu = 0
      this.unko10.forEach((value) => {
        if (value.status.kitchen === true) {
          kitchenNinzu++
        }
      })
      return kitchenNinzu
    },
    wholeNinzu10: function () {
      let wholeNinzu = 0
      this.unko10.forEach((value) => {
        if (value.status.whole === true) {
          wholeNinzu++
        }
      })
      return wholeNinzu
    },
    kitchenNinzu11: function () {
      let kitchenNinzu = 0
      this.unko11.forEach((value) => {
        if (value.status.kitchen === true) {
          kitchenNinzu++
        }
      })
      return kitchenNinzu
    },
    wholeNinzu11: function () {
      let wholeNinzu = 0
      this.unko11.forEach((value) => {
        if (value.status.whole === true) {
          wholeNinzu++
        }
      })
      return wholeNinzu
    },
    kitchenNinzu12: function () {
      let kitchenNinzu = 0
      this.unko12.forEach((value) => {
        if (value.status.kitchen === true) {
          kitchenNinzu++
        }
      })
      return kitchenNinzu
    },
    wholeNinzu12: function () {
      let wholeNinzu = 0
      this.unko12.forEach((value) => {
        if (value.status.whole === true) {
          wholeNinzu++
        }
      })
      return wholeNinzu
    },
    kitchenNinzu13: function () {
      let kitchenNinzu = 0
      this.unko13.forEach((value) => {
        if (value.status.kitchen === true) {
          kitchenNinzu++
        }
      })
      return kitchenNinzu
    },
    wholeNinzu13: function () {
      let wholeNinzu = 0
      this.unko13.forEach((value) => {
        if (value.status.whole === true) {
          wholeNinzu++
        }
      })
      return wholeNinzu
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
