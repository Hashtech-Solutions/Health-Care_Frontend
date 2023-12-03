import React from "react";
import { Navbar } from "../../components/Navbar";

const NavItems = [
  {
    title: "Appointments",
    path: "/doctor/appointments",
  },
  {
    title: "Specializations",
    path: "/doctor/specializations",
  },
  { title: "Clinic", path: "/doctor/clinic" },
  {
    title: "Profile",
    path: "/doctor/profile",
  },
  {
    title: "Logout",
  },
];

export const DoctorNavbar = () => {
  return <Navbar NavItems={NavItems} HeaderLink="/doctor" />;
};
