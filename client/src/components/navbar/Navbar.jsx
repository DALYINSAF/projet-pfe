import "./navbar.css";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
        
        <img className="imglogo" src="https://www.pngkey.com/png/full/855-8553271_new-travel-peeps-travel-agency-logo-png.png" alt="" />

          <span className="logo"><b>Go Vacation</b></span>
        </Link>
        {user ? user.username : (
          <div className="navItems">
            <Link to="/login" style={{ color: "inherit", textDecoration: "none" }}>
            <button className="navButton" >Login/Register</button>        </Link>
           
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;