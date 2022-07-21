import { createApp } from "vue";
// import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import _ from "lodash";
import store from "./store";
import "./registerServiceWorker";

import Paginate from "vuejs-paginate";
import "../node_modules/materialize-css/dist/css/materialize.min.css";
import "../node_modules/materialize-css/dist/js/materialize.min.js";
// Vue.component('paginate', Paginate)

// createApp(App).use(store).use(router).mount("#app");
createApp(App).use(store).use(router).use(Paginate).mount("#app");
// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')

// const a = ['a','b','c','d',3,'f','d','g','h','j']

// console.log('a= ',a)
//  const b = _.chunk(a,3)
// console.log('b=',b[2])
