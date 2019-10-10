import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#3b5998" };
  return (


 
    <nav className="navbar fixed-top navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
            <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">MLLL</a>
            <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
          <a className="nav-link" href="#">Sign out</a>
          </li>
          </ul>
    </nav>




  );
};

export default Header;
