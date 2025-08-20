import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "../../Offers/dealOfDay.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdCurrencyRupee } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./onRadar.css";
import axios from "axios";
import toast from "react-hot-toast";
import { NavLink, Link, useNavigate, useParams } from "react-router-dom";
import { getCart } from "./../contextApi/GetCart";

function RecentView() {
  const navigate = useNavigate();
  const params = useParams();
  const [moredata, setMoreData] = useState([]);
  const [likedProducts, setLikedProducts] = useState({});
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [isLastSlide, setIsLastSlide] = useState(false);
  // API
  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = async () => {
    try {
      const result = await axios.get("https://tannis.in/api/wishlist/");
      setMoreData(result?.data?.data);
      console.log(moredata);
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddToCart = async (id, qty) => {
    const token = localStorage.getItem("token");
    const body = { variant: id, qty: qty };
    try {
      const res = await axios.post(
        "https://tannis.in/api/add-to-cart/",
        body,

        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      toast.success("Item Added Successfully");
      console.log(res, "************");
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const NextArrow = ({ onClick }) => (
    <div
      className={`moreLikeArrow moreLikeNext ${
        isLastSlide ? "iconHidden" : ""
      }`}
      onClick={onClick}
    >
      <IoIosArrowForward />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className={`moreLikeArrow moreLikePrev ${
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
    autoplay: false,
    slidesToScroll: 1.5,
    autoplaySpeed: 3000,
    pauseOnHover: true,
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
      setIsLastSlide(next === moredata.length - 4);
    },
  };

  const toggleLike = (id, event) => {
    event.preventDefault();
    setLikedProducts((prevLiked) => ({
      ...prevLiked,
      [id]: !prevLiked[id],
    }));
  };

  return (
    <>
      <div className="container  ">
        {moredata?.length > 0 && (
          <>
            <div className="row ">
              <div className="col-12  my-xl-5 my-lg-5 my-md-3 my-sm-2 my-2">
                <h1 className="homehTag ">Recently Viewed</h1>
              </div>

              <div className="row moreRow">
                <Slider {...settings}>
                  {moredata.length > 0 &&
                    moredata?.map((item, i) => {
                      let {
                        id,
                        product: {
                          img,
                          variant,
                          discount,
                          qty,
                          p_name,
                          brand,
                          mrp,
                        },
                        thumbnail,
                      } = item;

                      return (
                        <NavLink
                          to={`/product-details/${item.id}`}
                          navigate
                          className="d-flex dealCard col-md-4 col-sm-6 col-6 mb-3 "
                        >
                          <div className="card  onRadarCard productCard  border-0 shadow-sm">
                            <div className="iconAbs d-flex justify-content-end align-items-center ">
                              <span
                                className={`heartIcon ${
                                  likedProducts[id] ? "red-heart" : ""
                                }`}
                                onClick={(e) => toggleLike(id, e)}
                              >
                                {likedProducts[id] ? (
                                  <FaHeart className="pFaHeart" />
                                ) : (
                                  <CiHeart />
                                )}
                              </span>
                            </div>
                            <div className="iconRel">
                              <img
                                src={`https://tannis.in${thumbnail}`}
                                className="card-img-top"
                                alt="..."
                              />
                            </div>
                            <div className="card-body">
                              <p className="card-title proTitle">{brand}</p>
                              <h6 className="card-text proText">{p_name}</h6>
                              <h6 className="titilHead">
                                <MdCurrencyRupee />
                                {mrp - discount}
                                <span>
                                  {discount && (
                                    <del className="delProduct">
                                      <MdCurrencyRupee />
                                      {mrp}
                                    </del>
                                  )}
                                  {discount && (
                                    <span className="offdes">
                                      {" "}
                                      ({Math.floor((discount / mrp) * 100)})%
                                    </span>
                                  )}
                                </span>
                              </h6>

                              <p className="offerP4">15ml</p>
                              <button
                                className="proCartBtn hoverButton"
                                onClick={() => handleAddToCart(id, qty)}
                              >
                                Add to Bag
                              </button>
                            </div>
                          </div>
                        </NavLink>
                      );
                    })}
                </Slider>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default RecentView;
