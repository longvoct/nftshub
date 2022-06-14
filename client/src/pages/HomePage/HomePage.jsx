import React from "react";
import "./homePage.scss";
import BgcIcon from "../../pictures/BGC_Icon.png";

function HomePage() {
  return (
    <div className="home-page">
      <img src={BgcIcon} alt="" className="home-page__bgc" />
      <div className="home-page__title">
        <h3
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          Trade with Simpler and Smarter NFT World
        </h3>
        <h1 data-aos="fade-up" data-aos-duration="700">
          Explore the NFT world , collect and sell your artwork
        </h1>
      </div>
    </div>
  );
}

export default HomePage;
