import {
  AplicationList,
  Checkaplication,
  Dashboard,
  Login,
  Profile,
  Tenders,
} from "../pages";
import IRoute from "./types";
import {
  TbChecks,
  TbHome,
  TbLayoutDashboard,
  TbLicense,
  TbListDetails,
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
    isMenu: false,
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
  {
    title: "Tenderlar",
    path: "/tenders",
    component: Tenders,
    icon: TbListDetails,
    isMenu: true,
    isRole: ["user"],
  },
];
