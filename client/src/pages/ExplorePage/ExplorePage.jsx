import "./explorePage.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../pictures/List 1/maleAndroid.png";
import img2 from "../../pictures/List 1/downwardascent.png";
import img3 from "../../pictures/List 1/bite__blue.png";
import img4 from "../../pictures/List 1/lightingoflove.png";
import img5 from "../../pictures/List 1/iceElement.png";
// import img6 from "../../pictures/List 1/Ranni The Witch.png";
import coin from "../../pictures/quality 1.png";
import arrowLeft from "../../pictures/Arrow left.png";
import arrowRight from "../../pictures/Arrow right.png";
import "../../components/Slick-Slide/slickSlide.scss";
import wallet from "../../pictures/Wallet/wallet 1.png";
import openBox from "../../pictures/Wallet/open-box.png";
import nft from "../../pictures/Wallet/nft icon.png";
import clipBoard from "../../pictures/Wallet/clipboard.png";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img src={arrowRight} alt="arrowIcon" style={{ width: "53px" }} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img src={arrowLeft} alt="arrowIcon" style={{ width: "53px" }} />
    </div>
  );
}

function ExplorePage() {
  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "20px",
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div
      // style={{
      //   backgroundColor: "#ddd",
      //   borderRadius: "10px",
      //   padding: "10px",
      // }}
      >
        <ul style={{ margin: "0px", color: "" }}>{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          marginTop: "60px",
          width: "11px",
          height: "11px",
          color: "blue",
          backgroundImage: "linear-gradient(180deg, #0FE3E3 0%, #70AEC8 100%)",
          borderRadius: "999px",
        }}
      >
        {/* {i + 1} */}
      </div>
    ),
  };
  return (
    <div className="explore-page">
      <div className="explore-page__button">
        <span>Explore NFTs</span>
      </div>
      <div
        className="explore-page__slider"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <Slider {...settings}>
          <div className="explore-page__item">
            <div className="explore-page__item-img">
              <img src={img1} alt="" />
              <div className="explore-page__item-title">
                <span>Male Android</span>
                <img
                  src={coin}
                  alt=""
                  className="explore-page__item-coin"
                  style={{ width: "25px", height: "25px" }}
                />
              </div>
              <div className="explore-page__item-buy">
                <span>0.4000 ETH</span>
                <div className="explore-page__item-button">
                  <span>Buy now</span>
                </div>
              </div>
            </div>
          </div>

          <div className="explore-page__item">
            <div className="explore-page__item-img">
              <img src={img2} alt="" />
              <div className="explore-page__item-title">
                <span>Downward Ascent</span>
                <img
                  src={coin}
                  alt=""
                  className="explore-page__item-coin"
                  style={{ width: "25px", height: "25px" }}
                />
              </div>
              <div className="explore-page__item-buy">
                <span>0.4000 ETH</span>
                <div className="explore-page__item-button">
                  <span>Buy now</span>
                </div>
              </div>
            </div>
          </div>

          <div className="explore-page__item">
            <div className="explore-page__item-img">
              <img src={img3} alt="" />
              <div className="explore-page__item-title">
                <span>Bite Blue</span>
                <img
                  src={coin}
                  alt=""
                  className="explore-page__item-coin"
                  style={{ width: "25px", height: "25px" }}
                />
              </div>
              <div className="explore-page__item-buy">
                <span>0.4000 ETH</span>
                <div className="explore-page__item-button">
                  <span>Buy now</span>
                </div>
              </div>
            </div>
          </div>

          <div className="explore-page__item">
            <div className="explore-page__item-img">
              <img src={img4} alt="" />
              <div className="explore-page__item-title">
                <span>The Lighting of Love</span>
                <img
                  src={coin}
                  alt=""
                  className="explore-page__item-coin"
                  style={{ width: "25px", height: "25px" }}
                />
              </div>
              <div className="explore-page__item-buy">
                <span>0.4000 ETH</span>
                <div className="explore-page__item-button">
                  <span>Buy now</span>
                </div>
              </div>
            </div>
          </div>

          <div className="explore-page__item">
            <div className="explore-page__item-img">
              <img src={img5} alt="" />
              <div className="explore-page__item-title">
                <span>Ice Element</span>
                <img
                  src={coin}
                  alt=""
                  className="explore-page__item-coin"
                  style={{ width: "25px", height: "25px" }}
                />
              </div>
              <div className="explore-page__item-buy">
                <span>0.4000 ETH</span>
                <div className="explore-page__item-button">
                  <span>Buy now</span>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="explore-page__item">
            <div className="explore-page__item-img">
              <img src={img6} alt="" />
              <div className="explore-page__item-title">
                <span>Ice Element</span>
                <img
                  src={coin}
                  alt=""
                  className="explore-page__item-coin"
                  style={{ width: "25px", height: "25px" }}
                />
              </div>
              <div className="explore-page__item-buy">
                <span>0.4000 ETH</span>
                <div>Buy now</div>
              </div>
            </div>
          </div> */}
        </Slider>
      </div>
      <div className="explore-page__setup">
        <div
          className="explore-page__setup-step"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <div className="explore-page__setup-image">
            <img src={wallet} alt="" className="" style={{ width: "50px" }} />
          </div>
          <h3>Setup Your Wallet</h3>
          <p>
            Once you have set up your wallet of choice connect it to OpenSea by
            clicking the wallet icon in the top right corner
          </p>
        </div>
        <div className="explore-page__setup-step" data-aos="fade-right">
          <div className="explore-page__setup-image">
            <img src={openBox} alt="" className="" style={{ width: "50px" }} />
          </div>
          <h3>Create Your Collection</h3>
          <p>
            Click My Collections and set up your collection. Add social links, a
            description, profile & banner images, and set a secondary sales fee.
          </p>
        </div>
        <div className="explore-page__setup-step" data-aos="fade-left">
          <div className="explore-page__setup-image">
            <img src={nft} alt="" className="" style={{ width: "50px" }} />
          </div>
          <h3>Add Your NFTs</h3>
          <p>
            Upload your work (image, video, audio, or 3D art), add a title and
            description, and customize your NFTs with properties, stats, and
            unlockable content.
          </p>
        </div>
        <div
          className="explore-page__setup-step"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <div className="explore-page__setup-image">
            <img src={clipBoard} alt="" style={{ width: "50px" }} />
          </div>
          <h3>List Them For Sales</h3>
          <p>
            Choose between auctions, fixed-price listings, and declining-price
            listings. You choose how you want to sell your NFTs, and we help you
            sell them!
          </p>
        </div>
      </div>
    </div>
  );
}

export default ExplorePage;
