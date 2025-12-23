import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [auth, setAuth] = useState("Login");
  useEffect(() => {
    console.log("header rendered");
  }, [auth]);
  return (
    <div className="header">
      <img className="logo" src={LOGO_URL} />

      <div className="nav-bar">
        <ul>
          <li><Link to={"/"} className="a">Home</Link></li>
         {/*  <Link to={"/"}>
            <li>Home</li>
          </Link> */}

          <li><Link to={"/about"} className="a">About</Link></li>
          {/* <Link to={"/about"}>
            <li>About</li>
          </Link> */}

           <li><Link to={"/contact"} className="a">Contact</Link></li>
{/*           <Link to={"/contact"}>
            <li>Contact</li>
          </Link> */}
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              auth == "Login" ? setAuth("Logout") : setAuth("Login");
            }}
          >
            {auth}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
