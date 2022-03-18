<template>
  <form>
    <div class="container">
      <div class="row">
        <div class="col"><p>月</p></div>
        <div class="col"><p>火</p></div>
        <div class="col"><p>水</p></div>
        <div class="col"><p>木</p></div>
        <div class="col"><p>金</p></div>
        <div class="col"><p>土</p></div>
        <div class="col"><p>日</p></div>
      </div>
      <div class="row">
        <div class="col form-group">
          <select
            class="form-select"
            v-model="monday"
            aria-label="Default select example"
          >
            <option value="true">ok</option>
            <option value="false">無理</option>
          </select>
        </div>
        <div class="col form-group">
          <select
            class="form-select"
            v-model="tuesday"
            aria-label="Default select example"
          >
            <option selected></option>
            <option value="true">ok</option>
            <option value="false">無理</option>
          </select>
        </div>
        <div class="col form-group">
          <select
            class="form-select"
            v-model="wednesday"
            aria-label="Default select example"
          >
            <option value="true">ok</option>
            <option value="false">無理</option>
          </select>
        </div>
        <div class="col form-group">
          <select
            class="form-select"
            v-model="thursday"
            aria-label="Default select example"
          >
            <option value="true">ok</option>
            <option value="false">無理</option>
          </select>
        </div>
        <div class="col form-group">
          <select
            class="form-select"
            v-model="friday"
            aria-label="Default select example"
          >
            <option value="true">ok</option>
            <option value="false">無理</option>
          </select>
        </div>
        <div class="col form-group">
          <select
            class="form-select"
            v-model="saturday"
            aria-label="Default select example"
          >
            <option selected></option>
            <option value="true">ok</option>
            <option value="false">無理</option>
          </select>
        </div>
        <div class="col form-group">
          <select
            class="form-select"
            v-model="sunday"
            aria-label="Default select example"
          >
            <option value="true">ok</option>
            <option value="false">無理</option>
          </select>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col">
          <button class="btn btn-success" v-on:click="postSchedule">
            送信
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { collection, addDoc } from "firebase/firestore"
// firebase.js で db として export したものを import
import { db } from "../firebase"

export default {
  data() {
    return {
      schedules2: [
        { monday: "" },
        { tuesday: "" },
        { wednesday: "" },
        { thursday: "" },
        { friday: "" },
        { saturday: "" },
        { sunday: "" },
      ],
      monday: "",
      tuesday: "",
      wednesday: "",
      thursday: "",
      friday: "",
      saturday: "",
      sunday: "",
    }
  },
  methods: {
    postSchedule() {
      this.schedules2[0].monday = this.monday
      this.schedules2[1].tuesday = this.tuesday
      this.schedules2[2].wednesday = this.wednesday
      this.schedules2[3].thursday = this.thursday
      this.schedules2[4].friday = this.friday
      this.schedules2[5].saturday = this.saturday
      this.schedules2[6].sunday = this.sunday
      addDoc(collection(db, "schedule"), {
        schedule: this.schedules2,
      })
    },
  },
}
</script>

<style></style>
