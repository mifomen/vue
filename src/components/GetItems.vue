<template>
  <span v-if="loading && initialized">
    <div class="progress">
      <div class="indeterminate"></div>
    </div>
  </span>
  <span v-if="initialized">
    <div class="progress">
      <div class="indeterminate"></div>
    </div>
    <button
      v-on:Click="sortArrayByFamiliya"
      class="waves-effect waves-light btn-large"
    >
      <strong class="material-icons">Сортировка по ФИО</strong>
    </button>

    <div id="GetItems">
      <ul class="pagination">
        <li class="disabled">
          <a href="#!">
            <i class="waves-effect material-icons">Назад!</i>
          </a>
        </li>
        <li class=""><a href="#!">1</a></li>
        <li class="waves-effect active"><a href="#!">2</a></li>
        <li class="waves-effect"><a href="#!">3</a></li>
        <li class="waves-effect"><a href="#!">4</a></li>
        <li class="waves-effect"><a href="#!">5</a></li>
        <li class="waves-effect">
          <a href="#!">
            <i class="waves-effect material-icons">Вперед!</i>
          </a>
        </li>
      </ul>
      <ol class="collection with-header">
        <li
          v-for="item in teacherList"
          v-bind:key="item.id"
          class="collection-item"
        >
          {{ item.fio }} {{ item.fio.length }}
        </li>
      </ol>
      <!-- {{ teacherList[3].fio }} -->
    </div>
  </span>
  <!-- <Paginate
    :page-count="22"
    :click-handler="pageChangeHandler"
    :prev-text="'Prev'"
    :next-text="'Next'"
    :container-class="'pagination waves-effect'"
  /> -->
</template>
<script>
// import Paginate from "vuejs-paginate";

export default {
  // components: {
  //   Paginate,
  // },
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
<style>
button > strong {
  font-size: 32px;
  text-transform: none;
}
</style>
