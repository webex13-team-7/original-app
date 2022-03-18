<template>
  <div class="container">
    <div class="row bg-success p-2 text-dark bg-opacity-10">
      <div class="col-3">名前</div>
      <div class="col-1"><p>月</p></div>
      <div class="col-1"><p>火</p></div>
      <div class="col-1"><p>水</p></div>
      <div class="col-1"><p>木</p></div>
      <div class="col-1"><p>金</p></div>
      <div class="col-1"><p>土</p></div>
      <div class="col-1"><p>日</p></div>
    </div>
    <div
      class="row"
      v-for="(schedule, index) in schedules2"
      v-bind:key="schedule.id"
      v-bind:class="
        index % 2 !== 0
          ? ['bg-success', 'p-2', 'text-dark', 'bg-opacity-10']
          : 'p-2'
      "
    >
      <div class="col-3">{{ schedule.id }}</div>

      <div class="col-1" v-if="schedule.schedule[0].monday == 'true'">〇</div>
      <div class="col-1" v-else-if="schedule.schedule[0].monday == 'false'">
        ×
      </div>
      <div class="col-1" v-else>-</div>

      <div class="col-1" v-if="schedule.schedule[1].tuesday == 'true'">〇</div>
      <div class="col-1" v-else-if="schedule.schedule[1].tuesday == 'false'">
        ×
      </div>
      <div class="col-1" v-else>-</div>

      <div class="col-1" v-if="schedule.schedule[2].wednesday == 'true'">
        〇
      </div>
      <div class="col-1" v-else-if="schedule.schedule[2].wednesday == 'false'">
        ×
      </div>
      <div class="col-1" v-else>-</div>

      <div class="col-1" v-if="schedule.schedule[3].thursday == 'true'">〇</div>
      <div class="col-1" v-else-if="schedule.schedule[3].thursday == 'false'">
        ×
      </div>
      <div class="col-1" v-else>-</div>

      <div class="col-1" v-if="schedule.schedule[4].friday == 'true'">〇</div>
      <div class="col-1" v-else-if="schedule.schedule[4].friday == 'false'">
        ×
      </div>
      <div class="col-1" v-else>-</div>

      <div class="col-1" v-if="schedule.schedule[5].saturday == 'true'">〇</div>
      <div class="col-1" v-else-if="schedule.schedule[5].saturday == 'false'">
        ×
      </div>
      <div class="col-1" v-else>-</div>

      <div class="col-1" v-if="schedule.schedule[6].sunday == 'true'">〇</div>
      <div class="col-1" v-else-if="schedule.schedule[6].sunday == 'false'">
        ×
      </div>
      <div class="col-1" v-else>-</div>
      <div class="col-1">
        <button
          class="btn btn-success btn-sm"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          v-on:click="editGetData(schedule)"
        >
          編集
        </button>
      </div>
      <div class="col-1">
        <button class="btn btn-danger btn-sm" v-on:click="bye(schedule)">
          削除
        </button>
      </div>
    </div>
  </div>

  <div class="modal" id="exampleModal" data-bs-backdrop="static">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h1>編集{{ modalId }}さん</h1>
        </div>
        <div class="modal-body">
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
              <div class="col">
                {{ monday }}
                <select v-model="monday" class="form-select">
                  <option selected>{{ schedules[0].monday }}</option>
                  <option value="true">ok</option>
                  <option value="false">無理</option>
                </select>
              </div>
              <div class="col">
                {{ tuesday }}
                <select v-model="tuesday" class="form-select">
                  <option selected>{{ schedules[1].tuesday }}</option>
                  <option value="true">ok</option>
                  <option value="false">無理</option>
                </select>
              </div>
              <div class="col">
                {{ wednesday }}
                <select v-model="wednesday" class="form-select">
                  <option selected>{{ schedules[2].wednesday }}</option>
                  <option value="true">ok</option>
                  <option value="false">無理</option>
                </select>
              </div>
              <div class="col">
                {{ thursday }}
                <select v-model="thursday" class="form-select">
                  <option selected>{{ schedules[3].thursday }}</option>
                  <option value="true">ok</option>
                  <option value="false">無理</option>
                </select>
              </div>
              <div class="col">
                {{ friday }}
                <select v-model="friday" class="form-select">
                  <option selected>{{ schedules[4].friday }}</option>
                  <option value="true">ok</option>
                  <option value="false">無理</option>
                </select>
              </div>
              <div class="col">
                {{ saturday }}
                <select v-model="saturday" class="form-select">
                  <option selected>{{ schedules[5].saturday }}</option>
                  <option value="true">ok</option>
                  <option value="false">無理</option>
                </select>
              </div>
              <div class="col">
                {{ sunday }}
                <select v-model="sunday" class="form-select">
                  <option selected>{{ schedules[6].sunday }}</option>
                  <option value="true">ok</option>
                  <option value="false">無理</option>
                </select>
              </div>
            </div>
          </div>
          {{ schedules }}
        </div>
        <div class="modal-footer">
          <div class="row">
            <div class="col">
              <button
                class="btn btn-success"
                v-on:click="edit()"
                data-bs-dismiss="modal"
              >
                完了
              </button>
            </div>
            <div class="col">
              <button class="btn btn-danger" data-bs-dismiss="modal">
                close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { collection, getDocs, updateDoc, getDoc } from "firebase/firestore"
// import { updateDoc, deleteField } from "firebase/firestore";
import { db } from "../firebase"
import { doc, deleteDoc } from "firebase/firestore"

export default {
  data() {
    return {
      modalId: "",
      schedules2: [],
      schedules: [
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
    bye(schedule) {
      deleteDoc(doc(db, "schedule", schedule.id))
    },
    edit() {
      updateDoc(doc(db, "schedule", this.modalId), {
        schedule: [
          { monday: this.monday },
          { tuesday: this.tuesday },
          { wednesday: this.wednesday },
          { thursday: this.thursday },
          { friday: this.friday },
          { saturday: this.saturday },
          { sunday: this.sunday },
        ],
      })
      getDoc(doc(db, "schedule", this.modalId)).then((docSnapshot) => {
        this.schedules2.push(docSnapshot.get("schedule"))
      })
    },
    editGetData(schedule) {
      getDoc(doc(db, "schedule", schedule.id)).then((docSnapshot) => {
        this.schedules = docSnapshot.get("schedule")
        this.modalId = schedule.id
      })

      // for (let n = 0; n < 7; n++) {
      //   data[n].key = this.schedules[n].key
      // }
    },
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
.col {
  text-align: center;
}
</style>
