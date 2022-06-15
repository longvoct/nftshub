import React from "react";
import "./createNft.scss";
import beImg from "../../pictures/beImg.png";
import feImg from "../../pictures/feimg.png";

import crt1 from "../../pictures/character/crt1.png";
import crt2 from "../../pictures/character/crt2.png";
import crt3 from "../../pictures/character/crt3.png";
import crt4 from "../../pictures/character/crt4.png";
import crt5 from "../../pictures/character/crt5.png";
import crt6 from "../../pictures/character/crt6.png";
import crt7 from "../../pictures/character/crt7.png";
import crt8 from "../../pictures/character/crt8.png";
import crt9 from "../../pictures/character/crt9.png";
import crt10 from "../../pictures/character/crt10.png";
import crt11 from "../../pictures/character/crt11.png";
import crt12 from "../../pictures/character/crt12.png";

function CreateNFT() {
  return (
    <div className="createNFT">
      <div className="createNFT-box">
        <div className="createNFT-box__beGround">
          <img src={beImg} alt="" />
        </div>
        <div className="createNFT-box__feGround">
          <div className="createNFT-box__text">
            <h1 data-aos="fade-right">Create Your NFTs & Sell your NFT</h1>
            <p data-aos="fade-right">
              Go to the NFTs Hub homepage and click on the “Create” button in
              the upper right corner. Upload your file and give a name to your
              NFT creation. Describe your work and add an external link to it if
              you desire. Your NFTs bring new royalty earnings every time
              there's a secondary sale.
            </p>
            <div className="createNFT-box__button" data-aos="fade-up">
              <div className="createNFT-box__button-create">
                <span>Create</span>
              </div>
              <div className="createNFT-box__button-explore">
                <span>Explore More</span>
              </div>
            </div>
          </div>
          <div className="createNFT-box__feImg">
            <img src={feImg} alt="" data-aos="fade-left" />
          </div>
        </div>
      </div>

      <div className="createNFT-meet">
        <div className="createNFT-meet__title">
          <h3>Joined influencers</h3>
          <h1>Influencers Have Joined Us</h1>
        </div>
        <div className="createNFT-meet__button">
          <span>Explore NFTs</span>
        </div>
      </div>

      <div className="createNFT-characters">
        <div className="createNFT-characters__crt">
          <img src={crt1} alt="" />
          <div className="createNFT-characters__name">
            <span>Mike Rognlien</span>
          </div>
        </div>
        <div className="createNFT-characters__crt">
          <img src={crt2} alt="" />
          <div className="createNFT-characters__name">
            <span>Donald Perry</span>
          </div>
        </div>
        <div className="createNFT-characters__crt">
          <img src={crt3} alt="" />
          <div className="createNFT-characters__name">
            <span>Melinda Davenport</span>
          </div>
        </div>
        <div className="createNFT-characters__crt">
          <img src={crt4} alt="" />
          <div className="createNFT-characters__name">
            <span>Kibet Hazard</span>
          </div>
        </div>
        <div className="createNFT-characters__crt">
          <img src={crt5} alt="" />
          <div className="createNFT-characters__name">
            <span>Christine Trodella</span>
          </div>
        </div>
        <div className="createNFT-characters__crt">
          <img src={crt6} alt="" />
          <div className="createNFT-characters__name">
            <span>Matthias A. Will</span>
          </div>
        </div>
        <div className="createNFT-characters__crt">
          <img src={crt7} alt="" />
          <div className="createNFT-characters__name">
            <span>Jay Davis</span>
          </div>
        </div>
        <div className="createNFT-characters__crt">
          <img src={crt8} alt="" />
          <div className="createNFT-characters__name">
            <span>Melinda Davenport</span>
          </div>
        </div>
        <div className="createNFT-characters__crt">
          <img src={crt9} alt="" />
          <div className="createNFT-characters__name">
            <span>Esther Ijewere</span>
          </div>
        </div>
        <div className="createNFT-characters__crt">
          <img src={crt10} alt="" />
          <div className="createNFT-characters__name">
            <span>Chris Putnam</span>
          </div>
        </div>
        <div className="createNFT-characters__crt">
          <img src={crt11} alt="" />
          <div className="createNFT-characters__name">
            <span>Lama Alogli</span>
          </div>
        </div>
        <div className="createNFT-characters__crt">
          <img src={crt12} alt="" />
          <div className="createNFT-characters__name">
            <span>Kenitra Mack</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateNFT;
