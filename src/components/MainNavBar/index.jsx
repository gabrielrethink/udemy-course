import React from "react";
import { Link } from "react-router-dom";
import "./MainNavBar.style.css";

const MainNavBar = () => {
  return (
    <nav>
      <Link to={"/"}>
        <h2>Home</h2>
      </Link>
      <Link to={"/secretword"}>
        <h2>Secret Word</h2>
      </Link>
    </nav>
  );
};
export default MainNavBar;
