<template>
  <div class="container">
    <div class="row m-5">
      <div class="col">{{ date }}</div>
    </div>
    <div class="row m-5">
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
      class="row m-5"
      v-for="(scheduledata, index) in scheduleDatas"
      v-bind:key="index"
    >
      <div class="col">{{ scheduledata.name }}</div>
      <div class="col" v-if="scheduledata.schedule[3].thursday.includes('1')">
        〇
      </div>
      <div class="col" v-else>✕</div>
      <div class="col" v-if="scheduledata.schedule[3].thursday.includes('2')">
        〇
      </div>
      <div class="col" v-else>✕</div>
      <div class="col" v-if="scheduledata.schedule[3].thursday.includes('3')">
        〇
      </div>
      <div class="col" v-else>✕</div>
      <div class="col" v-if="scheduledata.schedule[3].thursday.includes('4')">
        〇
      </div>
      <div class="col" v-else>✕</div>
      <div class="col" v-if="scheduledata.schedule[3].thursday.includes('5')">
        〇
      </div>
      <div class="col" v-else>✕</div>
      <div class="col" v-if="scheduledata.schedule[3].thursday.includes('6')">
        〇
      </div>
      <div class="col" v-else>✕</div>
      <div class="col" v-if="scheduledata.schedule[3].thursday.includes('7')">
        〇
      </div>
      <div class="col" v-else>✕</div>
      <div class="col" v-if="scheduledata.schedule[3].thursday.includes('8')">
        〇
      </div>
      <div class="col" v-else>✕</div>
      <div class="col" v-if="scheduledata.schedule[3].thursday.includes('9')">
        〇
      </div>
      <div class="col" v-else>✕</div>
      <div class="col" v-if="scheduledata.schedule[3].thursday.includes('10')">
        〇
      </div>
      <div class="col" v-else>✕</div>
      <div class="col" v-if="scheduledata.schedule[3].thursday.includes('11')">
        〇
      </div>
      <div class="col" v-else>✕</div>
      <div class="col" v-if="scheduledata.schedule[3].thursday.includes('12')">
        〇
      </div>
      <div class="col" v-else>✕</div>
      <div class="col" v-if="scheduledata.schedule[3].thursday.includes('13')">
        〇
      </div>
      <div class="col" v-else>✕</div>
    </div>
  </div>
</template>
<script>
import { collection, getDocs } from "firebase/firestore"
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
      whoCanWork: [],
    }
  },
  methods: {
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
