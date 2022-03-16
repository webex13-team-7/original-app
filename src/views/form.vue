<template>
  <p>
    月<br />
    <input
      type="radio"
      name="d1"
      value="true"
      class="radio"
      id="getu_maru"
      v-on:click="getuMaru"
      v-model="radio1"
    />
    <label for="getu_maru" class="maru">〇</label>
    <input
      type="radio"
      name="d1"
      value="false"
      class="radio"
      id="getu_batu"
      v-model="radio1"
      v-on:click="getu_batu"
    />
    <label for="getu_batu" class="batu">✖</label>
  </p>

  <p>
    火<br />
    <input
      type="radio"
      name="d2"
      value="true"
      class="radio"
      id="ka_maru"
      v-on:click="ka_maru"
      v-model="radio2"
    />
    <label for="ka_maru" class="maru">〇</label>
    <input
      type="radio"
      name="d2"
      value="false"
      class="radio"
      id="ka_batu"
      v-model="radio2"
      v-on:click="ka_batu"
    />
    <label for="ka_batu" class="batu">✖</label>
  </p>

  <p>
    水<br />
    <input
      type="radio"
      name="d3"
      value="true"
      class="radio"
      id="sui_maru"
      v-on:click="sui_maru"
      v-model="radio3"
    />
    <label for="sui_maru" class="maru">〇</label>
    <input
      type="radio"
      name="d3"
      value="false"
      class="radio"
      id="sui_batu"
      v-model="radio3"
      v-on:click="sui_batu"
    />
    <label for="sui_batu" class="batu">✖</label>
  </p>

  <p>
    木<br />
    <input
      type="radio"
      name="d4"
      value="true"
      class="radio"
      id="moku_maru"
      v-on:click="moku_maru"
      v-model="radio4"
    />
    <label for="moku_maru" class="maru">〇</label>
    <input
      type="radio"
      name="d4"
      value="false"
      class="radio"
      id="moku_batu"
      v-model="radio4"
      v-on:click="moku_batu"
    />
    <label for="moku_batu" class="batu">✖</label>
  </p>

  <p>
    金<br />
    <input
      type="radio"
      name="d5"
      value="true"
      class="radio"
      id="kin_maru"
      v-on:click="kin_maru"
      v-model="radio5"
    />
    <label for="kin_maru" class="maru">〇</label>
    <input
      type="radio"
      name="d5"
      value="false"
      class="radio"
      id="kin_batu"
      v-model="radio5"
      v-on:click="kin_batu"
    />
    <label for="kin_batu" class="batu">✖</label>
  </p>

  <p>
    土<br />
    <input
      type="radio"
      name="d6"
      value="true"
      class="radio"
      id="do_maru"
      v-on:click="do_maru"
      v-model="radio6"
    />
    <label for="do_maru" class="maru">〇</label>
    <input
      type="radio"
      name="d6"
      value="false"
      class="radio"
      id="do_batu"
      v-model="radio6"
      v-on:click="do_batu"
    />
    <label for="do_batu" class="batu">✖</label>
  </p>

  <p>
    日<br />
    <input
      type="radio"
      name="d7"
      value="true"
      class="radio"
      id="nichi_maru"
      v-on:click="nichi_maru"
      v-model="radio7"
    />
    <label for="nichi_maru" class="maru">〇</label>
    <input
      type="radio"
      name="d7"
      value="false"
      class="radio"
      id="nichi_batu"
      v-model="radio7"
      v-on:click="nichi_batu"
    />
    <label for="nichi_batu" class="batu">✖</label>
  </p>

  <!-- {{ schedules }}
  <br />
  {{ radio1 }} -->
  <br />
  <!-- {{ schedules2 }} -->

  <p><input type="submit" value="登録する" v-on:click="postTweet" /></p>
</template>

<script>
// import { collection, addDoc } from "firebase/firestore"
// // firebase.js で db として export したものを import
// import { db } from "./firebase"

// export default {
//   methods: {
//     submit() {
//       addDoc(collection(db, "schedule"), {
//         text: "こんにちは、ツイートの本文です。",
//       })
//     },
//   },
// }

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
      // schedules: [],
      // radio1: "",
      // radio2: "",
      // radio3: "",
      // radio4: "",
      // radio5: "",
      // radio6: "",
      // radio7: "",
      // getu: "",
      // ka: "",
      // sui: "",
      // moku: "",
      // kin: "",
      // do: "",
      // nichi: "",
      i: 0,
    }
  },
  methods: {
    postTweet() {
      addDoc(collection(db, "schedule"), {
        schedule: this.schedules2,
      })
    },
    getuMaru() {
      this.schedules2[0].monday = true
    },
    ka_maru() {
      this.schedules2[1].tuesday = true
    },
    sui_maru() {
      this.schedules2[2].wednesday = true
    },
    moku_maru() {
      this.schedules2[3].thursday = true
    },
    kin_maru() {
      this.schedules2[4].friday = true
    },
    do_maru() {
      this.schedules2[5].saturday = true
    },
    nichi_maru() {
      this.schedules2[6].sunday = true
    },
    getu_batu() {
      this.schedules2[0].monday = false
    },
    ka_batu() {
      this.schedules2[1].tuesday = false
    },
    sui_batu() {
      this.schedules2[2].wednesday = false
    },
    moku_batu() {
      this.schedules2[3].thursday = false
    },
    kin_batu() {
      this.schedules2[4].friday = false
    },
    do_batu() {
      this.schedules2[5].saturday = false
    },
    nichi_batu() {
      this.schedules2[6].sunday = false
    },

    // maru() {
    //   for (let n = 0; n < this.schedules2.length; n++) {
    //     this.schedules2[schedules2.indexOf[{monday:true}]].monday = true
    //   }
    // },
    // batu() {
    //   this.schedules2[this.i].monday = false
    // },
  },
}
</script>

<style>
/* .radio{
    display: none;
    
} */
.maru {
  font-size: 30px;
}
.batu {
  font-size: 30px;
}
</style>
