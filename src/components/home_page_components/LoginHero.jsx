import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

const LoginHero = () => {
  return (
    <LoginHeroStyle>
      <h3 className="head_login">Join us in the Initiative 🤝</h3>
      <div className="cards_login">
        <div className="card_login">
          <h4 className="card_head">For Candidates</h4>

<a href="https://forms.gle/D8x12Jf2QnSSgz8h9" target="_blank" rel="noreferrer">
          <button className="login_btn_hero">Get Hired</button>
         </a>
        </div>
        <div className="card_login">
          <h4 className="card_head">For Recruiters</h4>
          <Link to="/login">
            <button
              className="login_btn_hero"
              style={{ background: "#298358" }}
            >
              Login
            </button>
          </Link>
          <div className="login_signup">
            <p>
              Don’t have an account? <br></br>
              <Link to="/register">
                <span className="signup_span" style={{ color: "#298358" }}>
                  {" "}
                  Sign Up
                </span>{" "}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </LoginHeroStyle>
  );
};

export default LoginHero;

let LoginHeroStyle = styled.div(
  css`
    box-sizing: border-box;
    padding-bottom: 8.5rem;
    .head_login {
      padding-top: 6.5rem;
      font-size: 48px;
      line-height: 72px;
      text-align: center;
      font-weight: 700;
      margin-bottom: 3.75rem;
    }
    .cards_login {
      display: flex;
      justify-content: space-evenly;
    }
    .card_login {
      padding: 3rem 1rem;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: space-evenly;
      min-width: 25%;
      border: 1px solid rgba(0, 0, 0, 0.12);
      box-shadow: 6px 8px 25px rgba(0, 0, 0, 0.25);
      border-radius: 12px;
      height: 50vh;
    }
    .card_head {
      font-size: 2rem;
      line-height: 4.8rem;
      font-weight: 700;
    }
    .login_signup {
      font-weight: 500;
      font-size: 18px;
      line-height: 150%;
      color: #212121;
      text-align: center;
    }
    .signup_span {
      color: #4653f6;
      font-weight: 700;
    }
    .login_btn_hero {
      background: #4653f6;
      border-radius: 12px;
      padding: 1rem 2.5rem;
      margin-bottom: 1rem;
      border: none;
      color: white;
      font-size: 1.25rem;
      line-height: 150%;
      font-weight: 600;
      cursor: pointer;
    }
    @media only screen and (max-width: 620px) {
      .head_login {
        padding-top: 1.5rem;
        margin-bottom: 0.75rem;
        font-size: 2.2rem;
      }
      .card_head {
        font-size: 1.8rem;
      }
      .cards_login {
        flex-direction: column;
      }
      .card_login {
        width: 75%;
        height: 42vh;
        margin: 3rem auto 0 auto;
      }
    }
  `
);
