<template>
  <marubatu />
  <table>
    <tr>
      <th>曜日</th>
      <th>{{ schedules2[0].id }}</th>
    </tr>
    <tr>
      <th>月</th>
      <td v-if="schedules2[0].schedule[0].monday">〇</td>
      <td v-else>✖</td>
    </tr>
    <tr>
      <th>火</th>
      <td v-if="schedules2[0].schedule[1].tuesday">〇</td>
      <td v-else>✖</td>
    </tr>
    <tr>
      <th>水</th>
      <td v-if="schedules2[0].schedule[2].wednesday">〇</td>
      <td v-else>✖</td>
    </tr>
    <tr>
      <th>木</th>
      <td v-if="schedules2[0].schedule[3].thursday">〇</td>
      <td v-else>✖</td>
    </tr>
    <tr>
      <th>金</th>
      <td v-if="schedules2[0].schedule[4].friday">〇</td>
      <td v-else>✖</td>
    </tr>
    <tr>
      <th>土</th>
      <td v-if="schedules2[0].schedule[5].saturday">〇</td>
      <td v-else>✖</td>
    </tr>
    <tr>
      <th>日</th>
      <td v-if="schedules2[0].schedule[6].sunday">〇</td>
      <td v-else>✖</td>
    </tr>
  </table>
  {{ schedules2 }}
  <div v-for="schedule in schedules2" v-bind:key="schedule.id">
    <div>{{ schedule.id }}</div>
    <div>{{ schedule.schedule }}</div>
  </div>
</template>

<script>
import OX from "../components/tableOX"
// import Calender from "../components/tableDate"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase"

export default {
  components: {
    marubatu: OX,
    // calender: Calender,
  },
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

<style>
table {
  margin: 0 auto;
}
th {
  width: 150px;
  height: 30px;
  border: solid;
  background-color: #c9c6c6;
}
td {
  background-color: #fff;
  border: solid 0.1px;
}

.container {
  display: flex;
}
</style>
