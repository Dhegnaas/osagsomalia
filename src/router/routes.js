import Home from "../views/Home/Home.vue";
import About from "../views/About/About.vue";
import Documents from "../views/Documents/LegalDocuments/LegalDocuments.vue";


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
  {
    path: "/documents/legal-documents",
    name: "LegalDocuments",
    // Hubi in 'path'-ka faylka uu sax yahay marka loo eego folder-kaaga
    component: () =>
      import("../views/Documents/LegalDocuments/LegalDocuments.vue"),
  },
];

export default routes;
