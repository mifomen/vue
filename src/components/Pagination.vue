<template>
  <div id="Pagination">
    <ul class="pagination">
      <li class="active"><a href="#!">1</a></li>
      <li
        class="waves-effectactive"
        v-for="(item, index) in pageCount"
        v-bind:key="item.id"
      >
        {{ index }}
      </li>

      <!-- <li class="waves-effect"><a href="#!">2</a></li>
      <li class="waves-effect"><a href="#!">3</a></li>
      <li class="waves-effect"><a href="#!">4</a></li>
      <li class="waves-effect"><a href="#!">5</a></li> -->
      <button @click="sliceData" class="btn">prevPage</button>
      <button @click="nextPage" class="btn">nextPage</button>
    </ul>
  </div>
  <ul>
    <li>{{ listData }}</li>
  </ul>
</template>

<script>
import _ from "lodash";

export default {
  name: "PaginationItems",
  el: "#Pagination",
  data: function () {
    return {
      page: 1,
      pageSize: 7,
      initialized: false,
      allItems: [],
      items: [],
      paginationCountSize: 5,
    };
  },
  props: {
    listData: {
      type: Array,
      required: true,
    },
  },
  methods: {
    nextPage() {
      this.pageNumber++;
    },
    prevPage() {
      this.pageNumber--;
    },
  },
  computed: {
    sliceData: function () {
      this.allItems = _.chunk(this.listData, this.pageSize);
      this.pageCount = _.size(this.allItems);
      console.log(
        " this.pageCount ",
        this.pageCount,
        "this.allItems",
        this.allItems
      );
      this.items = this.allItems(this.page - 1) || this.allItems[0];
    },
  },
};
</script>

<style></style>
