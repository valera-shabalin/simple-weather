import { LayoutName } from "@/store/layout/types/layout-name";
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/auth/LoginView.vue";
import RegisterView from "@/views/auth/RegisterView.vue";
import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "Погода",
      layout: LayoutName.Default,
    },
  },
  {
    path: "/auth",
    name: "auth",
    meta: {
      layout: LayoutName.Default,
    },
    children: [
      {
        path: "login",
        name: "login",
        component: LoginView,
        meta: {
          title: "Авторизация",
        },
      },
      {
        path: "register",
        name: "register",
        component: RegisterView,
        meta: {
          title: "Регистрация",
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
