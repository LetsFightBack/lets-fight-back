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
        <p className="heading2_hero"> This <span style={{textDecoration:"underline"}}>Layoff!</span> </p>
        <p className="content_hero">
      <span className="weight800">  23489+ </span>folks from  <span className="weight800"> 78+</span> companies have been laid off in the last <span className="weight800">5</span> months and the situation is devastating for everyone around. <span className="weight800">I </span> am one of the <span className="weight800">23489</span> folks, but  I was able to get a job exactly on the <span className="weight800"> 18th</span> day from the day of my layoff, now let me help you get yours&nbsp;🚀!!
        </p>
        <img
          src="/assets/heroImage.svg"
          alt="HeroIMG"
          className="hero_image"
        />
      </div>
    </LandingStyle>
  );
};

export default Landing;

let LandingStyle = styled.div(
  css`
  .weight800{
    font-weight: 1300;
    color: rgba(30, 30, 30, 1);

  }
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
    .heading2_hero {
      font-size: 1.5rem;
      line-height: 23px;
      font-weight: 700;
      font-family: sans-serif;
      color: #0378a6;
      margin-top: -4rem;
      margin-left: 0.5rem;
    }
    .hero_image {
      position: absolute;
      right: 0rem;
      bottom: 0;
    }
    .content_hero {
      font-size: 1rem;
      line-height: 24px;
      font-weight: 600;
      margin-left: 0.5rem;
      color: rgba(30, 30, 30, 0.81);
      width: 30vw;
      margin-top: 2rem;
    }
    @media only screen and (max-width: 620px) {
      .main_landing {
        height: 72vh;
      }
      .heading_hero {
    
      font-size: 40px;
      line-height: 49px;
    }
    .heading2_hero {
      font-size: 1.5rem;
      line-height: 23px;
   
      margin-top: -1rem;
      margin-left: 0rem;
    }
      .content_hero {
        width: 90vw;
        margin-top: 2rem;
        margin-left: 0rem;
      }
      .hero_image {
        width: 150%;
      }
    }
  `
);
