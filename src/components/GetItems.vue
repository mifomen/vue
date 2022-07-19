<template>
  <span v-if="loading">Loading</span>
  <span v-if-else>
    <div id="GetItems">
      <!-- {{ teacherList }} -->
      <ul>
        <li v-for="(item, index) in teacherList" v-bind:key="item.id">
          {{ index }}{{ item.fio }}
        </li>
      </ul>
    </div>
  </span>
</template>
<script>
export default {
  name: "GetItems",
  el: "#GetItems",
  data: function () {
    return {
      title: "teacherList",
      teacherList: null,
      counter: this.counterIncrease(),
    };
  },
  methods: {
    counterIncrease: function () {
      return this.counter++;
    },
  },
  computed: {
    test: function () {
      return new Date().getFullYear() - 1;
    },
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
        .then((response) => response.json())
        // .sort(this.sortByFio)
        .then((json) => (this.teacherList = json))
        .then((json) => console.error("json", json));
      // .then(this.teacherList = this.teacherList)
    } catch (errors) {
      console.error("errors ", errors);
    }
  },
};
</script>
<style></style>
