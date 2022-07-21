<template>
  <!-- <div v-if="listData">Loading...</div> -->
  <div id="Pagination">
    <ul class="pagination">
      <button @click="prevPage" class="btn">prevPage</button>
      <li
        class="waves-effectactive"
        v-for="(item, index) in getCountPage"
        v-bind:key="item.id"
      >
        <a class="active" href="#!" @click="currentListPage">
          {{ ++index }}
        </a>
        <!-- <a v-if-else href="#!" @click="currentListPage">
          {{ ++index }} -->
        <!-- </a> -->
      </li>
      <button @click="nextPage" class="btn">nextPage</button>
    </ul>
  </div>
  <ul class="flex">
    <!-- <li>listData.length = {{ listData.length }}</li> -->
  </ul>
  <ol class="collection collection-items">
    <li
      class="collection-item list"
      v-for="(item, index) in getAllItems[page]"
      v-bind:key="item.id"
    >
      <!-- <span class="index"> {{ ++index + pageSize * page }}. </span> -->
      <span>
        {{ ++index + pageSize * page }}.
        <strong>ФИО {{ item.fio }} </strong>
      </span>
      <span>
        <strong> Занимаемая должность: </strong> {{ item.dolzhnost }}
      </span>
      <span>
        <strong>Уровень образование:</strong>
        {{ item.levelStudy }}
      </span>
      <span>
        <strong>Квалификация:</strong>
        {{ item.qualification }}
      </span>
      <span>
        <strong
          >Наименование направления подготовки и (или) специальности:</strong
        >
        {{ item.directionStudy }}
      </span>
      <span>
        <strong>Общий стаж работы:</strong>
        {{ item.workExperienceInYearStart }}
      </span>
      <span>
        <strong>Стаж работы по специальности:</strong>
        {{ item.workAsTeacherInYearStart }}
      </span>
      <span>
        <strong>Преподоваемые учебные предметы:</strong>
        {{ item.subjectsTaught }}
      </span>
    </li>
  </ol>
</template>

<script>
import _ from "lodash";

export default {
  name: "PaginationItems",
  el: "#Pagination",
  data: function () {
    return {
      page: 0,
      pageSize: 7,
      // index: 0,
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
    currentListPage(evt) {
      document.querySelector(".active").classList.remove("active");
      evt.target.parentNode.classList.add("active");
      // this.page = parseInt(--evt.target.textContent, 10);
    },
    nextPage() {
      if (parseInt(this.page, 10) < this.pageSize - 1) {
        parseInt(this.page++, 10);
      }
    },
    prevPage() {
      if (parseInt(this.page, 10) > 0) {
        parseInt(this.page--, 10);
      }
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
      return _.size(this.getAllItems);
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

.list {
  display: flex;
  flex-wrap: wrap;
}

.list span {
  width: 100%;
  // position: relative;
}

.index {
  // position: absolute;
  // left: -50px;
  font-weight: 500;
}

// .collection-items li:: marker {
//   content: "{{  ++index + pageSize * page }}";
// }
</style>
