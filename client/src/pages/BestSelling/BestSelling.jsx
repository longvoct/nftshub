import React from "react";
import "./bestSelling.scss";
import img1 from "../../pictures/List 3/retro_cyber.png";
import img2 from "../../pictures/List 3/dingir.png";
import img3 from "../../pictures/List 3/koch_snowflake.png";
import img4 from "../../pictures/List 3/neon_night.png";
import img5 from "../../pictures/List 3/back_home.png";
import img6 from "../../pictures/List 3/Lizard_warrior.png";
import img7 from "../../pictures/List 3/dark_god.png";
import img8 from "../../pictures/List 3/fire_start.png";
import coin from "../../pictures/quality 1.png";
import { NavLink } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css";
// AOS.init();

function BestSelling() {
  return (
    <div className="bestselling">
      <div className="bestselling__title" data-aos="fade-left">
        <h3>Today's best-selling artwork</h3>
        <h1>Explore NFT’s Art</h1>
      </div>
      <div className="bestselling-select__list" data-aos="flip-up">
        <div className="bestselling-select__item">
          {/* <NavLink
            exact
            to="/"
            activeClassName="bestselling-select__item active"
          > */}
          <span>Today</span>
          {/* </NavLink> */}
        </div>
        <div className="bestselling-select__item active">
          <span>This Week</span>
        </div>
        <div className="bestselling-select__item">
          <span>This Month</span>
        </div>
        <div className="bestselling-select__item">
          <span>This Year</span>
        </div>
      </div>
      <div className="bestselling__list">
        <div className="bestselling__item">
          <div className="bestselling__item-img">
            <img src={img1} alt="" />
            <div className="bestselling__item-title">
              <span>Male Android</span>
              <img
                src={coin}
                alt=""
                className="bestselling__item-coin"
                style={{ width: "25px", height: "25px" }}
              />
            </div>
            <div className="bestselling__item-buy">
              <span>0.4000 ETH</span>
              <div className="bestselling__item-button">
                <span>Buy now</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bestselling__item">
          <div className="bestselling__item-img">
            <img src={img2} alt="" />
            <div className="bestselling__item-title">
              <span>Downward Ascent</span>
              <img
                src={coin}
                alt=""
                className="bestselling__item-coin"
                style={{ width: "25px", height: "25px" }}
              />
            </div>
            <div className="bestselling__item-buy">
              <span>0.4000 ETH</span>
              <div className="bestselling__item-button">
                <span>Buy now</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bestselling__item">
          <div className="bestselling__item-img">
            <img src={img3} alt="" />
            <div className="bestselling__item-title">
              <span>Bite Blue</span>
              <img
                src={coin}
                alt=""
                className="bestselling__item-coin"
                style={{ width: "25px", height: "25px" }}
              />
            </div>
            <div className="bestselling__item-buy">
              <span>0.4000 ETH</span>
              <div className="bestselling__item-button">
                <span>Buy now</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bestselling__item">
          <div className="bestselling__item-img">
            <img src={img4} alt="" />
            <div className="bestselling__item-title">
              <span>The Lighting of Love</span>
              <img
                src={coin}
                alt=""
                className="bestselling__item-coin"
                style={{ width: "25px", height: "25px" }}
              />
            </div>
            <div className="bestselling__item-buy">
              <span>0.4000 ETH</span>
              <div className="bestselling__item-button">
                <span>Buy now</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bestselling__item">
          <div className="bestselling__item-img">
            <img src={img5} alt="" />
            <div className="bestselling__item-title">
              <span>The Lighting of Love</span>
              <img
                src={coin}
                alt=""
                className="bestselling__item-coin"
                style={{ width: "25px", height: "25px" }}
              />
            </div>
            <div className="bestselling__item-buy">
              <span>0.4000 ETH</span>
              <div className="bestselling__item-button">
                <span>Buy now</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bestselling__item">
          <div className="bestselling__item-img">
            <img src={img6} alt="" />
            <div className="bestselling__item-title">
              <span>The Lighting of Love</span>
              <img
                src={coin}
                alt=""
                className="bestselling__item-coin"
                style={{ width: "25px", height: "25px" }}
              />
            </div>
            <div className="bestselling__item-buy">
              <span>0.4000 ETH</span>
              <div className="bestselling__item-button">
                <span>Buy now</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bestselling__item">
          <div className="bestselling__item-img">
            <img src={img7} alt="" />
            <div className="bestselling__item-title">
              <span>The Lighting of Love</span>
              <img
                src={coin}
                alt=""
                className="bestselling__item-coin"
                style={{ width: "25px", height: "25px" }}
              />
            </div>
            <div className="bestselling__item-buy">
              <span>0.4000 ETH</span>
              <div className="bestselling__item-button">
                <span>Buy now</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bestselling__item">
          <div className="bestselling__item-img">
            <img src={img8} alt="" />
            <div className="bestselling__item-title">
              <span>The Lighting of Love</span>
              <img
                src={coin}
                alt=""
                className="bestselling__item-coin"
                style={{ width: "25px", height: "25px" }}
              />
            </div>
            <div className="bestselling__item-buy">
              <span>0.4000 ETH</span>
              <div className="bestselling__item-button">
                <span>Buy now</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestSelling;
