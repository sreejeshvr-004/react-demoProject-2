import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
import AuthContext from "../utils/AuthContext";

const Header = () => {
  const [auth, setAuth] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUserName } = useContext(AuthContext);

  return (
    <div className="header">
      <img className="logo" src={LOGO_URL} />

      <div className="nav-bar">
        <ul>
          <li>Online Status:{onlineStatus ? "🟢" : "🔴"}</li>

          <li>
            <Link to={"/"} className="a">
              Home
            </Link>
          </li>

          <li>
            <Link to={"/about"} className="a">
              About
            </Link>
          </li>

          <li>
            <Link to={"/contact"} className="a">
              Contact
            </Link>
          </li>
          <li>
            <Link to={"/food"} className="a">
              Food Delivery
            </Link>
          </li>

          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              auth == "Login" ? setAuth("Logout") : setAuth("Login");
            }}
          >
            {auth}
          </button>
          <li>{loggedInUserName}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
