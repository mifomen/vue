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
        <a href="#!" @click="currentListPage">
          {{ ++index }}
        </a>
        <!-- <a v-if-else href="#!" @click="currentListPage">
          {{ ++index }} -->
        <!-- </a> -->
      </li>
      <button @click="nextPage" class="btn">nextPage</button>
    </ul>
  </div>
  <ol class="collection collection-items">
    <li
      class="collection-item list"
      v-for="(item, index) in getAllItems[page]"
      v-bind:key="item.id"
    >
      <!-- <span class="index"> {{ ++index + pageSize * page }}. </span> -->
      <span v-if="item.fio">
        {{ ++index + pageSize * page }}.
        <strong>Фамилия: </strong>
        {{ item.fio.split(" ")[0] }}
      </span>
      <span v-if="item.fio">
        <strong>Имя: </strong>
        {{ item.fio.split(" ")[1] }}
      </span>
      <span v-if="item.fio">
        <strong>Отчество: </strong>
        {{ item.fio.split(" ")[2] }}
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
      <span v-if="item.academicDegree">
        <strong>Ученая степень:</strong>
        {{ item.academicDegree }}
      </span>
      <span v-if="item.academicTitle">
        <strong>Ученое звание:</strong>
        {{ item.academicTitle }}
      </span>
      <span v-if="item.upQualification">
        <strong>
          Повышение квалификации и профессиональная переподготовка (при наличии)
        </strong>
        {{ item.upQualification }}
      </span>
      <span v-show="false">
        <strong>Общий стаж работы:</strong>
        {{ item.workExperienceInYearStart }}
      </span>
      <span v-if="item.workAsTeacherInYearStart">
        <strong>Стаж работы по специальности:</strong>
        {{ item.workAsTeacherInYearStart }}
      </span>
      <span>
        <strong>
          Преподаваемые учебные предметы, курсы, дисциплины (модули):
        </strong>
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
      pageSize: 4,
      index: 0,
      initialized: false,
      allItems: null,
      items: null,
      paginationCountSize: 5,
      PARSE_INT: 10,
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
      evt.preventDefault();
      // if (document.querySelector(".v-first")) {
      // document.querySelector(".v-first").classList.add("active");
      // }
      if (document.querySelector(".active")) {
        document.querySelector(".active").classList.remove("active");
      }
      evt.target.parentNode.classList.add("active");
      // this.index = parseInt(this.page, this.PARSE_INT);
      this.page = parseInt(evt.target.textContent, this.PARSE_INT) - 1;
      console.log("evt.target.textContent", evt.target.textContent);
      // this.page = parseInt(--evt.target.textContent, 10);
    },
    nextPage() {
      if (parseInt(this.page, this.PARSE_INT) < this.pageSize - 1) {
        parseInt(this.page++, this.PARSE_INT);
      }
    },
    prevPage() {
      if (parseInt(this.page, this.PARSE_INT) > 0) {
        parseInt(this.page--, this.PARSE_INT);
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
