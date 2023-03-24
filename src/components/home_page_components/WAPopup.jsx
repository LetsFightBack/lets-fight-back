import React, { useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import CloseIcon from "@mui/icons-material/Close";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const WAPopup = () => {
  const [waPopup, setOpenWaPopup] = useState(true);
  return (
    waPopup && (
      <PopupStyle>
        <div className="close_btn_popup" onClick={() => setOpenWaPopup(false)}>
          <CloseIcon />
        </div>
        <div className="content_wapopup">
        Join the <span style={{fontWeight:"800"}}> 1000+</span> members <span style={{fontWeight:"800"}}>#LetsFightBack</span>  Community and craft your fight-back journey 🚀  
              </div>
        <a
          href="https://chat.whatsapp.com/EICCHIctPp0Ff8ECP1fnW5"
          target="_blank"
        >
          <button className="join_btn_wapopup">
            <WhatsAppIcon /> Join Now
          </button>
        </a>
      </PopupStyle>
    )
  );
};

export default WAPopup;

let PopupStyle = styled.div(
  (props) => css`
    position: fixed;
    z-index: 20;
    margin: 1rem;
    padding: 1rem;
    border-radius: 10px;
    bottom: 0;
    right: 0;
    width: 25vw;
    height: min-content;
    background-color: #e3dada;
    a {
      text-decoration: none;
    }
    .content_wapopup {
        text-align: center;
        font-weight: 600;
      font-size: 1rem;
    }
    .close_btn_popup {
      text-align: right;
      cursor: pointer;
    }
    .join_btn_wapopup {
      display: flex;
      width: 100%;
      justify-content: center;
      padding: 0.5rem 0.3rem;
      margin-top: 1rem;
      border-radius: 10px;
      font-weight: 600;
      background-color: #298358;
      color: white;

      cursor: pointer;
      border: none;
    }
    @media only screen and (max-width: 620px) {

  width: fit-content;
        }
  `
);
