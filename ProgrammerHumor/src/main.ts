import { createApp } from "vue";
import App from "./App.vue";
import "./scss/main.scss";
import { createRouter, createWebHistory } from "vue-router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { config } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

// set the default style
config.styleDefault = "duotone";
const Home = () => import("./views/Home.vue");
const Projects = () => import("./views/Projects.vue");

const routes = [
  { path: "/", component: Home },
  { path: "/projects", component: Projects },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
