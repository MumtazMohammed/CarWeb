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
import InstalmentCars from "../CarForSell/InstalmentCars.vue";
import SeeAllUsedAndNewCars from "../CarForSell/SeeAllUsedAndNewCars.vue";
import SeeAllSpecialCar from "../CarForSell/SeeAllSpecialCar.vue";
import CarByBrand from "../CarForSell/CarByBrand.vue";
import CarByShape from "../CarForSell/CarByShape.vue";
// SignUp
import SignUp from "../Login/SignUp.vue";
import Login from "../Login/Login.vue";
import LoginSeller from "../Login/LoginSeller.vue";
// Start Ad car Page
import AboutSellingCarFreeAdd from "../SellCar-Store-Showroom/AboutSellingCarFreeAdd.vue";
import AboutSellingCarPayAdd from "../SellCar-Store-Showroom/AboutSellingCarPayAdd.vue";
// Showroom
import AboutShowroom from "../SellCar-Store-Showroom/AboutShowroom.vue";
import ShowroomView from "../Car-showroom/ShowroomView.vue";
// User Profile
import TheUserPage from "../TheUserPage/TheUserPage.vue";
import UserProfile from "../TheUserPage/UserProfile.vue";
import UserProfileEdit from "../TheUserPage/UserProfileEdit.vue";
import UserAdd from "../TheUserPage/UserAdd.vue";
import EditPost from "../TheUserPage/EditPost.vue";
import NewPost from "../TheUserPage/NewPost.vue";
import SavedAdUser from "../TheUserPage/SavedAdUser.vue";
// Showroom Page
import TheShowRoomPage from "../TheShowRoomUser/TheShowRoomPage.vue";
import ShowRoomCars from "../TheShowRoomUser/ShowRoomCars.vue";
import ShowRoomNote from "../TheShowRoomUser/ShowRoomNote.vue";
import ShowRoomInfoSetting from "../TheShowRoomUser/ShowRoomInfoSetting.vue";
import ShowRoomInfoTable from "../TheShowRoomUser/ShowRoomInfoTable.vue";
import ViewShowRoomCarDetails from "../TheShowRoomUser/ViewShowRoomCarDetails.vue";
import ShowRoomAddNewCar from "../TheShowRoomUser/ShowRoomAddNewCar.vue";
import PasswordChange from "../TheShowRoomUser/PasswordChange.vue";
// Privacy-And-Terms
import ThePrivacy from "../Privacy-And-Terms/ThePrivacy.vue";
import TheTerms from "../Privacy-And-Terms/TheTerms.vue";
// Admin Access
import AdminPageRoute from "@/Admin/AdminPageRoute.vue";
import DashBoard from "@/Admin/DashBoard.vue";
import TheUsersAccount from "@/Admin/TheUsersAccount.vue";
import TheShowRoomAccount from "@/Admin/TheShowRoomAccount.vue";
import Advertisement from "@/Admin/Advertisement.vue";
import Report from "@/Admin/Report.vue";
import Cars from "@/Admin/Cars.vue";
import AdminSetting from "@/Admin/AdminSetting.vue";
import UserCarDetails from "@/Admin/UserCarDetails.vue";
import ShowRoomAccountRequest from "@/Admin/ShowRoomAccountRequest.vue";
import UserPageInfo from "@/Admin/UserPageInfo.vue";

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
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  // Cars Pages
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
    path: "/InstalmentCars",
    name: "InstalmentCars",
    component: InstalmentCars,
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
  // show car detail
  {
    path: "/view/car/:carName/:carShape/:carId/:Company",
    name: "ViewCar",
    component: ViewCar,
  },
  // SignUp or Login
  {
    path: "/SignUp",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  {
    path: "/LoginSeller",
    name: "LoginSeller",
    component: LoginSeller,
  },
  // Pages to start a car or open showroom
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
  // showroom
  {
    path: "/:ShowRoomName/:ShowRoomLocation/:locationStreet",
    name: "ShowroomView",
    component: ShowroomView,
  },
  // Privacy-And-Terms
  {
    path: "/ThePrivacy/:Privacy",
    name: "ThePrivacy",
    component: ThePrivacy,
  },
  {
    path: "/TheTerms/:Terms",
    name: "TheTerms",
    component: TheTerms,
  },
  // Showroom Page
  {
    path: "/TheShowRoomPage",
    component: TheShowRoomPage,
    children: [
      {
        path: "",
        name: "ShowRoomCars",
        component: ShowRoomCars,
      },
      {
        path: "/ViewShowRoomCarDetails/:carId",
        name: "ViewShowRoomCarDetails",
        component: ViewShowRoomCarDetails,
      },
      {
        path: "/ShowRoomNote/:MyNote",
        name: "ShowRoomNote",
        component: ShowRoomNote,
      },
      {
        path: "/ShowRoomInfoTable/:MyInfo",
        name: "ShowRoomInfoTable",
        component: ShowRoomInfoTable,
      },
      {
        path: "/ShowRoomAddNewCar/:AddNewCar",
        name: "ShowRoomAddNewCar",
        component: ShowRoomAddNewCar,
      },
      {
        path: "/ShowRoomInfoSetting/:MySetting",
        name: "ShowRoomInfoSetting",
        component: ShowRoomInfoSetting,
      },
      {
        path: "/PasswordChange",
        name: "PasswordChange",
        component: PasswordChange,
      },
    ],
  },
  // User Profile
  {
    path: "/TheUserPage",
    component: TheUserPage,
    children: [
      {
        path: "",
        name: "UserAdd",
        component: UserAdd,
      },
      {
        path: "/UserProfile",
        name: "UserProfile",
        component: UserProfile,
      },
      {
        path: "/EditPost",
        name: "EditPost",
        component: EditPost,
      },
      {
        path: "/UserProfileEdit",
        name: "UserProfileEdit",
        component: UserProfileEdit,
      },
      {
        path: "/NewPost",
        name: "NewPost",
        component: NewPost,
      },
      {
        path: "/SavedAdUser/:SavedAd",
        name: "SavedAdUser",
        component: SavedAdUser,
      },
    ],
  },
  // Admin Access
  {
    path: "/AdminPageRoute",
    component: AdminPageRoute,
    children: [
      {
        path: "",
        name: "DashBoard",
        component: DashBoard,
      },
      {
        path: "/TheUsersAccount",
        name: "TheUsersAccount",
        component: TheUsersAccount,
      },
      {
        path: "/TheShowRoomAccount",
        name: "TheShowRoomAccount",
        component: TheShowRoomAccount,
      },
      {
        path: "/Advertisement",
        name: "Advertisement",
        component: Advertisement,
      },
      {
        path: "/Cars",
        name: "Cars",
        component: Cars,
      },
      {
        path: "/Report",
        name: "Report",
        component: Report,
      },
      {
        path: "/AdminSetting",
        name: "AdminSetting",
        component: AdminSetting,
      },
      {
        path: "/UserCarDetails/:carId",
        name: "UserCarDetails",
        component: UserCarDetails,
      },
      {
        path: "/ShowRoomAccountRequest",
        name: "ShowRoomAccountRequest",
        component: ShowRoomAccountRequest,
      },
      {
        path: "/UserPageInfo",
        name: "UserPageInfo",
        component: UserPageInfo,
      },
    ],
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
