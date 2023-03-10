import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const Gallery = () => {
  return (
    <GalleryStyle>
      <div className="main_gallery" >
        <div className="head_gallery">People Love and Support us ❤️</div>
        <div className="card_gallery">
          <img src="/assets/NDTV.png" alt="" className="card_image_gallery" />
          <div className="content_gallery">
            <div className="card_heading"> Featured With NDTV INDIA</div>
            <p>
            </p>
          </div>
        </div>
         
        <div className="horizontal_line"></div>

        <div className="card_gallery alternate_reverse">
          <img
            src="/assets/TimesOfIndia.png"
            alt=""
            className="card_image_gallery"
          />
          <div className="content_gallery align_right">
            <div className="card_heading">  Published in The Hindu Buisness Line</div>
            <p >
          
            </p>
          </div>
        </div>
        <div className="horizontal_line"></div>
        <div className="card_gallery last ">
          <img
            src="/assets/TheHindu.jpeg"
            alt=""

            className="card_image_gallery "
          />
          <div className="content_gallery ">
            <div className="card_heading">  Initiative Highlighted by The Hindu</div>
            <p>
          
            </p>
          </div>
        </div>
      </div>
    </GalleryStyle>
  );
};

export default Gallery;

let GalleryStyle = styled.div(
  css`
    background: #162141;
    width: 100vw;
    .main_gallery {
      width: 85%;
      margin: auto;
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
     
      margin-bottom: 8rem;
    }
    .last {
      padding-bottom: 5rem;
      margin-bottom: 0rem;
    }
    .card_image_gallery {
      width: 38rem;
      height: auto;
      border-radius: 20px;
    }

    .content_gallery {
      color: white;
      padding: 0rem 3.75rem;
    }
    .card_heading {
      font-size: 2.5rem;
      line-height: 4.5rem;
      margin-bottom: 1rem;
      text-decoration: underline;

    }
    .alternate_reverse {
      flex-direction: row-reverse;
    }
    .align_right {
      text-align: right;
    }
    .horizontal_line {
      display: none;
    }


    @media only screen and (max-width: 620px) {
      .main_gallery {
        width: 100%;
        /* overflow-x: hidden; */
      }
      .last {
        padding-bottom: 2.5rem;
        margin-bottom: 0rem;
      }
      .head_gallery {
        font-size: 2rem;
      }
      .card_heading{
        font-size: 2rem;
      }
      .card_gallery {
        width: 100%;
        flex-direction: column;
        margin-bottom: 0rem;
      }

  
      .content_gallery {
        text-align: center;
        padding: 1rem 1rem;
      }
      .card_image_gallery {
        width: 90%;
        margin: auto;
      }
    
      .horizontal_line {
        display: block;
        width: 155px;
        margin: 4rem auto 5rem auto  ;
        height: 0px;
        border: 1px solid #FFFFFF;
        background: #ffffff;
        /* margin-bottom: 2.5rem; */

      }

    }
  `
);
