import Vue from "vue";
import VueCompositionAPI from "@vue/composition-api";
import App from "./App.vue";

Vue.use(VueCompositionAPI);
Vue.config.productionTip = false;

new Vue({
  el: "#app",
  render: (h) => h(App),
});
