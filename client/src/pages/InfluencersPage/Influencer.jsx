import React from "react";
import "./influencer.scss";
import cover1 from "../../pictures/influencers/coverImage/cover 1.png";
import cover2 from "../../pictures/influencers/coverImage/cover 2.png";
import cover3 from "../../pictures/influencers/coverImage/cover 3.png";
import cover4 from "../../pictures/influencers/coverImage/cover 4.png";
import ava1 from "../../pictures/influencers/avavar/avatar1.png";
import ava2 from "../../pictures/influencers/avavar/avatar2.png";
import ava3 from "../../pictures/influencers/avavar/avatar3.png";
import ava4 from "../../pictures/influencers/avavar/avatar4.png";
import fl1 from "../../pictures/influencers/follower/fl1.png";
import fl2 from "../../pictures/influencers/follower/fl2.png";
import fl3 from "../../pictures/influencers/follower/fl3.png";
import fl4 from "../../pictures/influencers/follower/fl4.png";
import fl5 from "../../pictures/influencers/follower/fl5.png";
import fl6 from "../../pictures/influencers/follower/fl6.png";
import fl7 from "../../pictures/influencers/follower/fl7.png";
import fl8 from "../../pictures/influencers/follower/fl8.png";
import fl9 from "../../pictures/influencers/follower/fl9.png";
import fl10 from "../../pictures/influencers/follower/fl10.png";
import fl11 from "../../pictures/influencers/follower/fl11.png";
import fl12 from "../../pictures/influencers/follower/fl12.png";
import fl13 from "../../pictures/influencers/follower/fl13.png";
import fl14 from "../../pictures/influencers/follower/fl14.png";
import fl15 from "../../pictures/influencers/follower/fl15.png";
import fl16 from "../../pictures/influencers/follower/fl16.png";

function Influencer() {
  return (
    <div className="influencer">
      <div className="influencer-header">
        <div className="influencer__title">
          <h3>Joined influencers</h3>
          <h1>Influencers Have Joined Us</h1>
        </div>
        <div className="influencer__button">
          <span>Explore NFTs</span>
        </div>
      </div>

      <div className="influencer-desc">
        <p>
          Keep up with these leading lights of the NFT movement to hear about
          the next movers and shakers in the red-hot non-fungible token space
        </p>
      </div>

      <div className="influencer-contact__list">
        <div className="influencer-contact__item">
          <img src={cover1} alt="" className="influencer-contact__coverImage" />
          <img src={ava1} alt="" className="influencer-contact__avatar" />
          <div className="influencer-contact__name">
            <span>Julien Codorniou</span>
          </div>
          <div className="influencer-contact__button">
            <span>Follow</span>
          </div>
          <div className="influencer-contact__followers">
            <div className="influencer-contact__follower">
              <img
                src={fl1}
                alt=""
                style={{ width: "52px", borderRadius: "50%" }}
              />
            </div>
            <div className="influencer-contact__follower">
              <img
                src={fl2}
                alt=""
                style={{ width: "52px", borderRadius: "50%" }}
              />
            </div>
            <div className="influencer-contact__follower">
              <img
                src={fl3}
                alt=""
                style={{ width: "52px", borderRadius: "50%" }}
              />
            </div>
            <div className="influencer-contact__follower">
              <img
                src={fl4}
                alt=""
                style={{ width: "52px", borderRadius: "50%" }}
              />
            </div>
          </div>
        </div>

        <div className="influencer-contact__item">
          <img src={cover2} alt="" className="influencer-contact__coverImage" />
          <img src={ava2} alt="" className="influencer-contact__avatar" />
          <div className="influencer-contact__name">
            <span>Marne Levine</span>
          </div>
          <div className="influencer-contact__button">
            <span>Follow</span>
          </div>
          <div className="influencer-contact__followers">
            <div className="influencer-contact__follower">
              <img
                src={fl5}
                alt=""
                style={{ width: "52px", borderRadius: "50%" }}
              />
            </div>
            <div className="influencer-contact__follower">
              <img
                src={fl6}
                alt=""
                style={{ width: "52px", borderRadius: "50%" }}
              />
            </div>
            <div className="influencer-contact__follower">
              <img
                src={fl7}
                alt=""
                style={{ width: "52px", borderRadius: "50%" }}
              />
            </div>
            <div className="influencer-contact__follower">
              <img
                src={fl8}
                alt=""
                style={{ width: "52px", borderRadius: "50%" }}
              />
            </div>
          </div>
        </div>

        <div className="influencer-contact__item">
          <img src={cover3} alt="" className="influencer-contact__coverImage" />
          <img src={ava3} alt="" className="influencer-contact__avatar" />
          <div className="influencer-contact__name">
            <span>Johnathan Collins</span>
          </div>
          <div className="influencer-contact__button">
            <span>Follow</span>
          </div>
          <div className="influencer-contact__followers">
            <div className="influencer-contact__follower">
              <img
                src={fl9}
                alt=""
                style={{ width: "52px", borderRadius: "50%" }}
              />
            </div>
            <div className="influencer-contact__follower">
              <img
                src={fl10}
                alt=""
                style={{ width: "52px", borderRadius: "50%" }}
              />
            </div>
            <div className="influencer-contact__follower">
              <img
                src={fl11}
                alt=""
                style={{ width: "52px", borderRadius: "50%" }}
              />
            </div>
            <div className="influencer-contact__follower">
              <img
                src={fl12}
                alt=""
                style={{ width: "52px", borderRadius: "50%" }}
              />
            </div>
          </div>
        </div>
        <div className="influencer-contact__item">
          <img src={cover4} alt="" className="influencer-contact__coverImage" />
          <img src={ava4} alt="" className="influencer-contact__avatar" />
          <div className="influencer-contact__name">
            <span>Melinda Davenport</span>
          </div>
          <div className="influencer-contact__button">
            <span>Follow</span>
          </div>
          <div className="influencer-contact__followers">
            <div className="influencer-contact__follower">
              <img
                src={fl13}
                alt=""
                style={{ width: "52px", borderRadius: "50%" }}
              />
            </div>
            <div className="influencer-contact__follower">
              <img
                src={fl14}
                alt=""
                style={{ width: "52px", borderRadius: "50%" }}
              />
            </div>
            <div className="influencer-contact__follower">
              <img
                src={fl15}
                alt=""
                style={{ width: "52px", borderRadius: "50%" }}
              />
            </div>
            <div className="influencer-contact__follower">
              <img
                src={fl16}
                alt=""
                style={{ width: "52px", borderRadius: "50%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Influencer;
