<template>
  <div class="container">
    <div class="row">
      <div class="col">{{ text }}</div>
      <div class="col">{{ date }}</div>
    </div>
  </div>
  <Form />
  <Table />
</template>
<script>
import Form from "@/components/form.vue"
import Table from "@/components/tableOX.vue"


export default {
  components: {
    Form: Form,
    Table: Table
  },
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
