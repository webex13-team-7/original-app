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

      <div class="col-1" v-if="schedule.schedule[0].monday">〇</div>
      <div class="col-1" v-else-if="schedule.schedule[0].monday === false">
        ×
      </div>
      <div class="col-1" v-else>-</div>

      <div class="col-1" v-if="schedule.schedule[1].tuesday">〇</div>
      <div class="col-1" v-else-if="schedule.schedule[1].tuesday === false">
        ×
      </div>
      <div class="col-1" v-else>-</div>

      <div class="col-1" v-if="schedule.schedule[2].wednesday">〇</div>
      <div class="col-1" v-else-if="schedule.schedule[2].wednesday === false">
        ×
      </div>
      <div class="col-1" v-else>-</div>

      <div class="col-1" v-if="schedule.schedule[3].thursday">〇</div>
      <div class="col-1" v-else-if="schedule.schedule[3].thursday === false">
        ×
      </div>
      <div class="col-1" v-else>-</div>

      <div class="col-1" v-if="schedule.schedule[4].friday">〇</div>
      <div class="col-1" v-else-if="schedule.schedule[4].friday === false">
        ×
      </div>
      <div class="col-1" v-else>-</div>

      <div class="col-1" v-if="schedule.schedule[5].saturday">〇</div>
      <div class="col-1" v-else-if="schedule.schedule[5].saturday === false">
        ×
      </div>
      <div class="col-1" v-else>-</div>

      <div class="col-1" v-if="schedule.schedule[6].sunday">〇</div>
      <div class="col-1" v-else-if="schedule.schedule[6].sunday === false">
        ×
      </div>
      <div class="col-1" v-else>-</div>
      <div class="col-1"><button class="btn btn-danger">削除</button></div>
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
      monday:0,
    }
  },

  // computed:{
  //   howmany(){
  //     for(let n=0;schedules2.schedule.length>n;n++){
  //       this.schedules2.schedule[n].map(scheduleOfMonday){
  //       if(scheduleOfMonday.monday===true){
  //         this.monday=this.monday++
  //       }else{
  //         this.monday=this.monday=0
  //         }
  //       }
  //     }
  //   }
  // },
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
