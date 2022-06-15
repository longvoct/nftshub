import React from "react";
import "./footer.scss";
import twitter from "../../pictures/socialIcon/Twitter.png";
import insta from "../../pictures/socialIcon/Instagram.png";
import discord from "../../pictures/socialIcon/Discord.png";
import reddit from "../../pictures/socialIcon/Reddit.png";
import youtube from "../../pictures/socialIcon/Youtube.png";
import tiktok from "../../pictures/socialIcon/Tiktok.png";
import email from "../../pictures/socialIcon/Email.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-contact">
        <div className="footer-contact__email">
          <span>Stay in the loop</span>
          <p>
            Join our mailing list to stay in the loop with our newest feature
            releases, NFT drops, and tips and tricks for navigating NFTs Hub.
          </p>
          <div className="footer-contact__manipulation">
            <div className="footer-contact__input">
              <input
                type="text"
                name=""
                id=""
                placeHolder="Your email address"
              />
            </div>
            <div>
              <button className="footer-contact__submit">Send</button>
            </div>
          </div>
        </div>
        <div className="footer-contact__social">
          <span>Join the community</span>
          <div className="footer-contact__list">
            <div className="footer-contact__icon">
              <img src={twitter} alt="" className="" />
            </div>
            <div className="footer-contact__icon">
              <img src={insta} alt="" className="" />
            </div>
            <div className="footer-contact__icon">
              <img src={discord} alt="" className="" />
            </div>
            <div className="footer-contact__icon">
              <img src={reddit} alt="" className="" />
            </div>
            <div className="footer-contact__icon">
              <img src={youtube} alt="" className="" />
            </div>
            <div className="footer-contact__icon">
              <img src={tiktok} alt="" className="" />
            </div>
            <div className="footer-contact__icon">
              <img src={email} alt="" className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
