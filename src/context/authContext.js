import { createContext, useState } from "react";
import cookies from "js-cookie";

const AuthContext = createContext({
  id: "",
  token: "",
  isLoggedIn: false,
  role: "",
  userData: {},
  login: (id, token, role, userData) => {},
  logout: () => {},
  userDataHandler: (userData) => {},
});

export const AuthContextProvider = (props) => {
  const storageToken = cookies.get("token");
  const storageRole = cookies.get("role");
  const storageId = cookies.get("id");

  let userData = {};
  if (cookies.get("user") !== undefined) {
    userData = JSON.parse(cookies.get("user"));
  }

  const [token, setToken] = useState(storageToken);
  const [role, setRole] = useState(storageRole);
  const [id, setId] = useState(storageId);
  const [user, setUser] = useState(userData);

  const userIsLoggedIn = !!token;

  const loginHandler = (id, token, role, userData) => {
    cookies.set("id", id);
    cookies.set("token", token);
    cookies.set("role", role);
    cookies.set("user", JSON.stringify(userData));
    setId(id);
    setRole(role);
    setToken(token);
    setUser(userData);
  };

  const logoutHandler = () => {
    cookies.remove("id");
    cookies.remove("token");
    cookies.remove("role");
    cookies.remove("user");
    setId(null);
    setRole(null);
    setToken(null);
    setUser(null);
  };

  const userDataHandler = (userData) => {
    cookies.set("user", JSON.stringify(userData));
    setUser(userData);
  };

  const contextValue = {
    id: id,
    token: token,
    isLoggedIn: userIsLoggedIn,
    role: role,
    userData: user,
    login: loginHandler,
    logout: logoutHandler,
    userDataHandler: userDataHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
