<template>
  <div v-for="schedule in schedules2" v-bind:key="schedule.id">
    <div>{{ schedule.id }}</div>
  </div>
  <div v-for="schedule in schedules2" v-bind:key="schedule">
    <div v-for="sift in schedule.schedule" v-bind:key="sift">
      <div>{{ sift }}</div>
    </div>
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
