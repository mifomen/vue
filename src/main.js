import { createApp } from "vue";
// import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

createApp(App).use(store).use(router).mount("#app");

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')
