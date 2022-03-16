<template>
  <div v-for="(schedule, index) in schedules2" v-bind:key="index">
    <table>
      <tr>
        <th>{{ schedule.id }}</th>
      </tr>
      <tr>
        <td v-if="schedule.schedule[0].monday">〇</td>
        <td v-else>✖</td>
      </tr>
      <tr>
        <td v-if="schedule.schedule[1].tuesday">〇</td>
        <td v-else>✖</td>
      </tr>
      <tr>
        <td v-if="schedules.schedule[2].wednesday">〇</td>
        <td v-else>✖</td>
      </tr>
      <tr>
        <td v-if="schedules.schedule[3].thursday">〇</td>
        <td v-else>✖</td>
      </tr>
      <tr>
        <td v-if="schedules.schedule[4].friday">〇</td>
        <td v-else>✖</td>
      </tr>
      <tr>
        <td v-if="schedules.schedule[5].saturday">〇</td>
        <td v-else>✖</td>
      </tr>
      <tr>
        <td v-if="schedules.schedule[6].sunday">〇</td>
        <td v-else>✖</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase"

export default {
  data() {
    return {
      schedules2: [],
    }
  },

  created() {
    getDocs(collection(db, "schedule")).then((snapshot) => {
      snapshot.forEach((doc) => {
        this.schedules2.push({
          id: doc.id,
          ...doc.data(),
        })
      })
    })
  },
}
</script>
