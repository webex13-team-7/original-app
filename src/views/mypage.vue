<template>
  <div class="container">
    <div class="row">
      <div class="col">{{ text }}</div>
      <div class="col">{{ date }}</div>
      <button v-on:click="Calender">unko</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: "unko",
      date: "",
      youbi: ["日", "月", "火", "水", "木", "金", "土"],
    }
  },
  methods: {
    Calender() {
      this.date =
        new Date().getMonth() +
        1 +
        "月" +
        new Date().getDate() +
        "日" +
        this.youbi[new Date().getDay()] +
        "曜日"
    },
  },
  created() {
    this.Calender()
  },
}
</script>
