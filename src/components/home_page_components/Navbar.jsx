import React from "react";
import "./navbar.style.scss";

import styled from "@emotion/styled";
import { css } from "@emotion/react";

const Navbar = () => {
  return (
    <NavbarStyle>
      <nav
        className="navbar"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div className="logo_navbar">LOGO</div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <ul
              style={{
                display: "flex",
                textDecoration: "none",
                listStyleType: "none",
                color:"#3C455F"
              }}
            >
              <li>About </li>
              <li>Gallery </li>
              <li>Contact </li>
            </ul>
          </div>
          <button className="loginbtn">
            <img className="login-icon" src="/assets/loginIcon.svg" alt="" />{" "}
            Login
          </button>
        </div>
      </nav>
    </NavbarStyle>
  );
};

export default Navbar;

let NavbarStyle = styled.div(
  css`
    width: 95%;
    margin: auto;
  `
);
