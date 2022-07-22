<template>
  <div v-if="!initialized">
    <div class="progress">
      <div class="indeterminate"></div>
    </div>
  </div>

  <div v-if="initialized">
    <div class="progress">
      <div class="indeterminate"></div>
    </div>
    <button
      v-on:Click="sortArrayByFamiliya"
      class="waves-effect waves-light btn-large"
    >
      <strong class="material-icons">Сортировка по ФИО</strong>
    </button>
  </div>
  <div v-if="initialized">
    <PaginationItems :listData="this.teacherList" />
  </div>
</template>
<script>
import PaginationItems from "@/components/Pagination.vue";
export default {
  components: {
    PaginationItems,
  },
  name: "GetItems",
  el: "#GetItems",
  data: function () {
    return {
      initialized: false,
      title: "teacherList",
      teacherList: [],
      counter: this.counterIncrease(),
    };
  },
  methods: {
    counterIncrease: function () {
      return this.counter++;
    },
    pageChangeHandler: function () {},
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
        .then((json) => (this.teacherList = json.sort(this.trySortByFio)))
        .then((this.initialized = true));
      // .then((json) => console.log("json", json));
      // .then(this.teacherList = this.teacherList)
    } catch (errors) {
      console.error("errors ", errors);
    }
  },
};
</script>
<style scoped>
button > strong {
  font-size: 32px;
  text-transform: none;
}
li > div {
  display: flex;
  flex-wrap: wrap;
}

ol > li {
  width: 50%;
}
li > div > span {
  width: 100%;
}
</style>
