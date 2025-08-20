// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import logo1 from "../../assets/logo1.jpeg";
// import "./footer.css";
// import { FaPlus } from "react-icons/fa";
// import { TiMinus } from "react-icons/ti";
// import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
// import { NavLink, useNavigate } from "react-router-dom";
// import UseMediaQuery from "./../../UseMediaQuery";
// import axios from "axios";
// import { useProductContext } from "../contextApi/ProductContext";
// const Footer = () => {
//   const isMobile = UseMediaQuery("(max-width:486px)");
//   const [activeId, setActiveId] = useState(null);
//   const { setSelectedCategoryId } = useProductContext();
//   const [category, setCategory] = useState([]);
//   const toggleCollapse = (id) => {
//     setActiveId(activeId === id ? null : id);
//   };

//   const getCategory = async () => {
//     try {
//       const res = await axios.get("https://tannis.in/api/categories/");
//       setCategory(res.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getCategory();
//   }, []);

//   const handleCateClick = async (categoryId) => {
//     try {
//       setSelectedCategoryId(categoryId);
//       // navigate(`/${categoryId}`);
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   const faqData = [
//     {
//       id: 1,
//       question: "Tannis",
//       answer: [
//         { name: "Who We Are", link: "/" },
//         { name: "For You", link: "/" },
//         { name: "Tannis Red", link: "/" },
//         { name: "Offers", link: "/" },
//         { name: "Tannis Tribe", link: "/" },
//         { name: "Site Map", link: "/" },
//       ],
//     },
//     {
//       id: 2,
//       question: "Customer Care",
//       answer: [
//         { name: "Help Center", link: "/write-to-us" },
//         { name: "FAQ's", link: "/faq" },
//       ],
//     },
//     {
//       id: 3,
//       question: "Categories",
//       answer: [
//         { name: "MakeUp", link: "/makeup" },
//         { name: "Skin", link: "/skin" },
//         { name: "Hair", link: "/hair" },
//         { name: "Fragrance", link: "/fragrance" },
//         { name: "Bath & Body", link: "/bath-body" },
//         { name: "Tools & Appliances", link: "/tools-appliances" },
//       ],
//     },
//   ];
//   return (
//     <div>
//       <div className="container ">
//         <div className="row">
//           <div className="col-12 d-flex justify-content-center align-items-center flex-column mt-2 mt-xl-4 mt-lg-4 mt-md-3 mt-sm-3 ">
//             <h1 className="text-center footerNav1 mb-3">
//               Be the first to hear about all things Tannis
//             </h1>
//             <p className="text-center footerNav2 mb-3">
//               Stay connected for exclusive offers and latest updates, delivered
//               straight to your inbox
//             </p>
//           </div>
//           <div className="footerIpmain my-3">
//             <div className="input-group d-flex gap-3 footerInput col-lg-6 mb-3">
//               <input
//                 type="text"
//                 className="form-control footerbg"
//                 placeholder="Enter Your Email Address"
//                 aria-label="Recipient's username"
//                 aria-describedby="button-addon2"
//               />
//               <button className="loginBtn" type="button" id="button-addon2">
//                 Send
//               </button>
//             </div>
//           </div>
//         </div>
//         {isMobile ? (
//           <>
//             <div className="row">
//               <div className="col-md-3 ">
//                 <NavLink to="/">
//                   <img src={logo1} className="footerLogo" />
//                 </NavLink>

//                 <p className="footerp my-3">
//                   For every day, for every mood, for every you
//                 </p>
//               </div>
//               <div className="faq-container">
//                 {faqData.map((item) => (
//                   <div
//                     key={item.id}
//                     className="border-bottom border-secondary py-2 py-lg-3"
//                   >
//                     <div
//                       className="d-flex justify-content-between align-items-center px-2"
//                       role="button"
//                       onClick={() => toggleCollapse(item.id)}
//                     >
//                       <h5 className="footerQues">{item.question}</h5>
//                       <h3>
//                         {activeId === item.id ? (
//                           <TiMinus size={15} />
//                         ) : (
//                           <FaPlus size={15} />
//                         )}
//                       </h3>
//                     </div>

//                     {activeId === item.id && (
//                       <div className="row mt-2 px-2">
//                         {item.answer.map((linkItem, index) => (
//                           <div key={index} className="col-6 mb-2">
//                             <Link to={linkItem.link} className="footerFaq">
//                               {linkItem.name}
//                             </Link>
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </>
//         ) : (
//           <>
//             <div className="row">
//               <div className="col-md-3 ">
//                 <img src={logo1} className="footerLogo" />
//                 <p className="footerp my-3">
//                   For every day, for every mood, for every you
//                 </p>
//               </div>
//               <div className="col-md-2 ">
//                 <ul className="footer1ul p-0 d-flex gap-2 flex-column">
//                   <li>
//                     <Link to="/">Tannis</Link>
//                   </li>

//                   <li>
//                     <Link to="/">Who We Are</Link>
//                   </li>
//                   <li>
//                     <Link to="/">For You</Link>
//                   </li>
//                   <li>
//                     <Link to="/">Tannis Red</Link>
//                   </li>
//                   <li>
//                     <Link to="/">Offers</Link>
//                   </li>
//                   <li>
//                     <Link to="/">Tannis Tribe</Link>
//                   </li>
//                   <li>
//                     <Link to="/">Site Map</Link>
//                   </li>
//                 </ul>
//               </div>
//               <div className="col-md-2">
//                 <ul className="footer1ul p-0 d-flex gap-2 flex-column">
//                   <li>
//                     <Link to="/">Customer Care</Link>
//                   </li>

//                   <li>
//                     <Link to="/write-to-us">Help Center</Link>
//                   </li>
//                   <li>
//                     <Link to="/faq">FAQs</Link>
//                   </li>
//                 </ul>
//               </div>
//               <div className="col-md-2">
//                 <ul className="footer1ul p-0 d-flex gap-2 flex-column">
//                   <li>
//                     <Link to="/">Categories</Link>
//                   </li>

//                   {category?.map((item, i) => {
//                     return (
//                       <NavLink to={`/${item.c_name}`}>
//                         <p
//                           className="cardTextp"
//                           onClick={() => handleCateClick(item.id)}
//                         >
//                           {item.c_name}
//                         </p>
//                       </NavLink>
//                     );
//                   })}
//                 </ul>
//               </div>
//               <div className="col-md-3">
//                 <ul className="footer1ull p-0 d-flex gap-2 flex-column">
//                   <li>
//                     <Link to="/contact-us">Contact Us</Link>
//                   </li>
//                   <li>
//                     <Link to="/">
//                       Call: <span className="linkColor">1-800-890-3030</span>
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/">
//                       Whatsapp: <span className="linkColor">79770 90909</span>
//                       <br />
//                       (All days, between 8am-8pm)
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/">
//                       Email:{" "}
//                       <span className="linkColor">help@tannisbeauty.com</span>
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </>
//         )}
//       </div>
//       <div className="container  ">
//         <div className="row">
//           <div className="col-12 horiRowFooter  "></div>
//         </div>
//       </div>
//       <div className="container my-2 my-xl-3 my-lg-3 my-md-2 my-sm-2">
//         <div className="row">
//           <div className="col-md-10 ">
//             <p className="">© 2025 Tannis. All Rights Reserved.</p>
//             <ul className="TfooterEnd p-0">
//               <li>
//                 <Link to="/terms-conditions">Terms & Conditions</Link>
//               </li>
//               <li>
//                 <Link to="/fees-payments">Fees & Payments</Link>
//               </li>
//               <li>
//                 <Link to="/cancel-refund-policy">
//                   Cancellation & Refund Policy
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/private-policy">Privacy Policy</Link>
//               </li>
//               <li>
//                 <Link to="/shipping-delivery-policy">
//                   Shipping & Delivery Policy
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/rewards-policy">Rewards Policy</Link>
//               </li>
//               <li>
//                 <Link to="/promotions-terms-conditions">
//                   Promotions Terms & Conditions
//                 </Link>
//               </li>
//             </ul>
//           </div>
//           <div className="col-md-2 footerIcon ">
//             <ul className=" d-flex justify-content-between align-items-center p-0 gap-3">
//               <li>
//                 <Link to="https://www.facebook.com/login/">
//                   <FaFacebook />
//                 </Link>
//               </li>
//               <li>
//                 {" "}
//                 <Link to="/https://www.instagram.com/accounts/login">
//                   <FaInstagram />
//                 </Link>
//               </li>
//               <li>
//                 {" "}
//                 <Link to="https://x.com/i/flow/login">
//                   <FaTwitter />
//                 </Link>
//               </li>
//               <li>
//                 {" "}
//                 <Link to="https://www.youtube.com/account">
//                   <FaYoutube />
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo1 from "../../assets/logo1.jpeg";
import "./footer.css";
import { FaPlus } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import UseMediaQuery from "./../../UseMediaQuery";
import axios from "axios";
import { useProductContext } from "../contextApi/ProductContext";
const Footer = () => {
  const isMobile = UseMediaQuery("(max-width:486px)");
  const [activeId, setActiveId] = useState(null);
  const { setSelectedCategoryId } = useProductContext();
  const [category, setCategory] = useState([]);
  const toggleCollapse = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  const getCategory = async () => {
    try {
      const res = await axios.get("https://tannis.in/api/categories/");
      setCategory(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  const handleCateClick = async (categoryId) => {
    try {
      setSelectedCategoryId(categoryId);
      // navigate(`/${categoryId}`);
    } catch (err) {
      console.log(err);
    }
  };
  const faqData = [
    {
      id: 1,
      question: "Tannis",
      answer: [
        { name: "Who We Are", link: "/" },
        { name: "For You", link: "/" },
        { name: "Tannis Red", link: "/" },
        { name: "Offers", link: "/" },
        { name: "Tannis Tribe", link: "/" },
        { name: "Site Map", link: "/" },
      ],
    },
    {
      id: 2,
      question: "Customer Care",
      answer: [
        { name: "Help Center", link: "/write-to-us" },
        { name: "FAQ's", link: "/faq" },
      ],
    },
    {
      id: 3,
      question: "Categories",
      answer: [
        { name: "MakeUp", link: "/makeup" },
        { name: "Skin", link: "/skin" },
        { name: "Hair", link: "/hair" },
        { name: "Fragrance", link: "/fragrance" },
        { name: "Bath & Body", link: "/bath-body" },
        { name: "Tools & Appliances", link: "/tools-appliances" },
      ],
    },
  ];
  return (
    <div>
      <div className="container ">
        <div className="row">
          <div className="col-12 d-flex justify-content-center align-items-center flex-column mt-2 mt-xl-4 mt-lg-4 mt-md-3 mt-sm-3 ">
            <h1 className="text-center footerNav1 mb-3">
              Be the first to hear about all things Tannis
            </h1>
            <p className="text-center footerNav2 mb-3">
              Stay connected for exclusive offers and latest updates, delivered
              straight to your inbox
            </p>
          </div>
          <div className="footerIpmain my-3">
            <div className="input-group d-flex gap-3 footerInput col-lg-6 mb-3">
              <input
                type="text"
                className="form-control footerbg"
                placeholder="Enter Your Email Address"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button className="loginBtn" type="button" id="button-addon2">
                Send
              </button>
            </div>
          </div>
        </div>
        {isMobile ? (
          <>
            <div className="row">
              <div className="col-md-3 ">
                <NavLink to="/">
                  <img src={logo1} className="footerLogo" />
                </NavLink>

                <p className="footerp my-3">
                  For every day, for every mood, for every you
                </p>
              </div>
              {/* <div className="faq-container">
                {faqData.map((item) => (
                  <div
                    key={item.id}
                    className="border-bottom border-secondary py-2 py-lg-3"
                  >
                    <div
                      className="d-flex justify-content-between align-items-center px-2"
                      role="button"
                      onClick={() => toggleCollapse(item.id)}
                    >
                      <h5 className="footerQues">{item.question}</h5>
                      <h3>
                        {activeId === item.id ? (
                          <TiMinus size={15} />
                        ) : (
                          <FaPlus size={15} />
                        )}
                      </h3>
                    </div>

                    {activeId === item.id && (
                      <div className="row mt-2 px-2">
                        {item.answer.map((linkItem, index) => (
                          <div key={index} className="col-6 mb-2">
                            <Link to={linkItem.link} className="footerFaq">
                              {linkItem.name}
                            </Link>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div> */}

              <div className="faq-container">
                {faqData.map((item) => (
                  <div
                    key={item.id}
                    className="border-bottom border-secondary py-2 py-lg-3"
                  >
                    <div
                      className="d-flex justify-content-between align-items-center px-2"
                      role="button"
                      onClick={() => toggleCollapse(item.id)}
                    >
                      <h5 className="footerQues">{item.question}</h5>
                      <h3>
                        {activeId === item.id ? (
                          <TiMinus size={15} />
                        ) : (
                          <FaPlus size={15} />
                        )}
                      </h3>
                    </div>

                    {activeId === item.id && (
                      <div className="row mt-2 px-2">
                        {category?.map((cat, i) => (
                          <div key={i} className="col-6 mb-2">
                            <Link
                              to={`/${cat.c_name}`}
                              className="footerFaq"
                              onClick={() => handleCateClick(cat.id)}
                            >
                              {cat.c_name}
                            </Link>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="row">
              <div className="col-md-3 ">
                <img src={logo1} className="footerLogo" />
                <p className="footerp my-3">
                  For every day, for every mood, for every you
                </p>
              </div>
              <div className="col-md-2 ">
                <ul className="footer1ul p-0 d-flex gap-2 flex-column">
                  <li>
                    <Link to="/">Tannis</Link>
                  </li>

                  <li>
                    <Link to="/">Who We Are</Link>
                  </li>
                  <li>
                    <Link to="/">For You</Link>
                  </li>
                  <li>
                    <Link to="/">Tannis Red</Link>
                  </li>
                  <li>
                    <Link to="/">Offers</Link>
                  </li>
                  <li>
                    <Link to="/">Tannis Tribe</Link>
                  </li>
                  <li>
                    <Link to="/">Site Map</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-2">
                <ul className="footer1ul p-0 d-flex gap-2 flex-column">
                  <li>
                    <Link to="/">Customer Care</Link>
                  </li>

                  <li>
                    <Link to="/write-to-us">Help Center</Link>
                  </li>
                  <li>
                    <Link to="/faq">FAQs</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-2">
                <ul className="footer1ul p-0 d-flex gap-2 flex-column">
                  <li>
                    <Link to="/">Categories</Link>
                  </li>

                  {category?.map((item, i) => {
                    return (
                      <NavLink to={`/${item.c_name}`}>
                        <p
                          className="cardTextp"
                          onClick={() => handleCateClick(item.id)}
                        >
                          {item.c_name}
                        </p>
                      </NavLink>
                    );
                  })}
                </ul>
              </div>
              <div className="col-md-3">
                <ul className="footer1ull p-0 d-flex gap-2 flex-column">
                  <li>
                    <Link to="/contact-us">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="/">
                      Call: <span className="linkColor">1-800-890-3030</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      Whatsapp: <span className="linkColor">79770 90909</span>
                      <br />
                      (All days, between 8am-8pm)
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      Email:{" "}
                      <span className="linkColor">help@tannisbeauty.com</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="container  ">
        <div className="row">
          <div className="col-12 horiRowFooter  "></div>
        </div>
      </div>
      <div className="container my-2 my-xl-3 my-lg-3 my-md-2 my-sm-2">
        <div className="row">
          <div className="col-md-10 ">
            <p className="">© 2025 Tannis. All Rights Reserved.</p>
            <ul className="TfooterEnd p-0">
              <li>
                <Link to="/terms-conditions">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/fees-payments">Fees & Payments</Link>
              </li>
              <li>
                <Link to="/cancel-refund-policy">
                  Cancellation & Refund Policy
                </Link>
              </li>
              <li>
                <Link to="/private-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/shipping-delivery-policy">
                  Shipping & Delivery Policy
                </Link>
              </li>
              <li>
                <Link to="/rewards-policy">Rewards Policy</Link>
              </li>
              <li>
                <Link to="/promotions-terms-conditions">
                  Promotions Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-2 footerIcon ">
            <ul className=" d-flex justify-content-between align-items-center p-0 gap-3">
              <li>
                <Link to="https://www.facebook.com/login/">
                  <FaFacebook />
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/https://www.instagram.com/accounts/login">
                  <FaInstagram />
                </Link>
              </li>
              <li>
                {" "}
                <Link to="https://x.com/i/flow/login">
                  <FaTwitter />
                </Link>
              </li>
              <li>
                {" "}
                <Link to="https://www.youtube.com/account">
                  <FaYoutube />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
