import "./home.style.scss";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import Navbar from "../../components/home_page_components/Navbar";
import Center from "../../components/home_page_components/Center";
import Gallery from "../../components/home_page_components/Gallery";

export default function Home() {
  return (
    <>
      <Hero>
        <div className="home">
          <Navbar />
          <Center />
        </div>
      <Gallery />
      <p style={{textAlign:"center"}}>Made with 💙 by Let’s Fight Back</p>
      </Hero>
    </>
  );
}

let Hero = styled.div(
  css`
    font-family: "Lato", sans-serif;

    .heading {
      color: #1e2655;
      font-size: 5rem;
    }
    .h2 {
      color: #0378a6;
    }
  `
);
