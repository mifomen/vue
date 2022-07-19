<template>
  <span v-if="initialized">
    <button v-on:Click="sortArrayByFamiliya">sort</button>
    <div id="GetItems">
      <ol>
        <li v-for="item in teacherList" v-bind:key="item.id">
          {{ item.fio }}
        </li>
      </ol>
    </div>
  </span>
  <!-- <span v-if="initialized">
    <div id="GetItems">
      <ol>
        <li v-for="item in teacherList" v-bind:key="item.id">
          {{ item.fio }}
        </li>
      </ol>
    </div>
  </span> -->
</template>
<script>
export default {
  name: "GetItems",
  el: "#GetItems",
  data: function () {
    return {
      initialized: false,
      title: "teacherList",
      teacherList: null,
      counter: this.counterIncrease(),
    };
  },
  methods: {
    counterIncrease: function () {
      return this.counter++;
    },
    trySortByFio: function (d1, d2) {
      //функция для сортировани по фио
      if (d1.fio.toLowerCase() > d2.fio.toLowerCase()) {
        return 1;
      }
      if (d1.fio.toLowerCase() < d2.fio.toLowerCase()) {
        return -1;
      }
      if (d1.fio.toLowerCase() === d2.fio.toLowerCase()) {
        return 0;
      }
    },
    sortArrayByFamiliya: function () {
      let CopyArray = this.teacherList;
      return CopyArray.sort(this.trySortByFio);
      // return this.teacherList.sort((a, b) =>
      //   {
      //     return a.fio.localCompare(b.fio);
      //   }
      // ),
    },
  },
  computed: {
    test: function () {
      return new Date().getFullYear() - 1;
    },
    // compareByFio: function () {
    //   return this.teacherList.sort((a, b) => {
    //     return this.trySort(a, b);
    //   });
    //   //a.fio.localCompare(b.fio);
    // },
    getDate: function (URL) {
      // const response = await fetch (URL)
      // const json = await response.json()
      return URL;
    },
  },
  created() {
    const URL =
      "https://raw.githubusercontent.com/mifomen/vue-test/master/src/teachers.json";
    // async getData (URL)
    try {
      fetch(URL)
        .then((this.initialized = true))
        .then((response) => response.json())
        // .sort(this.sortByFio)
        .then((json) => (this.teacherList = json.sort(this.trySortByFio)))
        .then((json) => console.log("json", json));
      // .then(this.teacherList = this.teacherList)
    } catch (errors) {
      console.error("errors ", errors);
    }
  },
};
</script>
<style></style>
