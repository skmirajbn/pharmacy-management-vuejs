import { createApp } from "vue";
import App from "./App.vue";
import "./assets/css/ayoflex.css";
import "./assets/css/example.css";
import mitt from "mitt";

let eventBus = mitt();
const app = createApp(App);
app.config.globalProperties.$eventBus = eventBus;
app.mount("#app");
