import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Home/topCate.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UseMediaQuery from "./../../UseMediaQuery";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useProductContext } from "../contextApi/ProductContext";

const TopSubCate = () => {
  const [category, setCategory] = useState([]);
  const params = useParams();
  const { setCategoryProducts, selectedCategoryId, setSelectedCategoryId } =
    useProductContext();
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [isLastSlide, setIsLastSlide] = useState(false);
  const isMobile = UseMediaQuery("(max-width:768px)");

  useEffect(() => {
    if (selectedCategoryId) {
      getMidCategory(selectedCategoryId);
    }
  }, [selectedCategoryId]);
  const navigate = useNavigate();
  const NextArrow = ({ onClick }) => (
    <div
      className={`topCArrow topCNext ${isLastSlide ? "iconHidden" : ""}`}
      onClick={onClick}
    >
      <IoIosArrowForward />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className={`topCArrow topCPrev ${isFirstSlide ? "iconHidden" : ""}`}
      onClick={onClick}
    >
      <IoIosArrowBack />
    </div>
  );

  const settings = {
    infinite: false,
    slidesToShow: 5,
    autoplay: false,
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
          slidesToShow: 3.5,
        },
      },
      {
        breakpoint: 486,
        settings: {
          slidesToShow: 3.5,
        },
      },
    ],
    // Update the state when the slider changes
    beforeChange: (current, next) => {
      setIsFirstSlide(next === 0); // First slide
      setIsLastSlide(next === category.length - 3); // Last slide
    },
  };

  //API

  useEffect(() => {
    getMidCategory();
  }, []);

  const getMidCategory = async (id) => {
    try {
      const result = await axios.get(
        `https://tannis.in/api/mid-categories/${id}`
      );
      setCategory(result.data);

      console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  let handleCateClick = async (categoryId) => {
    try {
      const data = await axios
        .get(`https://tannis.in/api/product-by-mid-category/${categoryId}`)
        .then((response) => {
          setCategoryProducts(categoryId, response.data);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {category?.length > 0 && (
        <>
          <div className="container mt-xxl-5 mt-lg-5 mt-md-3 mt-sm-2 mt-4 ">
            <div className="row">
              <h3 className="homehTag  mt-5">Top Categories</h3>
              <div className="  my-xl-3 my-xxl-3 my-lg-3 my-md-3 my-sm-2 my-2 ">
                <Slider {...settings}>
                  {category?.map((item, i) => {
                    return (
                      <div div className="">
                        <NavLink
                          to={`/${item.m_name}/products`}
                          className=" col-2 card topCateCard border-0 d-flex justify-content-between "
                        >
                          <img
                            src={`https://tannis.in${item.image}`}
                            className="card-img-top hcateImg "
                            alt={item.c_name}
                            onClick={() => handleCateClick(item.id)}
                          />
                          <div className="card-body">
                            <p className="cardTextp">{item.m_name}</p>
                          </div>
                        </NavLink>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default TopSubCate;
