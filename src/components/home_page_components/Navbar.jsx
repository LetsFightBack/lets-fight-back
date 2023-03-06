import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

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
        <div className="logo_navbar">
          <img src="/assets/logoNew.svg" alt="" />
        </div>
        <div
        >
          
          <Link to="/login">
            <button className="loginbtn">
              <img className="login-icon" src="/assets/loginIcon.svg" alt="" />{" "}
              Login
            </button>
          </Link>
        </div>
      </nav>
    </NavbarStyle>
  );
};

export default Navbar;

let NavbarStyle = styled.div(
  css`
    width: 95%;
    margin: 1rem auto 0 auto;

    .navbar {
      font-size: 24px;
      color: #3c455f;
      font-family: "Lato";
      a {
        color: #3c455f;
        text-decoration: none;
      }
      ul {
        li {
          padding: 0 2.5rem;
        }
      }
      .loginbtn {
        display: flex;
        align-items: center;
        background: #1e2655;
        padding: 0.5rem;
        color: white;
        border-radius: 6px;
        font-weight: 600;
        font-size: 20px;
        cursor: pointer;
      }
      .login-icon {
        padding: 0 0.5rem;
      }
      .logo_navbar img {
        /* transform: scale(0.6); */
        width: 8rem;
      }
    }

    @media only screen and (max-width: 620px) {
      .navbar {
        ul {
          li {
            font-size: 1rem;
            line-height: 10px;
            padding: 0 0.3rem;
          }
        }
        .logo_navbar {
          /* transform: scale(0.5); */
          transform: scale(0.6);
        }
        .loginbtn {
          padding: 0.2rem;

          font-weight: 600;
          font-size: 1rem;
        }
        .login-icon {
          height: 1.2rem;
          padding: 0.4rem 0.4rem;
        }
        .options_div {
          margin-left: -5rem;
        }
      }
    }
  `
);
