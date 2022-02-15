import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/TheHome.vue";
import TheStore from "../views/TheStore.vue";
import TheShowRoom from "../views/TheShowRoom.vue";
import SeeAllUsedAndNewCars from "../CarForSell/SeeAllUsedAndNewCars.vue";
import UsedCar from "../CarForSell/UsedCar.vue";
import NewCar from "../CarForSell/NewCar.vue";
import Contact from "../views/TheContact.vue";
import ViewCar from "../CarDetail/ViewCar.vue";
import SeeAllSpecialCar from "../CarForSell/SeeAllSpecialCar.vue";
import CarByBrand from "../CarForSell/CarByBrand.vue";
import CarByShape from "../CarForSell/CarByShape.vue";
import SginUp from "../Login/SignUp.vue";
import AboutSellingCarFreeAdd from "../SellCar-Store-Showroom/AboutSellingCarFreeAdd.vue";
import AboutSellingCarPayAdd from "../SellCar-Store-Showroom/AboutSellingCarPayAdd.vue";
import ShowroomView from "../Car-showroom/ShowroomView.vue";
import ClientStore from "../CustomreStote/ClientStore.vue";
import ProductDetail from "../CustomreStote/ProductDetail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/TheShowRoom",
    name: "TheShowRoom",
    component: TheShowRoom,
  },
  {
    path: "/TheStore",
    name: "TheStore",
    component: TheStore,
  },
  {
    path: "/SeeAllUsedAndNewCars",
    name: "SeeAllUsedAndNewCars",
    component: SeeAllUsedAndNewCars,
  },
  {
    path: "/UsedCar",
    name: "UsedCar",
    component: UsedCar,
  },
  {
    path: "/NewCar",
    name: "NewCar",
    component: NewCar,
  },
  {
    path: "/SeeAllSpecialCar",
    name: "SeeAllSpecialCar",
    component: SeeAllSpecialCar,
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
    path: "/view/car/:carName/:carShape/:carId/:Company",
    name: "ViewCar",
    component: ViewCar,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/SginUp",
    name: "SginUp",
    component: SginUp,
  },
  {
    path: "/AboutSellingCarFreeAdd",
    name: "AboutSellingCarFreeAdd",
    component: AboutSellingCarFreeAdd,
  },
  {
    path: "/AboutSellingCarPayAdd",
    name: "AboutSellingCarPayAdd",
    component: AboutSellingCarPayAdd,
  },
  {
    path: "/:ShowRoomName/:ShowRoomLocation/:locationStreet",
    name: "ShowroomView",
    component: ShowroomView,
  },
  {
    path: "/:ClientStoreName/:StoreLocation/",
    name: "ClientStore",
    component: ClientStore,
  },
  {
    path: "/ProductDetail/:ProductNumber/:ProductName/:ProductId",
    name: "ProductDetail",
    component: ProductDetail,
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
