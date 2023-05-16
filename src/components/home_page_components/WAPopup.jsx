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
          Join the <span style={{ fontWeight: "800" }}> 1800+</span> members{" "}
          <span style={{ fontWeight: "800" }}>#LetsFightBack</span> Community and craft your
          fight-back journey 🚀
        </div>
        <a
          href="https://chat.whatsapp.com/DN23wjZPQsIBZ0LIpVDDJQ"
          target="_blank"
          rel="noreferrer noopener"
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
    max-width: 26vw;
    height: min-content;
    background-color: #fff;
    color: black;
    box-shadow: 2px 2px 10px 2px black;

    a {
      text-decoration: none;
    }
    .content_wapopup {
      text-align: center;
      font-weight: 500;
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
      min-width: fit-content;
    }
  `
);
