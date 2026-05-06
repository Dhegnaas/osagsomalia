import Home from "../views/Home/Home.vue";
import About from "../views/About/About.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

export default routes;
