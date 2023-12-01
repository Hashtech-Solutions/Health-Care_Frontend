import { Navbar } from "../../components/Navbar";

const NavItems = [
  {
    title: "Appointments",
    path: "/patient/appointments",
  },
  {
    title: "Doctors",
    path: "/patient/doctors",
  },
  {
    title: "Specializations",
    path: "/patient/specializations",
  },
  {
    title: "Profile",
    path: "/patient/profile",
  },
  {
    title: "Logout",
  },
];

export const PatientNavbar = () => {
  return <Navbar NavItems={NavItems} HeaderLink="/patient" />;
};
