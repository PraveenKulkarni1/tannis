import React from "react";
import Slider from "react-slick";
import "../../Offers/dealOfDay.css";
import "../Pages/tannisTube.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "../Pages/onRadar.css";
import { IoLogoYoutube } from "react-icons/io5";
import { IoLockClosedOutline } from "react-icons/io5";

const videoUrls = [
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
  "https://flutter.github.io/assets-for-api-docs/assets/videos/bee.mp4",
  "https://flutter.github.io/assets-for-api-docs/assets/videos/butterfly.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
];

function SubTannisTube() {
  const [isFirstSlide, setIsFirstSlide] = React.useState(true);
  const [isLastSlide, setIsLastSlide] = React.useState(false);

  const NextArrow = ({ onClick }) => (
    <div
      className={`moreLikeArrow tannisTNext ${isLastSlide ? "iconHidden" : ""}`}
      onClick={onClick}
    >
      <IoIosArrowForward />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className={`moreLikeArrow tannisTPrev ${
        isFirstSlide ? "iconHidden" : ""
      }`}
      onClick={onClick}
    >
      <IoIosArrowBack />
    </div>
  );

  const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1.5,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 486,
        settings: {
          slidesToShow: 1.5,
        },
      },
    ],
    beforeChange: (current, next) => {
      setIsFirstSlide(next === 0);
      setIsLastSlide(next >= videoUrls.length - 4);
    },
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 my-xl-5 my-lg-5 my-md-3 my-sm-2 my-2">
          <h1 className="homehTag text-center">
            Tannis Tube <IoLogoYoutube size={20} />
          </h1>
        </div>

        <div className="row moreRow">
          <Slider {...settings}>
            {videoUrls.map((url, i) => (
              <div
                key={i}
                className="d-flex dealCard tannisRel col-md-4 col-sm-6 col-6 mb-3"
              >
                <div className="card onRadarCard productCard border-0 shadow-sm tannisPos">
                  <div className="iconRel videoWrapper">
                    <video
                      muted
                      preload="metadata"
                      className="card-img-top videoCart"
                      onMouseEnter={async (e) => {
                        try {
                          await e.target.play();
                        } catch (err) {
                          console.warn("Play interrupted:", err);
                        }
                      }}
                      onMouseLeave={(e) => {
                        e.target.pause();
                        e.target.currentTime = 0;
                      }}
                    >
                      <source src={url} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>

                    {/* Absolute Positioned Icon */}
                    <span className="videoLockIcon">
                      <IoLockClosedOutline size={20} />
                    </span>
                    <p className="videoLockText">
                      Beauty Ecommerce in Tannis Tube
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default SubTannisTube;
