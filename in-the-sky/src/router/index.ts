import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DataPigeon from "../components/DataPigeon.vue";
import ProfilePage from "../components/ProfilePage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/DataPigeon",
    name: "DataPigeon",
    component: DataPigeon,
  },
  {
    path: "/ProfilePage",
    name: "ProfilePage",
    component: ProfilePage,
  },
  {
    path: "/add",
    name: "add",
    component: () => import("../views/AddView.vue"),
  },
  {
    path: "/update/:id",
    name: "update",
    component: () => import("../views/UpdateView.vue"),
  },
  {
    path: "/pedigree/:id",
    name: "pedigree",
    component: () => import("../views/PedigreeView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
