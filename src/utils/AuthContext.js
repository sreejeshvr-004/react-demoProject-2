import { createContext } from "react";

const AuthContext = createContext({
  loggedInUserName: "Default User",
});

export default AuthContext;
