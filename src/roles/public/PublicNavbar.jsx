import { Navbar } from "../../components/Navbar";

const NavItems = [
  {
    title: "Doctors",
    path: "/portal/doctors",
  },
  {
    title: "Specializations",
    path: "/portal/specializations",
  },
  {
    title: "Sign In",
    path: "/login",
  },
  {
    title: "Sign Up",
    path: "/signup",
  },
];

export const PublicNavbar = () => {
  return <Navbar NavItems={NavItems} HeaderLink="/portal" />;
};
