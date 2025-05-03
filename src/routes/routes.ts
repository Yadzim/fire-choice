import {
  AplicationList,
  Checkaplication,
  Dashboard,
  LendingPage,
  Login,
  Profile,
} from "../pages";
import IRoute from "./types";
import {
  TbChecks,
  TbHome,
  TbLayoutDashboard,
  TbLicense,
  TbUser,
} from "react-icons/tb";

export const publicRoutes = [
  {
    title: "lendin",
    path: "/",
    component: Login,
  },
  {
    title: "Login",
    path: "/login",
    component: Login,
  },
];

export const privateRoutes: IRoute[] = [
  // user routes
  {
    title: "Asosiy",
    path: "/",
    component: Dashboard,
    icon: TbHome,
    isMenu: true,
    isRole: ["user"],
  },
  {
    title: "Dashboard",
    path: "/dashboard",
    component: Dashboard,
    icon: TbLayoutDashboard,
    isMenu: false,
    isRole: ["user"],
  },
  {
    title: "Profile",
    path: "/profile",
    component: Profile,
    icon: TbUser,
    isMenu: true,
    isRole: ["user"],
  },
  {
    title: "Arizalar",
    path: "/aplications",
    component: AplicationList,
    icon: TbLicense,
    isMenu: true,
    isRole: ["user"],
  },
  {
    title: "Arizani tekshirish",
    path: "/check-aplication",
    component: Checkaplication,
    icon: TbChecks,
    isMenu: true,
    isRole: ["user"],
  },
];
