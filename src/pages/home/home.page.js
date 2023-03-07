import "./home.style.scss";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import Navbar from "../../components/home_page_components/Navbar";
import Hero from "../../components/home_page_components/Hero";
import Gallery from "../../components/home_page_components/Gallery";
import WhoAreWe from "../../components/home_page_components/WhoAreWe";
import LoginHero from "../../components/home_page_components/LoginHero";

export default function Home() {
  return (
    <>
      <HeroStyle>
        <div className="home">
          <Navbar />
          <Hero />
        </div>
        <WhoAreWe/>
        <LoginHero/>
      <Gallery />
      
      <p style={{textAlign:"center"}}>Made with 💙 by <a  href="https://bit.ly/lets-fight-back-initiative-1" target="_blank" rel="noreferrer" style={{fontWeight:"800",textDecoration:"none", color:"black"}}> #LetsFightBack</a></p>

      </HeroStyle>
    </>
  );
}

let HeroStyle = styled.div(
  css`
    font-family: "Lato", sans-serif;
    overflow-x: hidden;
      
    .heading {
      color: #1e2655;
      font-size: 5rem;
    }
    .h2 {
      color: #0378a6;
    }
  `
);
