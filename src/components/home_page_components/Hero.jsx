import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
const Landing = () => {
  return (
    <LandingStyle>
      <div className="main_landing">
        <h1 className="heading_hero">
          <span style={{ color: "#162141" }}>
            LET’S <br></br>
          </span>
          FIGHT BACK
        </h1>
        <p className="h2"> This Layoff!</p>
        <img
          src="/assets/heroImage.svg"
          alt="Hero Image"
          className="hero_image"
        />
      </div>
    </LandingStyle>
  );
};

export default Landing;

let LandingStyle = styled.div(
  css`
    .main_landing {
      width: 97.5%;
      margin: 0 0 0 auto;
      height: 98vh;
      position: relative;
    }
    .heading_hero {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 700;
      font-size: 101.779px;
      line-height: 124px;
    }
    .hero_image {
      position: absolute;
      right: -13rem;
      bottom: 0;
    }
    @media only screen and (max-width: 620px) {
      .hero_image {
        right: -40rem;
        transform: scale(0.5);
        /* left:0rem; */
        /* width: 100%; */
      }
    }
  `
);
