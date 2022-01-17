import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/TheHome.vue";
import Product from "../views/TheProduct.vue";
import TheAllCar from "../views/TheAllCar.vue";
import Contact from "../views/TheContact.vue";
import ViewCar from "../CarDetail/ViewCar.vue";
import ViewAllCar from "../CarDetail/ViewAllCar.vue";
import CarByBrand from "../CarDetail/CarByBrand.vue";
import CarByShape from "../CarDetail/CarByShape.vue";
import SginUp from "../Login/SignUp.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/product",
    name: "Product",
    component: Product,
  },
  {
    path: "/TheAllCar",
    name: "TheAllCar",
    component: TheAllCar,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/ViewAllCar",
    name: "ViewAllCar",
    component: ViewAllCar,
  },
  {
    path: "/SginUp",
    name: "SginUp",
    component: SginUp,
  },
  {
    path: "/view/car/:CarShape",
    name: "CarByShape",
    component: CarByShape,
  },
  {
    path: "/view/car/:CarName/:CarType",
    name: "CarByBrand",
    component: CarByBrand,
  },
  {
    path: "/view/car/:carName/:carShape/:carId",
    name: "ViewCar",
    component: ViewCar,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return {
        savedPosition,
        behavior: "smooth",
      };
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router;
