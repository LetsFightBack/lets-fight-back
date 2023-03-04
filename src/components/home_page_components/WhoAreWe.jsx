import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const WhoAreWe = () => {
  return (
    <WhoAreWeStyle>
      <div className="main_gallery">
        <div className="head_gallery">WHO ARE WE?</div>
        <div className="card_gallery">
          <img
            src="/assets/who are we.svg"
            alt=""
            className="card_image_gallery"
          />
          <div className="content_gallery">
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
              reprehenderit illo ab sit. Nostrum delectus sint debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, maxime molestias distinctio rem excepturi veritatis repellat expedita quia nemo voluptatum fugit iste voluptatem laudantium possimus repellendus repudiandae culpa! Placeat possimus sequi accusamus. Praesentium nesciunt assumenda corrupti et ipsa numquam eligendi maxime veniam dolores, eum corporis tenetur quo iusto libero laborum quos officiis nihil debitis molestias dolor voluptates. Amet unde numquam ipsam, dolores voluptas doloribus repellendus fuga deleniti nemo illum tempore ipsum iure porro ullam perspiciatis cupiditate sequi, fugit optio, eveniet consectetur pariatur? Modi laboriosam omnis iusto quam, quaerat quia, officia ea accusamus fugit eveniet error voluptas delectus voluptatem, perspiciatis quasi!
            </p>
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
      font-size: 48px;
      line-height:72px;
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

 

    @media only screen and (max-width: 620px) {
      .main_gallery {
        width: 100%;
        padding-bottom: 2rem;

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
        padding-bottom:1rem;
      }
      
  
    }
  `
);
