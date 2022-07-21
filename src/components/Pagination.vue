<template>
  <!-- <div v-if="listData">Loading...</div> -->
  <div id="Pagination">
    <ul class="pagination">
      <!-- <li class="active"><a href="#!">0</a></li> -->
      <li
        class="waves-effectactive"
        v-for="(item, index) in paginationCountSize"
        v-bind:key="item.id"
      >
        <a href="#!"> {{ ++index }}</a>
      </li>

      <!-- <li class="waves-effect"><a href="#!">2</a></li>
      <li class="waves-effect"><a href="#!">3</a></li>
      <li class="waves-effect"><a href="#!">4</a></li>
      <li class="waves-effect"><a href="#!">5</a></li> -->
      <button @click="sliceData" class="btn">prevPage</button>
      <button @click="renderItemsOnPage" class="btn">nextPage</button>
    </ul>
  </div>
  <ul class="flex">
    <!-- <li>listData[0].fio = {{ listData[0] }}</li> -->
    <!-- <li>listData.length = {{ listData.length }}</li> -->
  </ul>
  <ul class="collection">
    <ol
      class="collection-item"
      v-for="(item, index) in getAllItems[0]"
      v-bind:key="item.id"
    >
      {{
        ++index
      }}.
      {{
        item.fio
      }}
    </ol>
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
      allItems: null,
      items: null,
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
    getAllItems() {
      // делим элементы на группы по pathSize
      // this.allItems =  ;
      return _.chunk(this.listData, this.pageSize);
    },
    getCountPage() {
      // считаем солько будет кнопок для страницы
      return _.size(this.allItems);
    },
    // какие элементы будет отрисовываться по  индекусу у allitems
    renderItemsOnPage() {
      return this.allItems(this.page - 1) || this.allItems[0];
    },
  },
};
</script>

<style scoped lang="scss">
.flex {
  display: flex;
  flex-direction: column;
}
</style>
