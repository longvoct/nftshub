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

      <div className="footer-desc">
        <div className="footer-desc__line"></div>
        <div className="footer-desc__container">
          <div className="footer-desc__left">
            <span>NFTs Hubs</span>
            <p>
              The digital marketplace for crypto collectibles and non-fungible
              tokens (NFTs). Buy, sell, and discover exclusive digital items.
            </p>
          </div>
          <div className="footer-desc__right">
            <div className="footer-desc__menu">
              <span>Marketplace</span>
              <ul className="footer-desc__list">
                <li className="footer-desc__item">All NFTs</li>
                <li className="footer-desc__item">Solana NFTs</li>
                <li className="footer-desc__item">Art</li>
                <li className="footer-desc__item">Collectibles</li>
                <li className="footer-desc__item">Domain Names</li>
                <li className="footer-desc__item">Music</li>
                <li className="footer-desc__item">Photography</li>
                <li className="footer-desc__item">Sports</li>
                <li className="footer-desc__item">Trading Cards</li>
                <li className="footer-desc__item">Utility</li>
                <li className="footer-desc__item">Virtual Worlds</li>
              </ul>
            </div>

            <div className="footer-desc__menu">
              <span>My Account</span>
              <ul className="footer-desc__list">
                <li className="footer-desc__item">Profile</li>
                <li className="footer-desc__item">Favorites</li>
                <li className="footer-desc__item">Watchlist</li>
                <li className="footer-desc__item">My Collections</li>
                <li className="footer-desc__item">Settings</li>
              </ul>
            </div>

            <div className="footer-desc__menu">
              <span>Resources</span>
              <ul className="footer-desc__list">
                <li className="footer-desc__item">Help Center</li>
                <li className="footer-desc__item">Platform Status</li>
                <li className="footer-desc__item">Partners</li>
                <li className="footer-desc__item">Gas-Free Marketplace</li>
                <li className="footer-desc__item">Taxes</li>
                <li className="footer-desc__item">Blog</li>
                <li className="footer-desc__item">Docs</li>
                <li className="footer-desc__item">Newsletter</li>
              </ul>
            </div>

            <div className="footer-desc__menu">
              <span>Company</span>
              <ul className="footer-desc__list">
                <li className="footer-desc__item">About</li>
                <li className="footer-desc__item">Careers</li>
                <li className="footer-desc__item">Ventures</li>
                <li className="footer-desc__item">Grants</li>
              </ul>
            </div>
            <div className="footer-desc__menu">
              <span>Stats</span>
              <ul className="footer-desc__list">
                <li className="footer-desc__item">Rankings</li>
                <li className="footer-desc__item">Activity</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-desc__line"></div>
        <div className="footer-desc__policy">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
