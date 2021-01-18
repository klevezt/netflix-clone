import React, { useEffect, useState } from "react";
import "./Nav.css";

import Logo from "./logo.png";
import Image_profile from "./profile__logo.png";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo" src={Logo} alt="logo" />
      <img className="nav__avatar" src={Image_profile} alt="logo" />
    </div>
  );
}

export default Nav;
