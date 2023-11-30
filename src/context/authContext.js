import { createContext, useState } from "react";
import cookies from "js-cookie";

const AuthContext = createContext({
  id: "",
  token: "",
  isLoggedIn: false,
  role: "",
  login: (id, token, role) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const storageToken = cookies.get("token");
  const storageRole = cookies.get("role");
  const storageId = cookies.get("id");

  const [token, setToken] = useState(storageToken);
  const [role, setRole] = useState(storageRole);
  const [id, setId] = useState(storageId);

  const userIsLoggedIn = !!token;

  const loginHandler = (id, token, role) => {
    cookies.set("id", id);
    cookies.set("token", token);
    cookies.set("role", role);
    setId(id);
    setRole(role);
    setToken(token);
  };

  const logoutHandler = () => {
    cookies.remove("id");
    cookies.remove("token");
    cookies.remove("role");
    setId(null);
    setRole(null);
    setToken(null);
  };

  const contextValue = {
    id: id,
    token: token,
    isLoggedIn: userIsLoggedIn,
    role: role,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
