<template>
  <button v-on:click="calculate">omanko</button>
  <div class="container shadow">
    <div class="row"></div>
    <div class="row">
      <div class="col">{{ monday }}</div>
    </div>
  </div>
  {{ member }}
</template>

<script>
import { db } from "../firebase"
import { getDocs, collection, getDoc, doc } from "firebase/firestore"
export default {
  data() {
    return {
      monday: [
        { monday1: [] },
        { monday2: [] },
        { monday3: [] },
        { monday4: [] },
        { monday5: [] },
        { monday6: [] },
        { monday7: [] },
        { monday8: [] },
        { monday9: [] },
        { monday10: [] },
        { monday11: [] },
        { monday12: [] },
        { monday13: [] },
      ],
      tuesday: [
        { tuesday1: [] },
        { tuesday2: [] },
        { tuesday3: [] },
        { tuesday4: [] },
        { tuesday5: [] },
        { tuesday6: [] },
        { tuesday7: [] },
        { tuesday8: [] },
        { tuesday9: [] },
        { tuesday10: [] },
        { tuesday11: [] },
        { tuesday12: [] },
        { tuesday13: [] },
      ],
      wednesday: [
        { wednesday1: [] },
        { wednesday2: [] },
        { wednesday3: [] },
        { wednesday4: [] },
        { wednesday5: [] },
        { wednesday6: [] },
        { wednesday7: [] },
        { wednesday8: [] },
        { wednesday9: [] },
        { wednesday10: [] },
        { wednesday11: [] },
        { wednesday12: [] },
        { wednesday13: [] },
      ],
      thursday: [
        { thursday1: [] },
        { thursday2: [] },
        { thursday3: [] },
        { thursday4: [] },
        { thursday5: [] },
        { thursday6: [] },
        { thursday7: [] },
        { thursday8: [] },
        { thursday9: [] },
        { thursday10: [] },
        { thursday11: [] },
        { thursday12: [] },
        { thursday13: [] },
      ],
      friday: [
        { friday1: [] },
        { friday2: [] },
        { friday3: [] },
        { friday4: [] },
        { friday5: [] },
        { friday6: [] },
        { friday7: [] },
        { friday8: [] },
        { friday9: [] },
        { friday10: [] },
        { friday11: [] },
        { friday12: [] },
        { friday13: [] },
      ],
      saturday: [
        { saturday1: [] },
        { saturday2: [] },
        { saturday3: [] },
        { saturday4: [] },
        { saturday5: [] },
        { saturday6: [] },
        { saturday7: [] },
        { saturday8: [] },
        { saturday9: [] },
        { saturday10: [] },
        { saturday11: [] },
        { saturday12: [] },
        { saturday13: [] },
      ],
      sunday: [
        { sunday1: [] },
        { sunday2: [] },
        { sunday3: [] },
        { sunday4: [] },
        { sunday5: [] },
        { sunday6: [] },
        { sunday7: [] },
        { sunday8: [] },
        { sunday9: [] },
        { sunday10: [] },
        { sunday11: [] },
        { sunday12: [] },
        { sunday13: [] },
      ],
      member: [],
    }
  },
  // methods: {
  //   calculate() {
  //     for (let a; a < 14; a++) {
  //       if([Object.values(monday[a])){}
  //     }
  //   },
  // },
  created() {
    getDocs(collection(db, "sifts")).then((snapshot) => {
      snapshot.forEach((doc) => {
        this.member.push(doc.data())
      })
    })
    // getDoc(doc(db, "sifts", "monday")).then((snapshot) => {
    //   this.member = snapshot.get("monday1").map((value) => {
    //     return value.name
    //   })
    // }),
    getDoc(doc(db, "sifts", "monday")).then((snapshot) => {
      for (let n = 0; n < snapshot.get("monday1").length; n++) {
        this.monday[0].monday1.push(snapshot.get("monday1")[n].name)
      }
      for (let n = 0; n < snapshot.get("monday2").length; n++) {
        this.monday[1].monday2.push(snapshot.get("monday2")[n].name)
      }
      for (let n = 0; n < snapshot.get("monday3").length; n++) {
        this.monday[2].monday3.push(snapshot.get("monday3")[n].name)
      }
      for (let n = 0; n < snapshot.get("monday4").length; n++) {
        this.monday[3].monday4.push(snapshot.get("monday4")[n].name)
      }
      for (let n = 0; n < snapshot.get("monday5").length; n++) {
        this.monday[4].monday5.push(snapshot.get("monday5")[n].name)
      }
      for (let n = 0; n < snapshot.get("monday6").length; n++) {
        this.monday[5].monday6.push(snapshot.get("monday6")[n].name)
      }
      for (let n = 0; n < snapshot.get("monday7").length; n++) {
        this.monday[6].monday7.push(snapshot.get("monday7")[n].name)
      }
      for (let n = 0; n < snapshot.get("monday8").length; n++) {
        this.monday[7].monday8.push(snapshot.get("monday8")[n].name)
      }
      for (let n = 0; n < snapshot.get("monday9").length; n++) {
        this.monday[8].monday9.push(snapshot.get("monday9")[n].name)
      }
      for (let n = 0; n < snapshot.get("monday10").length; n++) {
        this.monday[9].monday10.push(snapshot.get("monday10")[n].name)
      }
      for (let n = 0; n < snapshot.get("monday11").length; n++) {
        this.monday[10].monday11.push(snapshot.get("monday11")[n].name)
      }
      for (let n = 0; n < snapshot.get("monday12").length; n++) {
        this.monday[11].monday12.push(snapshot.get("monday12")[n].name)
      }
      for (let n = 0; n < snapshot.get("monday13").length; n++) {
        this.monday[12].monday13.push(snapshot.get("monday13")[n].name)
      }
    })
    // getDocs(collection(db, "sifts")).then((snapshot) => {
    //   snapshot.forEach((doc) => {
    //     if (doc.id === "monday") {
    //       for (let n = 0; n < doc.get("monday1").length; n++) {
    //         this.monday[0].monday1.push(doc.get("monday1")[n].name)
    //       }
    //       for (let n = 0; n < doc.get("monday2").length; n++) {
    //         this.monday[1].monday2.push(doc.get("monday2")[n].name)
    //       }
    //       for (let n = 0; n < doc.get("monday3").length; n++) {
    //         this.monday[2].monday3.push(doc.get("monday3")[n].name)
    //       }
    //       for (let n = 0; n < doc.get("monday4").length; n++) {
    //         this.monday[3].monday4.push(doc.get("monday4")[n].name)
    //       }
    //       for (let n = 0; n < doc.get("monday4").length; n++) {
    //         this.monday[4].monday5.push(doc.get("monday5")[n].name)
    //       }
    //       for (let n = 0; n < doc.get("monday5").length; n++) {
    //         this.monday[5].monday6.push(doc.get("monday6")[n].name)
    //       }
    //       for (let n = 0; n < doc.get("monday6").length; n++) {
    //         this.monday[6].monday7.push(doc.get("monday7")[n].name)
    //       }
    //       for (let n = 0; n < doc.get("monday7").length; n++) {
    //         this.monday[7].monday8.push(doc.get("monday8")[n].name)
    //       }
    //       for (let n = 0; n < doc.get("monday8").length; n++) {
    //         this.monday[8].monday9.push(doc.get("monday9")[n].name)
    //       }
    //       for (let n = 0; n < doc.get("monday9").length; n++) {
    //         this.monday[9].monday10.push(doc.get("monday10")[n].name)
    //       }
    //       for (let n = 0; n < doc.get("monday10").length; n++) {
    //         this.monday[10].monday11.push(doc.get("monday11")[n].name)
    //       }
    //       for (let n = 0; n < doc.get("monday11").length; n++) {
    //         this.monday[11].monday12.push(doc.get("monday12")[n].name)
    //       }
    //       for (let n = 0; n < doc.get("monday12").length; n++) {
    //         this.monday[12].monday13.push(doc.get("monday13")[n].name)
    //       }
    //     } else if (doc.id === "tuesday") {
    //       for (let n = 0; n < doc.get("monday1").length; n++) {
    //         this.tuesday[0].tuesday1.push(doc.get("tuesday1")[n].name)
    //         this.tuesday[1].tuesday2.push(doc.get("tuesday2")[n].name)
    //         this.tuesday[2].tuesday3.push(doc.get("tuesday3")[n].name)
    //         this.tuesday[3].tuesday4.push(doc.get("tuesday4")[n].name)
    //         this.tuesday[4].tuesday5.push(doc.get("tuesday5")[n].name)
    //         this.tuesday[5].tuesday6.push(doc.get("tuesday6")[n].name)
    //         this.tuesday[6].tuesday7.push(doc.get("tuesday7")[n].name)
    //         this.tuesday[7].tuesday8.push(doc.get("tuesday8")[n].name)
    //         this.tuesday[8].tuesday9.push(doc.get("tuesday9")[n].name)
    //         this.tuesday[9].tuesday10.push(doc.get("tuesday10")[n].name)
    //         this.tuesday[10].tuesday11.push(doc.get("tuesday11")[n].name)
    //         this.tuesday[11].tuesday12.push(doc.get("tuesday12")[n].name)
    //         this.tuesday[12].tuesday13.push(doc.get("tuesday13")[n].name)
    //       }
    //     } else if (doc.id === "wednesday") {
    //       for (let n = 0; n < doc.get("monday1").length; n++) {
    //         this.wednesday[0].wednesday1.push(doc.get("wednesday1")[n].name)
    //         this.wednesday[1].wednesday2.push(doc.get("wednesday2")[n].name)
    //         this.wednesday[2].wednesday3.push(doc.get("wednesday3")[n].name)
    //         this.wednesday[3].wednesday4.push(doc.get("wednesday4")[n].name)
    //         this.wednesday[4].wednesday5.push(doc.get("wednesday5")[n].name)
    //         this.wednesday[5].wednesday6.push(doc.get("wednesday6")[n].name)
    //         this.wednesday[6].wednesday7.push(doc.get("wednesday7")[n].name)
    //         this.wednesday[7].wednesday8.push(doc.get("wednesday8")[n].name)
    //         this.wednesday[8].wednesday9.push(doc.get("wednesday9")[n].name)
    //         this.wednesday[9].wednesday10.push(doc.get("wednesday10")[n].name)
    //         this.wednesday[10].wednesday11.push(doc.get("wednesday11")[n].name)
    //         this.wednesday[11].wednesday12.push(doc.get("wednesday12")[n].name)
    //         this.wednesday[12].wednesday13.push(doc.get("wednesday13")[n].name)
    //       }
    //     } else if (doc.id === "thursday") {
    //       for (let n = 0; n < doc.get("monday1").length; n++) {
    //         this.thursday[0].thursday1.push(doc.get("thursday1")[n].name)
    //         this.thursday[1].thursday2.push(doc.get("thursday2")[n].name)
    //         this.thursday[2].thursday3.push(doc.get("thursday3")[n].name)
    //         this.thursday[3].thursday4.push(doc.get("thursday4")[n].name)
    //         this.thursday[4].thursday5.push(doc.get("thursday5")[n].name)
    //         this.thursday[5].thursday6.push(doc.get("thursday6")[n].name)
    //         this.thursday[6].thursday7.push(doc.get("thursday7")[n].name)
    //         this.thursday[7].thursday8.push(doc.get("thursday8")[n].name)
    //         this.thursday[8].thursday9.push(doc.get("thursday9")[n].name)
    //         this.thursday[9].thursday10.push(doc.get("thursday10")[n].name)
    //         this.thursday[10].thursday11.push(doc.get("thursday11")[n].name)
    //         this.thursday[11].thursday12.push(doc.get("thursday12")[n].name)
    //         this.thursday[12].thursday13.push(doc.get("thursday13")[n].name)
    //       }
    //     } else if (doc.id === "friday") {
    //       for (let n = 0; n < doc.get("monday1").length; n++) {
    //         this.friday[0].friday1.push(doc.get("friday1")[n].name)
    //         this.friday[1].friday2.push(doc.get("friday2")[n].name)
    //         this.friday[2].friday3.push(doc.get("friday3")[n].name)
    //         this.friday[3].friday4.push(doc.get("friday4")[n].name)
    //         this.friday[4].friday5.push(doc.get("friday5")[n].name)
    //         this.friday[5].friday6.push(doc.get("friday6")[n].name)
    //         this.friday[6].friday7.push(doc.get("friday7")[n].name)
    //         this.friday[7].friday8.push(doc.get("friday8")[n].name)
    //         this.friday[8].friday9.push(doc.get("friday9")[n].name)
    //         this.friday[9].friday10.push(doc.get("friday10")[n].name)
    //         this.friday[10].friday11.push(doc.get("friday11")[n].name)
    //         this.friday[11].friday12.push(doc.get("friday12")[n].name)
    //         this.friday[12].friday13.push(doc.get("friday13")[n].name)
    //       }
    //     } else if (doc.id === "saturday") {
    //       for (let n = 0; n < doc.get("saturday").length; n++) {
    //         this.saturday[0].saturday1.push(doc.get("saturday1")[n].name)
    //         this.saturday[1].saturday2.push(doc.get("saturday2")[n].name)
    //         this.saturday[2].saturday3.push(doc.get("saturday3")[n].name)
    //         this.saturday[3].saturday4.push(doc.get("saturday4")[n].name)
    //         this.saturday[4].saturday5.push(doc.get("saturday5")[n].name)
    //         this.saturday[5].saturday6.push(doc.get("saturday6")[n].name)
    //         this.saturday[6].saturday7.push(doc.get("saturday7")[n].name)
    //         this.saturday[7].saturday8.push(doc.get("saturday8")[n].name)
    //         this.saturday[8].saturday9.push(doc.get("saturday9")[n].name)
    //         this.saturday[9].saturday10.push(doc.get("saturday10")[n].name)
    //         this.saturday[10].saturday11.push(doc.get("saturday11")[n].name)
    //         this.saturday[11].saturday12.push(doc.get("saturday12")[n].name)
    //         this.saturday[12].saturday13.push(doc.get("saturday13")[n].name)
    //       }
    //     } else {
    //       for (let n = 0; n < doc.get("monday1").length; n++) {
    //         this.sunday[0].sunday1.push(doc.get("sunday1")[n].name)
    //         this.sunday[1].sunday2.push(doc.get("sunday2")[n].name)
    //         this.sunday[2].sunday3.push(doc.get("sunday3")[n].name)
    //         this.sunday[3].sunday4.push(doc.get("sunday4")[n].name)
    //         this.sunday[4].sunday5.push(doc.get("sunday5")[n].name)
    //         this.sunday[5].sunday6.push(doc.get("sunday6")[n].name)
    //         this.sunday[6].sunday7.push(doc.get("sunday7")[n].name)
    //         this.sunday[7].sunday8.push(doc.get("sunday8")[n].name)
    //         this.sunday[8].sunday9.push(doc.get("sunday9")[n].name)
    //         this.sunday[9].sunday10.push(doc.get("sunday10")[n].name)
    //         this.sunday[10].sunday11.push(doc.get("sunday11")[n].name)
    //         this.sunday[11].sunday12.push(doc.get("sunday12")[n].name)
    //         this.sunday[12].sunday13.push(doc.get("sunday13")[n].name)
    //       }
    //     }
    //   })
    // })
  },
}
</script>
