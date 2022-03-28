<template>
  <div class="container m-5 p-5 shadow">
    <div class="row">
      <div class="col">
        <h2>
          {{ siftStartMonth }}月の{{ siftStartday }}日から{{
            siftEndDay
          }}日までのシフトを送信してください。
        </h2>
        <div class="row mt-2">
          <div class="col mt-5">
            <p>{{ siftStartday }}日</p>
          </div>
          <div class="col mt-5">
            <p>{{ siftStartday + 1 }}日</p>
          </div>
          <div class="col mt-5">
            <p>{{ siftStartday + 2 }}日</p>
          </div>
          <div class="col mt-5">
            <p>{{ siftStartday + 3 }}日</p>
          </div>
          <div class="col mt-5">
            <p>{{ siftStartday + 4 }}日</p>
          </div>
          <div class="col mt-5">
            <p>{{ siftStartday + 5 }}日</p>
          </div>
          <div class="col mt-5">
            <p>{{ siftStartday + 6 }}日</p>
          </div>
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
        <div class="row mt-2">
          <div class="col mt-5">
            <p>{{ siftEndDay - 6 }}日</p>
          </div>
          <div class="col mt-5">
            <p>{{ siftEndDay - 5 }}日</p>
          </div>
          <div class="col mt-5">
            <p>{{ siftEndDay - 4 }}日</p>
          </div>
          <div class="col mt-5">
            <p>{{ siftEndDay - 3 }}日</p>
          </div>
          <div class="col mt-5">
            <p>{{ siftEndDay - 2 }}日</p>
          </div>
          <div class="col mt-5">
            <p>{{ siftEndDay - 1 }}日</p>
          </div>
          <div class="col mt-5">
            <p>{{ siftEndDay }}日</p>
          </div>
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

        <button class="btn btn-danger" v-on:click="submit">送信</button>
      </div>
    </div>
  </div>
</template>
<script>
import { db } from "../firebase"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { getDocs, collection, setDoc, doc } from "firebase/firestore"
export default {
  data() {
    return {
      today: 1,
      Month: 2,
      date: "",
      siftStartMonth: 1,
      siftStartday: 1,
      siftEndDay: 1,
      youbi: ["日", "月", "火", "水", "木", "金", "土"],
      currentUserdata: [],
    }
  },
  methods: {
    Calender() {
      this.Month = new Date().getMonth() + 1
      this.today = new Date().getDate()
      this.date = this.youbi[new Date().getDay()]
    },
    whenToStart() {
      if (this.today < 6 && this.today > 0) {
        this.siftStartMonth = this.Month
        this.siftStartday = 15
      } else if (this.today < 21 && this.today >= 6) {
        this.siftStartMonth = this.Month + 1
        this.siftStartday = 1
      } else if (this.today >= 21 && this.today < 31) {
        this.siftStartMonth = this.Month + 1
        this.siftStartday = 15
      }
    },
    whenToEnd() {
      if (
        (this.siftStartMonth === 4 ||
          this.siftStartMonth === 6 ||
          this.siftStartMonth === 9 ||
          this.siftStartMonth === 11) &&
        this.siftStartday !== 1
      ) {
        this.siftEndDay = 30
      } else if (this.siftStartMonth === 2 && this.siftStartday !== 1) {
        this.siftEndDay = 28
      } else if (this.siftStartday !== 1) {
        this.siftEndDay = 31
      } else if (this.siftStartday === 1) {
        this.siftEndDay = 15
      }
    },
    submit() {
      setDoc(
        doc(
          db,
          "sifts",
          `${this.siftStartMonth}月${this.siftStartday}日から${this.siftEndDay}`
        ),
        {
          name: this.currentUserdata[0].name,
          schedule: [0, 0, 0],
          status: this.currentUserdata[0].status,
        }
      )
    },
  },
  created() {
    this.Calender()
    this.whenToStart()
    this.whenToEnd()
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

００月００日 [{name:oo,schedule:[0,0,0,],satus:{kitchen:t,whole:t}}...]
