import Vue from "vue";
import VueRouter from "vue-router";
// the navigation pages 
import Home from "../views/TheHome.vue";
import TheShowRoom from "../views/TheShowRoom.vue";
import Contact from "../views/TheContact.vue";
// Car detail And Image 
import ViewCar from "../CarDetail/ViewCar.vue";
// Cars Card 
import UsedCar from "../CarForSell/UsedCar.vue";
import NewCar from "../CarForSell/NewCar.vue";
import SeeAllUsedAndNewCars from "../CarForSell/SeeAllUsedAndNewCars.vue";
import SeeAllSpecialCar from "../CarForSell/SeeAllSpecialCar.vue";
import CarByBrand from "../CarForSell/CarByBrand.vue";
import CarByShape from "../CarForSell/CarByShape.vue";
// SginUp 
import SginUp from "../Login/SignUp.vue";
// Start Ad car Page  
import AboutSellingCarFreeAdd from "../SellCar-Store-Showroom/AboutSellingCarFreeAdd.vue";
import AboutSellingCarPayAdd from "../SellCar-Store-Showroom/AboutSellingCarPayAdd.vue";
// Showroom 
import AboutShowroom from "../SellCar-Store-Showroom/AboutShowroom.vue";
import ShowroomView from "../Car-showroom/ShowroomView.vue";
// User Profile 
import TheUserPage from "../UserPage/TheUserPage.vue";
import UserProfile from "../UserPage/UserProfile.vue";
import UserAdd from "../UserPage/UserAdd.vue";
import UserSaveAd from "../UserPage/UserSaveAd.vue";

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
    path: "/AboutShowroom",
    name: "AboutShowroom",
    component: AboutShowroom,
  },

  {
    path: "/:ShowRoomName/:ShowRoomLocation/:locationStreet",
    name: "ShowroomView",
    component: ShowroomView,
  },
  // User Profile 
  {
    path: "/:UserPage",
    name: "TheUserPage",
    redirect: 'TheUserPage.UserAdd',
    component: TheUserPage,
    children: [
      {
        
        path: "/:MyAdd",
        name: "TheUserPage.UserAdd",
        component: UserAdd,
     
      },
      {
        
        path: "/UserProfile/:Acount",
        name: "UserProfile",
        component: UserProfile,
     
      },
      {
        
        path: "/UserSaveAd/:SaveAd",
        name: "UserSaveAd",
        component: UserSaveAd,
     
      },
   
    ]
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
