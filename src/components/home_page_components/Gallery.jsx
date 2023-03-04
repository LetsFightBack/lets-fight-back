import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const Gallery = () => {
  return (
    <GalleryStyle>
      <div className="main_gallery">
        <div className="head_gallery">People Love us !</div>
        <div className="card_gallery">
          <img src="/assets/NDTV.png" alt="" className="card_image_gallery" />
          <div className="content_gallery">
            <div className="card_heading">NDTV India</div>
            <p>
              {" "}
              Lörem ipsum nevis prektigt om hämura mön. Migisk far. Syr olig.
              Duledes makrogt och et jure. Mäsm besam emedan os inklusive
              polynygon. Homong mäv faning beck. Lörem ipsum nevis prektigt om
              hämura mön. Migisk far. Syr olig. Duledes makrogt och et jure.v
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
              sint at commodi esse iusto suscipit dolores! Ut soluta possimus
              odit labore eligendi modi quos architecto? Dicta animi maiores
              necessitatibus odio, libero odit voluptatibus dignissimos incidunt
              magnam repellendus maxime nihil consequatur deleniti ipsam,
              reprehenderit illo ab sit. Nostrum delectus sint debitis.{" "}
            </p>
          </div>
        </div>
          <div className="horizontal_line"></div>
        <div className="card_gallery alternate_reverse">
          <img
            src="/assets/TheHindu.png"
            alt=""
            className="card_image_gallery"
          />
          <div className="content_gallery align_right">
            <div className="card_heading">The Hindu</div>
            <p>
              {" "}
              Lörem ipsum nevis prektigt om hämura mön. Migisk far. Syr olig.
              Duledes makrogt och et jure. Mäsm besam emedan os inklusive
              polynygon. Homong mäv faning beck. Lörem ipsum nevis prektigt om
              hämura mön. Migisk far. Syr olig. Duledes makrogt och et jure.v
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
              sint at commodi esse iusto suscipit dolores! Ut soluta possimus
              odit labore eligendi modi quos architecto? Dicta animi maiores
              necessitatibus odio, libero odit voluptatibus dignissimos incidunt
              magnam repellendus maxime nihil consequatur deleniti ipsam,
              reprehenderit illo ab sit. Nostrum delectus sint debitis.{" "}
            </p>
          </div>
        </div>
        <div className="horizontal_line"></div>

        <div className="card_gallery last">
          <img
            src="/assets/TimesOfIndia.png"
            alt=""
            className="card_image_gallery"
          />
          <div className="content_gallery">
            <div className="card_heading">Times Of India</div>
            <p>
              {" "}
              Lörem ipsum nevis prektigt om hämura mön. Migisk far. Syr olig.
              Duledes makrogt och et jure. Mäsm besam emedan os inklusive
              polynygon. Homong mäv faning beck. Lörem ipsum nevis prektigt om
              hämura mön. Migisk far. Syr olig. Duledes makrogt och et jure.v
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
              sint at commodi esse iusto suscipit dolores! Ut soluta possimus
              odit labore eligendi modi quos architecto? Dicta animi maiores
              necessitatibus odio, libero odit voluptatibus dignissimos incidunt
              magnam repellendus maxime nihil consequatur deleniti ipsam,
              reprehenderit illo ab sit. Nostrum delectus sint debitis.{" "}
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
    width: 100%;
    .main_gallery {
      width: 90%;
      margin: auto;
    }
    .head_gallery {
      font-size: 48px;
      line-height: 150%;
      text-align: center;
      color: white;
      margin-bottom: 3.75rem;
    }
    .card_gallery {
      display: flex;
      margin-bottom: 10rem;
    }
    .last {
      padding-bottom: 5rem;
      margin-bottom: 0rem;
    }
    .card_image_gallery {
      width: 38rem;
      height: auto;
    }

    .content_gallery {
      color: white;
      padding: 1rem 3.75rem;
    }
    .card_heading {
      font-size: 3rem;
      line-height: 4.5rem;
      margin-bottom: 1rem;
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
        overflow-x: hidden;
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
      }
      .last {
        padding-bottom: 2.5rem;
        margin-bottom: 0rem;
      }
      .horizontal_line {
        display: block;
        width: 155.01px;
        margin: 0 auto 1rem auto;
        height: 0px;
        border: 1px solid #FFFFFF;
        background: #ffffff;
      }
    }
  `
);
