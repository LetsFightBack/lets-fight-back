import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const WhoAreWe = () => {
  return (
    <WhoAreWeStyle>
      <div className="main_gallery" id="about">
        <div className="head_gallery">WHO ARE WE?</div>
        <div className="card_gallery">
          <img
            src="/assets/who are we.svg"
            alt=""
            className="card_image_gallery"
          />
          <div className="content_gallery">
            <p>
              We are a bunch of passionate individuals, united to help and
              empower laid-off candidates and make a difference ❤️.
              <br />
              <br />
              Our Initiator Tejas Sudhir Tapas was personally laid off from his
              last organisation, but exactly on the 𝟏𝟖𝐭𝐡 𝐝𝐚𝐲 from the day of his
              layoff, he received his first offer with a 65% hike, got 7-8
              interview calls from top startups and on the 20th day from the day
              of his layoff, he joined the new company. 𝐈𝐟 he 𝐜𝐨𝐮𝐥𝐝 𝐝𝐨 𝐢𝐭, 𝐲𝐨𝐮
              𝐜𝐨𝐮𝐥𝐝 𝐝𝐞𝐟𝐢𝐧𝐢𝐭𝐞𝐥𝐲 𝐝𝐨 𝐭𝐡𝐞 𝐬𝐚𝐦𝐞. 💪
              <br />
              <br />
              Tejas was able to relate to the stress, and struggles faced by
              laid-off candidates and hence with some of his colleagues and
              juniors started the #LetsFightBack Initiative on 26th December.
              Till now we have been able to able 800+ Laidoff Individuals, and
              have partnered with 45+ HRs and Recruiters of top startups and
              MNCs in this tough time of recession. 🔥🤝
              <br />
              <br />
              <span className="font_increase">
                And we are just getting started... 🚀
              </span>
            </p>
            <a href="https://chat.whatsapp.com/EICCHIctPp0Ff8ECP1fnW5" target="_blank">
            <button className="join_btn_hero"><WhatsAppIcon/> Join 800+ Individual Whatsapp Community</button></a>
          </div>
        </div>
      </div>
    </WhoAreWeStyle>
  );
};

export default WhoAreWe;

let WhoAreWeStyle = styled.div(
  css`
    background: #298358;
    width: 100%;

    .main_gallery {
      width: 85%;
      margin: auto;
      padding-bottom: 5rem;
    }
    .head_gallery {
      padding-top: 4.5rem;
      font-size: 3rem;
      line-height: 72px;
      text-align: center;
      color: white;
      margin-bottom: 3.75rem;
    }
    .card_gallery {
      display: flex;
    }

    .card_image_gallery {
      width: 38rem;
      height: auto;
    }

    .content_gallery {
      color: white;
      padding: 2rem 3.75rem;
    }

    .font_increase {
      font-size: 1.25rem;
      font-weight: 800;
    }
    .join_btn_hero {
      display: flex;
      align-items: center;
      background: white;
      border-radius: 12px;
      padding: 1rem 2.5rem;
      margin-bottom: 1rem;
      border: none;
      color: white;
      font-size: 1.25rem;
      line-height: 150%;
      font-weight: 600;
      cursor: pointer;
      color:#298358;
      box-shadow: 2px 2px 2px black;
   transition: all 0.3s;
      
    }
    .join_btn_hero:hover {
      transform: scale(1.01);
    }
    a
      {
        text-decoration: none;
      }
    @media only screen and (max-width: 620px) {
      .main_gallery {
        width: 100%;
        padding-bottom: 2rem;
      }
      .head_gallery {
        font-size: 2rem;
      }
      .card_gallery {
        width: 100%;
        margin-bottom: 5rem;
        flex-direction: column;
      }

      .content_gallery {
        text-align: center;
        padding: 1rem 1rem;
      }
      .card_image_gallery {
        width: 90%;
        margin: auto;
        padding-bottom: 1rem;
      }
    }
  `
);
