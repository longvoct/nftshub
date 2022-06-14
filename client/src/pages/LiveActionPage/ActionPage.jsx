import React from "react";
import "./actionPage.scss";
import img1 from "../../pictures/List 2/pink_planet.png";
import img2 from "../../pictures/List 2/odeath.png";
import img3 from "../../pictures/List 2/fairy_sky.png";
import img4 from "../../pictures/List 2/firestarter.png";
import coin from "../../pictures/quality 1.png";

function ActionPage() {
  return (
    <div className="action-page">
      <div className="action-page__title">
        <h3 data-aos="fade-right" data-aos-delay="200">
          Today's best-selling artwork
        </h3>
        <h1 data-aos="fade-right" data-aos-delay="300">
          Live Action
        </h1>
      </div>
      <div
        className="action-page__list"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="action-page__item">
          <div className="action-page__item-img">
            <img src={img1} alt="" />
            <div className="action-page__item-title">
              <span>Male Android</span>
              <img
                src={coin}
                alt=""
                className="action-page__item-coin"
                style={{ width: "25px", height: "25px" }}
              />
            </div>
            <div className="action-page__item-buy">
              <span>0.4000 ETH</span>
              <div className="action-page__item-button">
                <span>Buy now</span>
              </div>
            </div>
          </div>
        </div>

        <div className="action-page__item">
          <div className="action-page__item-img">
            <img src={img2} alt="" />
            <div className="action-page__item-title">
              <span>Downward Ascent</span>
              <img
                src={coin}
                alt=""
                className="action-page__item-coin"
                style={{ width: "25px", height: "25px" }}
              />
            </div>
            <div className="action-page__item-buy">
              <span>0.4000 ETH</span>
              <div className="action-page__item-button">
                <span>Buy now</span>
              </div>
            </div>
          </div>
        </div>

        <div className="action-page__item">
          <div className="action-page__item-img">
            <img src={img3} alt="" />
            <div className="action-page__item-title">
              <span>Bite Blue</span>
              <img
                src={coin}
                alt=""
                className="action-page__item-coin"
                style={{ width: "25px", height: "25px" }}
              />
            </div>
            <div className="action-page__item-buy">
              <span>0.4000 ETH</span>
              <div className="action-page__item-button">
                <span>Buy now</span>
              </div>
            </div>
          </div>
        </div>

        <div className="action-page__item">
          <div className="action-page__item-img">
            <img src={img4} alt="" />
            <div className="action-page__item-title">
              <span>The Lighting of Love</span>
              <img
                src={coin}
                alt=""
                className="action-page__item-coin"
                style={{ width: "25px", height: "25px" }}
              />
            </div>
            <div className="action-page__item-buy">
              <span>0.4000 ETH</span>
              <div className="action-page__item-button">
                <span>Buy now</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActionPage;
