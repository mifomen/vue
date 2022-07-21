import { createApp } from "vue";
// import Vue from "vue";
import App from "./App.vue";
import router from "./router";
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
