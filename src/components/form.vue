<template>
  <form>
    <br />
    <br />
    <br />
    <br />
    <div class="container mt-5 pb-5 bg-light shadow-lg">
      <div class="row pt-4 pb-3 bg-success text-white">
        <h1>シフトを選択してください</h1>
      </div>
      <!-- <div class="row pt-4 pb-3 bg-success text-white" v-else>
        <h1>送信完了しました！</h1>
      </div> -->
      <div class="row mt-2">
        <div class="col mt-5"><p>月</p></div>
        <div class="col mt-5"><p>火</p></div>
        <div class="col mt-5"><p>水</p></div>
        <div class="col mt-5"><p>木</p></div>
        <div class="col mt-5"><p>金</p></div>
        <div class="col mt-5"><p>土</p></div>
        <div class="col mt-5"><p>日</p></div>
      </div>
      <div class="row">
        <div class="col form-group">
          <select
            class="form-select form-control"
            v-model="monday"
            aria-label="Default select example"
            multiple
          >
            <option value="1">10-11</option>
            <option value="2">11-12</option>
            <option value="3">12-13</option>
            <option value="4">13-14</option>
            <option value="5">14-15</option>
            <option value="6">15-16</option>
            <option value="7">16-17</option>
            <option value="8">17-18</option>
            <option value="9">18-19</option>
            <option value="10">19-20</option>
            <option value="11">20-21</option>
            <option value="12">21-22</option>
            <option value="13">22-23</option>
          </select>
        </div>
        <div class="col form-group">
          <select
            class="form-select"
            v-model="tuesday"
            aria-label="Default select example"
            multiple
          >
            <option value="1">10-11</option>
            <option value="2">11-12</option>
            <option value="3">12-13</option>
            <option value="4">13-14</option>
            <option value="5">14-15</option>
            <option value="6">15-16</option>
            <option value="7">16-17</option>
            <option value="8">17-18</option>
            <option value="9">18-19</option>
            <option value="10">19-20</option>
            <option value="11">20-21</option>
            <option value="12">21-22</option>
            <option value="13">22-23</option>
          </select>
        </div>
        <div class="col form-group">
          <select
            class="form-select"
            v-model="wednesday"
            aria-label="Default select example"
            multiple
          >
            <option value="1">10-11</option>
            <option value="2">11-12</option>
            <option value="3">12-13</option>
            <option value="4">13-14</option>
            <option value="5">14-15</option>
            <option value="6">15-16</option>
            <option value="7">16-17</option>
            <option value="8">17-18</option>
            <option value="9">18-19</option>
            <option value="10">19-20</option>
            <option value="11">20-21</option>
            <option value="12">21-22</option>
            <option value="13">22-23</option>
          </select>
        </div>
        <div class="col form-group">
          <select
            class="form-select"
            v-model="thursday"
            aria-label="Default select example"
            multiple
          >
            <option value="1">10-11</option>
            <option value="2">11-12</option>
            <option value="3">12-13</option>
            <option value="4">13-14</option>
            <option value="5">14-15</option>
            <option value="6">15-16</option>
            <option value="7">16-17</option>
            <option value="8">17-18</option>
            <option value="9">18-19</option>
            <option value="10">19-20</option>
            <option value="11">20-21</option>
            <option value="12">21-22</option>
            <option value="13">22-23</option>
          </select>
        </div>
        <div class="col form-group">
          <select
            class="form-select"
            v-model="friday"
            aria-label="Default select example"
            multiple
          >
            <option value="1">10-11</option>
            <option value="2">11-12</option>
            <option value="3">12-13</option>
            <option value="4">13-14</option>
            <option value="5">14-15</option>
            <option value="6">15-16</option>
            <option value="7">16-17</option>
            <option value="8">17-18</option>
            <option value="9">18-19</option>
            <option value="10">19-20</option>
            <option value="11">20-21</option>
            <option value="12">21-22</option>
            <option value="13">22-23</option>
          </select>
        </div>
        <div class="col form-group">
          <select
            class="form-select"
            v-model="saturday"
            aria-label="Default select example"
            multiple
          >
            <option value="1">10-11</option>
            <option value="2">11-12</option>
            <option value="3">12-13</option>
            <option value="4">13-14</option>
            <option value="5">14-15</option>
            <option value="6">15-16</option>
            <option value="7">16-17</option>
            <option value="8">17-18</option>
            <option value="9">18-19</option>
            <option value="10">19-20</option>
            <option value="11">20-21</option>
            <option value="12">21-22</option>
            <option value="13">22-23</option>
          </select>
        </div>
        <div class="col form-group">
          <select
            class="form-select"
            v-model="sunday"
            aria-label="Default select example"
            multiple
          >
            <option value="1">10-11</option>
            <option value="2">11-12</option>
            <option value="3">12-13</option>
            <option value="4">13-14</option>
            <option value="5">14-15</option>
            <option value="6">15-16</option>
            <option value="7">16-17</option>
            <option value="8">17-18</option>
            <option value="9">18-19</option>
            <option value="10">19-20</option>
            <option value="11">20-21</option>
            <option value="12">21-22</option>
            <option value="13">22-23</option>
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
    <div class="getdata">{{ getData }}入力値</div>
    <div>{{ currentUserdata }}ログイン中のユーザー情報</div>
  </form>
</template>

<script>
import { collection, addDoc, getDocs } from "firebase/firestore"
// firebase.js で db として export したものを import
import { db } from "../firebase"

import { getAuth, onAuthStateChanged } from "firebase/auth"

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
      monday: [],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [],
      sunday: [],
      email: "",
      currentUserdata: [],
    }
  },
  methods: {
    postSchedule() {
      this.getAnswer()
      addDoc(collection(db, "schedule"), {
        schedule: this.schedules2,
        name: this.currentUserdata[0].name,
        status: this.currentUserdata[0].status,
        uid: this.currentUserdata[0].uid,
      })
      this.$router.push("result")
    },
    getAnswer() {
      this.schedules2[0].monday = this.monday
      this.schedules2[1].tuesday = this.tuesday
      this.schedules2[2].wednesday = this.wednesday
      this.schedules2[3].thursday = this.thursday
      this.schedules2[4].friday = this.friday
      this.schedules2[5].saturday = this.saturday
      this.schedules2[6].sunday = this.sunday
    },
  },
  computed: {
    getData: function () {
      this.getAnswer()
      return this.schedules2
    },
  },
  created: function () {
    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        this.email = user.email
      }
    }),
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

<style></style>
