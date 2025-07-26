// import React, { useState, useRef } from "react";
// import "./pdtDetail.css";
// import { IoShareSocialOutline } from "react-icons/io5";
// import { FaStar } from "react-icons/fa6";
// import { CiStar } from "react-icons/ci";
// import { Link } from "react-router-dom";
// import { MdCurrencyRupee } from "react-icons/md";
// import { TbCircleDashedPercentage } from "react-icons/tb";
// import { MdKeyboardArrowRight } from "react-icons/md";
// import { CiCircleCheck } from "react-icons/ci";
// import { MdOutlineSwapHorizontalCircle } from "react-icons/md";
// import { CiLocationOn } from "react-icons/ci";
// import { PiSealCheck } from "react-icons/pi";
// import { RiTruckLine } from "react-icons/ri";
// import { IoIosArrowForward } from "react-icons/io";
// import { TbCameraPlus } from "react-icons/tb";
// import { FaCheck } from "react-icons/fa6";
// import Select, { components } from "react-select";
// import shade1 from "../../assets/shade1.avif";
// import shade2 from "../../assets/shade2.avif";
// import shade3 from "../../assets/shade3.avif";
// import shade4 from "../../assets/shade4.avif";
// import shade5 from "../../assets/shade5.avif";
// import shade6 from "../../assets/shade6.avif";
// import shade7 from "../../assets/shade7.avif";
// import shade8 from "../../assets/shade8.avif";
// import shade9 from "../../assets/shade9.avif";
// import shade10 from "../../assets/shade10.avif";
// import shade11 from "../../assets/shade11.avif";

// import { GoDash } from "react-icons/go";
// // modal
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import Modal from "react-bootstrap/Modal";

// import SpecifFea from "./SpecifFea";

// import { FaChevronDown, FaChevronUp } from "react-icons/fa";
// import MoreToLike from "./../SliderPage/MoreToLike";
// const PdtDetail = ({ product }) => {
//   //  Rate and Review modal modal
//   const [showReview, setShowReview] = useState(false);
//   const handleReviewClose = () => setShowReview(false);
//   const handleReviewShow = () => setShowReview(true);

//   const [hoveredStar, setHoveredStar] = useState(-1);
//   const [menuIsOpen, setMenuIsOpen] = useState(false);

//   const [addresses, setAddresses] = useState([
//     {
//       id: 1,
//       houseNo: "#32",
//       buildingName: "Sai",
//       pincode: "400093",

//       city: "Mumbai",
//       state: "Maharastra",
//       name: "Praveen Kulkarni",
//       type: "Home",
//       email: "",
//       country: "India",
//       contact: "7406506051",
//     },
//   ]);
//   const DropdownIndicator = (props) => {
//     return (
//       <components.DropdownIndicator {...props}>
//         {menuIsOpen ? <FaChevronUp /> : <FaChevronDown />}
//       </components.DropdownIndicator>
//     );
//   };
//   const [isHovered, setIsHovered] = useState(false);
//   const totalStars = 5; // Total number of stars

//   //change Location Modal
//   const [showChangeLoc, setShowChangeLoc] = useState(false);
//   const changeLocClose = () => setShowChangeLoc(false);
//   const changeLocShow = () => setShowChangeLoc(true);

//   const [shadeSelect, setShadeSelect] = useState(null);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [sizeSelect, setSizeSelect] = useState(0);

//   const shadeOptions = [
//     {
//       value: "21C Cool lvory",
//       label: "21C Cool lvory",
//       image: shade1,
//     },
//     {
//       value: "23N Sand",
//       label: "23N Sand",
//       image: shade2,
//     },
//     {
//       value: "22C Cool lvory",
//       label: "22C Cool lvory",
//       image: shade3,
//     },
//     {
//       value: "33N Sand",
//       label: "33N Sand",
//       image: shade4,
//     },
//     {
//       value: "11C Cool lvory",
//       label: "11C Cool lvory",
//       image: shade5,
//     },
//     {
//       value: "43N Sand",
//       label: "43N Sand",
//       image: shade6,
//     },
//     {
//       value: "1C Cool lvory",
//       label: "1C Cool lvory",
//       image: shade7,
//     },
//     {
//       value: "N Sand",
//       label: "N Sand",
//       image: shade8,
//     },
//     {
//       value: "C Cool lvory",
//       label: "C Cool lvory",
//       image: shade9,
//     },
//     {
//       value: "55N Sand",
//       label: "55N Sand",
//       image: shade10,
//     },
//     {
//       value: "9N Sand",
//       label: "9N Sand",
//       image: shade11,
//     },
//   ];
//   const fileInputRef = useRef(null);
//   const sizedata = [
//     { size: "20ml" },
//     { size: "25ml" },
//     { size: "30ml" },
//     { size: "35ml" },
//   ];

//   const handleShadeClick = (index) => {
//     setShadeSelect(index);
//     setSelectedOption(shadeOptions[index]);
//   };

//   const handleSelectChange = (option) => {
//     setSelectedOption(option);
//     setShadeSelect(
//       shadeOptions.findIndex((shade) => shade.value === option.value)
//     );
//   };

//   return (
//     <>
//       <div className=" my-5">
//         <p className="pdtSpan">Inde Wild</p>
//         <div className="d-flex justify-content-between">
//           <h6 className="pdtMainTxt">
//             Inde Wild Dewy Lip Treatment <br /> (15ml)
//           </h6>
//           <IoShareSocialOutline className="IoShareIcon" />
//         </div>
//         <div className="d-flex gap-1 my-3">
//           <h6 className="d-flex gap-1 pdtText">
//             4.6<span className="pdtSpan">/5</span>
//             <FaStar className="pdtStar me-2" />
//             <u>
//               <Link to="/" className="pdtText">
//                 35 Ratings
//               </Link>
//             </u>
//             .
//             <u>
//               {" "}
//               <Link to="/" className="pdtText">
//                 Rate this product
//               </Link>
//             </u>
//           </h6>
//         </div>
//         <div className="">
//           <h6 className="pdtHead">
//             <MdCurrencyRupee />
//             719
//             <span>
//               <del className="secpdtHead">
//                 <MdCurrencyRupee />
//                 799{" "}
//               </del>
//               <span className="pdtOffer"> (10% Off)</span>
//             </span>
//           </h6>
//         </div>
//         <p className="pdtSpan">Inclusive Of All Taxes</p>
//         <div className="my-3">
//           <p className="pdtSpan">
//             Sold by :<span className="pdtText"> RELIANCE RETAIL LIMITED</span>
//           </p>
//         </div>
//         <div className="d-flex justify-content-between offerViewBg my-3">
//           <div className="">
//             <p className="offetVp">
//               <TbCircleDashedPercentage className="me-2" size={15} /> 2 Offers
//             </p>
//           </div>
//           <button className="offvBtn">
//             {" "}
//             View All
//             <MdKeyboardArrowRight size={15} className="ms-2" />
//           </button>
//         </div>
//         <div className="my-2">
//           <p className="pdtText my-auto"> Select Shades</p>
//           <Select
//             value={selectedOption}
//             onChange={handleSelectChange}
//             options={shadeOptions}
//             onMenuOpen={() => setMenuIsOpen(true)}
//             onMenuClose={() => setMenuIsOpen(false)}
//             components={{ DropdownIndicator }}
//             getOptionLabel={(e) => (
//               <div className="d-flex gap-2">
//                 <img
//                   src={e?.image}
//                   alt={e?.label}
//                   style={{ width: 22, height: 22, marginRight: 10 }}
//                 />
//                 {e?.label}
//               </div>
//             )}
//           />
//         </div>

//         <div className="shade-images my-2 d-flex flex-wrap gap-2">
//           {shadeOptions?.map((shade, index) => (
//             <div
//               key={index}
//               className="shade-item text-center position-relative"
//               onClick={() => handleShadeClick(index)}
//               style={{ cursor: "pointer" }}
//             >
//               <img
//                 src={shade?.image}
//                 alt={shade?.label}
//                 style={{ width: 30, height: 30 }}
//                 className={`shadeColor ${
//                   shadeSelect === index ? "active" : ""
//                 }`}
//                 onClick={() => setShadeSelect(index)}
//               />
//               {shadeSelect === index && (
//                 <FaCheck
//                   className="checkShade"
//                   style={{
//                     position: "absolute",
//                     top: "50%",
//                     left: "50%",
//                     transform: "translate(-50%, -50%)",
//                     color: "white",
//                     fontSize: "16px",
//                   }}
//                 />
//               )}
//             </div>
//           ))}
//         </div>
//         <p className="pdtText my-auto"> Select Size</p>
//         <div className="d-flex gap-2 my-xl-4 my-lg-4 my-md-3 my-sm-2 my-2">
//           {sizedata?.map((item, i) => (
//             <button
//               key={i}
//               className={`sizeSelect ${sizeSelect === i ? "active" : ""}`}
//               onClick={() => setSizeSelect(i)}
//             >
//               {item.size}
//             </button>
//           ))}
//         </div>
//         <div className="d-flex justify-content-between">
//           <button className="pdtBtn ">Add to Bag</button>
//           <button className="pdtSaveBtn">Save to Wishlist</button>
//         </div>
//         <div className="d-flex justify-content-between my-3">
//           <div className="text-center pdtCheckbg">
//             <p>
//               <PiSealCheck className="pdtcheck" />
//             </p>
//             <p className="cardTextp">Authentic Products</p>
//           </div>
//           <div className="text-center pdtCheckbg">
//             <p>
//               <MdOutlineSwapHorizontalCircle className="pdtcheck" />
//             </p>
//             <p className="cardTextp">Easy Return</p>
//           </div>
//         </div>
//         <div className="pdtdelBorder mb-3">
//           <div className="d-flex justify-content-between my-3 ">
//             <div className="d-flex gap-2">
//               <Link className="pdtDelivery" to="/">
//                 <p className=""> Delivery Options</p>
//               </Link>

//               <Link to="/" className="pdtLocIcon d-flex">
//                 <CiLocationOn className="me-2" />
//                 <span className="pdtText"> 560036</span>
//               </Link>
//             </div>
//             <div className="">
//               <Link className=" pdtText  d-flex" onClick={changeLocShow}>
//                 Change
//                 <IoIosArrowForward className=" " size={20} />
//               </Link>
//             </div>
//           </div>
//           <div className="d-flex pdtFbg">
//             <p className="pdtFree">
//               {" "}
//               <RiTruckLine className="pdtFree  me-2" size={18} />
//               Free develory
//             </p>
//             <p className="pdtGet"> - Get it by Sun, Jan 26</p>
//           </div>
//         </div>
//         <div className="mb-3">
//           <SpecifFea />
//         </div>
//         <div className="offerViewBg  p-2">
//           <h3 className="pdtText p-1" onClick={handleReviewShow}>
//             Rate & Review Product{" "}
//             <MdKeyboardArrowRight size={20} className="me-1" />
//           </h3>

//           <div className="d-flex">
//             {[...Array(totalStars)].map((_, index) => (
//               <span
//                 key={index}
//                 onMouseEnter={() => setHoveredStar(index)}
//                 onMouseLeave={() => setHoveredStar(-1)}
//                 style={{ cursor: "pointer" }}
//               >
//                 {index <= hoveredStar ? (
//                   <FaStar className="pdtFaStar" />
//                 ) : (
//                   <CiStar className="pdtEmpty" />
//                 )}
//               </span>
//             ))}
//           </div>
//         </div>
//         {/* Change Location modal */}
//         <>
//           <Modal show={showChangeLoc} onHide={changeLocClose}>
//             <Modal.Header closeButton>
//               <Modal.Title>Choose your location</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//               <div className="container">
//                 <div className="row">
//                   <div className=" d-flex justify-content-between locModelBg1">
//                     <div className="col-10 d-flex flex-column">
//                       <h4 className="pdtText">
//                         {" "}
//                         <CiLocationOn size={17} className="me-2" />
//                         Location access if off
//                       </h4>
//                       <p className="cardTextp px-3">
//                         Turn it on for a more accurate address and a smoother
//                         delivery experience.
//                       </p>
//                     </div>
//                     <div className="col-2">
//                       {" "}
//                       <IoIosArrowForward className="locIcon1" size={20} />
//                     </div>
//                   </div>
//                   <div className="col-12 my-xl-4 my-lg-4 my-md-3 my-sm-2 my-2">
//                     <h4 className="text-center pdtSpan ">---- OR ----</h4>
//                   </div>
//                   <Form>
//                     <Form.Group
//                       className="pdtSpan mb-3"
//                       controlId="exampleForm.ControlInput1"
//                     >
//                       <Form.Label>Enter Pincode</Form.Label>
//                       <div className="d-flex gap-3 ">
//                         <Form.Control
//                           type="text"
//                           placeholder=""
//                           value="560036"
//                           autoFocus
//                         />
//                         <button className="revSubmit"> Check</button>
//                       </div>
//                       <p className="pdtSpan my-2">
//                         Delivery to:
//                         <span className="pdtCity ">Bengalore</span>
//                       </p>
//                     </Form.Group>
//                   </Form>
//                   <div className="col-12 my-xl-4 my-lg-4 my-md-3 my-sm-2 my-2">
//                     <h4 className="text-center pdtSpan ">---- OR ----</h4>
//                   </div>
//                   <div className="col-12">
//                     <h3 className="pdtSaveAdd">
//                       Select from saved addresses (1)
//                     </h3>

//                     {addresses.map((address) => (
//                       <div
//                         key={address.id}
//                         className="card p-3 shadow-sm mb-2 gap-2 w-100"
//                       >
//                         <div className="d-flex gap-2 flex-start align-items-start">
//                           <input
//                             type="radio"
//                             name="selectedAddress"
//                             className="me-2 mt-1"
//                             style={{ accentColor: "black" }}
//                           />
//                           <div className="col-10">
//                             <h5 className="mb-1 pdtText">
//                               {address.name}{" "}
//                               <span className="copBorder">{address.type}</span>
//                             </h5>

//                             <p className="pdtText m-0 p-0">
//                               {address.houseNo},
//                               <span className="">
//                                 {address.buildingName},{" "}
//                                 <span>{address.city}-</span>
//                                 <span>
//                                   {address.state}
//                                   <GoDash size={18} className="ms-1" />
//                                 </span>
//                               </span>{" "}
//                             </p>
//                             <p className="pdtText my-1">{address.pincode}</p>
//                             <p className="mb-0 pdtText">
//                               Mobile: {address.contact}
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </Modal.Body>

//             <Modal.Footer className="">
//               <Button className="revSubmit " onClick={changeLocClose}>
//                 Conform
//               </Button>
//             </Modal.Footer>
//           </Modal>
//         </>
//         {/* Rate & Review Product modal */}
//         <Modal show={showReview} onHide={handleReviewClose}>
//           <Modal.Header closeButton>
//             <Modal.Title>Write a Review</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <div className="d-flex gap-3">
//               <h1 className="pdtText mt-2">Rate This Prooduct</h1>
//               <div className="d-flex">
//                 {[...Array(totalStars)].map((_, index) => (
//                   <span
//                     key={index}
//                     onMouseEnter={() => setHoveredStar(index)}
//                     onMouseLeave={() => setHoveredStar(-1)}
//                     style={{ cursor: "pointer" }}
//                   >
//                     {index <= hoveredStar ? (
//                       <FaStar className="pdtFaStar" />
//                     ) : (
//                       <CiStar className="pdtEmpty" />
//                     )}
//                   </span>
//                 ))}
//               </div>
//             </div>
//             <Form>
//               <Form.Group
//                 className="mb-3"
//                 controlId="exampleForm.ControlTextarea1"
//               >
//                 <Form.Label>Description</Form.Label>
//                 <Form.Control
//                   as="textarea"
//                   rows={3}
//                   placeholder="Description..."
//                 />
//               </Form.Group>
//               <Form.Group
//                 className="mb-3"
//                 controlId="exampleForm.ControlInput1"
//               >
//                 <Form.Label>Title (optional)</Form.Label>
//                 <Form.Control
//                   type="email"
//                   placeholder="
//                   Review title...
//                   "
//                   autoFocus
//                 />
//               </Form.Group>

//               <input
//                 type="file"
//                 ref={fileInputRef}
//                 style={{ display: "none" }}
//               />
//               <button
//                 type="button"
//                 className="revCamera"
//                 onClick={() => fileInputRef.current?.click()}
//               >
//                 <TbCameraPlus size={20} />
//               </button>
//             </Form>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button className="revSubmit" onClick={handleReviewClose}>
//               Submit
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       </div>
//     </>
//   );
// };

// export default PdtDetail;

import React, { useState, useRef } from "react";
import "./pdtDetail.css";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
import { MdCurrencyRupee } from "react-icons/md";
import { TbCircleDashedPercentage } from "react-icons/tb";
import { MdKeyboardArrowRight } from "react-icons/md";
import { CiCircleCheck } from "react-icons/ci";
import { MdOutlineSwapHorizontalCircle } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { PiSealCheck } from "react-icons/pi";
import { RiTruckLine } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { TbCameraPlus } from "react-icons/tb";
import { FaCheck } from "react-icons/fa6";
import Select, { components } from "react-select";
import shade1 from "../../assets/shade1.avif";
import shade2 from "../../assets/shade2.avif";
import shade3 from "../../assets/shade3.avif";
import shade4 from "../../assets/shade4.avif";
import shade5 from "../../assets/shade5.avif";
import shade6 from "../../assets/shade6.avif";
import shade7 from "../../assets/shade7.avif";
import shade8 from "../../assets/shade8.avif";
import shade9 from "../../assets/shade9.avif";
import shade10 from "../../assets/shade10.avif";
import shade11 from "../../assets/shade11.avif";

import { GoDash } from "react-icons/go";
// modal
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

import SpecifFea from "./SpecifFea";

import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import MoreToLike from "./../SliderPage/MoreToLike";
const PdtDetail = ({ product }) => {
  //  Rate and Review modal modal
  const [showReview, setShowReview] = useState(false);
  const handleReviewClose = () => setShowReview(false);
  const handleReviewShow = () => setShowReview(true);

  const [hoveredStar, setHoveredStar] = useState(-1);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const [addresses, setAddresses] = useState([
    {
      id: 1,
      houseNo: "#32",
      buildingName: "Sai",
      pincode: "400093",

      city: "Mumbai",
      state: "Maharastra",
      name: "Praveen Kulkarni",
      type: "Home",
      email: "",
      country: "India",
      contact: "7406506051",
    },
  ]);
  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        {menuIsOpen ? <FaChevronUp /> : <FaChevronDown />}
      </components.DropdownIndicator>
    );
  };

  const productItem = product?.data;
  // console.log(productItem, "*********");

  const [isHovered, setIsHovered] = useState(false);
  const totalStars = 5; // Total number of stars

  //change Location Modal
  const [showChangeLoc, setShowChangeLoc] = useState(false);
  const changeLocClose = () => setShowChangeLoc(false);
  const changeLocShow = () => setShowChangeLoc(true);

  const [shadeSelect, setShadeSelect] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [sizeSelect, setSizeSelect] = useState(0);

  const shadeOptions = [
    {
      value: "21C Cool lvory",
      label: "21C Cool lvory",
      image: shade1,
    },
    {
      value: "23N Sand",
      label: "23N Sand",
      image: shade2,
    },
    {
      value: "22C Cool lvory",
      label: "22C Cool lvory",
      image: shade3,
    },
    {
      value: "33N Sand",
      label: "33N Sand",
      image: shade4,
    },
    {
      value: "11C Cool lvory",
      label: "11C Cool lvory",
      image: shade5,
    },
    {
      value: "43N Sand",
      label: "43N Sand",
      image: shade6,
    },
    {
      value: "1C Cool lvory",
      label: "1C Cool lvory",
      image: shade7,
    },
    {
      value: "N Sand",
      label: "N Sand",
      image: shade8,
    },
    {
      value: "C Cool lvory",
      label: "C Cool lvory",
      image: shade9,
    },
    {
      value: "55N Sand",
      label: "55N Sand",
      image: shade10,
    },
    {
      value: "9N Sand",
      label: "9N Sand",
      image: shade11,
    },
  ];
  const fileInputRef = useRef(null);
  const sizedata = [
    { size: "20ml" },
    { size: "25ml" },
    { size: "30ml" },
    { size: "35ml" },
  ];

  const handleShadeClick = (index) => {
    setShadeSelect(index);
    setSelectedOption(shadeOptions[index]);
  };

  const handleSelectChange = (option) => {
    setSelectedOption(option);
    setShadeSelect(
      shadeOptions.findIndex((shade) => shade.value === option.value)
    );
  };

  return (
    <>
      <div className=" my-5">
        <p className="pdtSpan">{productItem?.product?.brand}</p>
        <div className="d-flex justify-content-between">
          <h6 className="pdtMainTxt">
            {productItem?.product?.p_name.substring(0, 30)} <br />
          </h6>
          <IoShareSocialOutline className="IoShareIcon" />
        </div>
        <div className="d-flex gap-1 my-3">
          <h6 className="d-flex gap-1 pdtText">
            4.6<span className="pdtSpan">/5</span>
            <FaStar className="pdtStar me-2" />
            <u>
              <Link to="/" className="pdtText">
                35 Ratings
              </Link>
            </u>
            .
            <u>
              {" "}
              <Link to="/" className="pdtText">
                Rate this product
              </Link>
            </u>
          </h6>
        </div>
        <div className="">
          <h6 className="pdtHead">
            <MdCurrencyRupee />
            {productItem?.product?.selling_price}
            <span>
              <del className="secpdtHead">
                <MdCurrencyRupee />
                {productItem?.product?.selling_price}
              </del>
              <span className="pdtOffer">
                {" "}
                ({productItem?.product?.discount}% Off)
              </span>
            </span>
          </h6>
        </div>
        <p className="pdtSpan">Inclusive Of All Taxes</p>
        <div className="my-3">
          <p className="pdtSpan">
            Sold by :<span className="pdtText"> RELIANCE RETAIL LIMITED</span>
          </p>
        </div>
        <div className="d-flex justify-content-between offerViewBg my-3">
          <div className="">
            <p className="offetVp">
              <TbCircleDashedPercentage className="me-2" size={15} /> 2 Offers
            </p>
          </div>
          <button className="offvBtn">
            {" "}
            View All
            <MdKeyboardArrowRight size={15} className="ms-2" />
          </button>
        </div>

        <div className="my-2">
          <p className="pdtText my-auto"> Select Shades</p>
          <Select
            value={selectedOption}
            onChange={handleSelectChange}
            options={shadeOptions}
            onMenuOpen={() => setMenuIsOpen(true)}
            onMenuClose={() => setMenuIsOpen(false)}
            components={{ DropdownIndicator }}
            getOptionLabel={(e) => (
              <div className="d-flex gap-2">
                <img
                  src={e?.image}
                  alt={e?.label}
                  style={{ width: 22, height: 22, marginRight: 10 }}
                />
                {e?.label}
              </div>
            )}
          />
        </div>

        <div className="shade-images my-2 d-flex flex-wrap gap-2">
          {shadeOptions?.map((shade, index) => (
            <div
              key={index}
              className="shade-item text-center position-relative"
              onClick={() => handleShadeClick(index)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={shade?.image}
                alt={shade?.label}
                style={{ width: 30, height: 30 }}
                className={`shadeColor ${
                  shadeSelect === index ? "active" : ""
                }`}
                onClick={() => setShadeSelect(index)}
              />
              {shadeSelect === index && (
                <FaCheck
                  className="checkShade"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    color: "white",
                    fontSize: "16px",
                  }}
                />
              )}
            </div>
          ))}
        </div>
        <p className="pdtText my-auto"> Select Size</p>
        <div className="d-flex gap-2 my-xl-4 my-lg-4 my-md-3 my-sm-2 my-2">
          {sizedata?.map((item, i) => (
            <button
              key={i}
              className={`sizeSelect ${sizeSelect === i ? "active" : ""}`}
              onClick={() => setSizeSelect(i)}
            >
              {item.size}
            </button>
          ))}
        </div>
        <div className="d-flex justify-content-between">
          <button className="pdtBtn ">Add to Bag</button>
          <button className="pdtSaveBtn">Save to Wishlist</button>
        </div>
        <div className="d-flex justify-content-between my-3">
          <div className="text-center pdtCheckbg">
            <p>
              <PiSealCheck className="pdtcheck" />
            </p>
            <p className="cardTextp">Authentic Products</p>
          </div>
          <div className="text-center pdtCheckbg">
            <p>
              <MdOutlineSwapHorizontalCircle className="pdtcheck" />
            </p>
            <p className="cardTextp">Easy Return</p>
          </div>
        </div>
        <div className="pdtdelBorder mb-3">
          <div className="d-flex justify-content-between my-3 ">
            <div className="d-flex gap-2">
              <Link className="pdtDelivery" to="/">
                <p className=""> Delivery Options</p>
              </Link>

              <Link to="/" className="pdtLocIcon d-flex">
                <CiLocationOn className="me-2" />
                <span className="pdtText"> 560036</span>
              </Link>
            </div>
            <div className="">
              <Link className=" pdtText  d-flex" onClick={changeLocShow}>
                Change
                <IoIosArrowForward className=" " size={20} />
              </Link>
            </div>
          </div>
          <div className="d-flex pdtFbg justify-content-between">
            <p className="pdtFree">
              {" "}
              <RiTruckLine className="pdtFree  me-2" size={18} />
              Free develory
            </p>
            {/* {console.log(productItem[0]?.delivery_date, "****")} */}
            <p className="pdtGet"> {productItem?.delivery_date}</p>
          </div>
        </div>
        <div className="mb-3">
          <SpecifFea />
        </div>
        <div className="offerViewBg  p-2">
          <h3 className="pdtText p-1" onClick={handleReviewShow}>
            Rate & Review Product{" "}
            <MdKeyboardArrowRight size={20} className="me-1" />
          </h3>

          <div className="d-flex">
            {[...Array(totalStars)].map((_, index) => (
              <span
                key={index}
                onMouseEnter={() => setHoveredStar(index)}
                onMouseLeave={() => setHoveredStar(-1)}
                style={{ cursor: "pointer" }}
              >
                {index <= hoveredStar ? (
                  <FaStar className="pdtFaStar" />
                ) : (
                  <CiStar className="pdtEmpty" />
                )}
              </span>
            ))}
          </div>
        </div>
        {/* Change Location modal */}
        <>
          <Modal show={showChangeLoc} onHide={changeLocClose}>
            <Modal.Header closeButton>
              <Modal.Title>Choose your location</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="container">
                <div className="row">
                  <div className=" d-flex justify-content-between locModelBg1">
                    <div className="col-10 d-flex flex-column">
                      <h4 className="pdtText">
                        {" "}
                        <CiLocationOn size={17} className="me-2" />
                        Location access if off
                      </h4>
                      <p className="cardTextp px-3">
                        Turn it on for a more accurate address and a smoother
                        delivery experience.
                      </p>
                    </div>
                    <div className="col-2">
                      {" "}
                      <IoIosArrowForward className="locIcon1" size={20} />
                    </div>
                  </div>
                  <div className="col-12 my-xl-4 my-lg-4 my-md-3 my-sm-2 my-2">
                    <h4 className="text-center pdtSpan ">---- OR ----</h4>
                  </div>
                  <Form>
                    <Form.Group
                      className="pdtSpan mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Enter Pincode</Form.Label>
                      <div className="d-flex gap-3 ">
                        <Form.Control
                          type="text"
                          placeholder=""
                          value="560036"
                          autoFocus
                        />
                        <button className="revSubmit"> Check</button>
                      </div>
                      <p className="pdtSpan my-2">
                        Delivery to:
                        <span className="pdtCity ">Bengalore</span>
                      </p>
                    </Form.Group>
                  </Form>
                  <div className="col-12 my-xl-4 my-lg-4 my-md-3 my-sm-2 my-2">
                    <h4 className="text-center pdtSpan ">---- OR ----</h4>
                  </div>
                  <div className="col-12">
                    <h3 className="pdtSaveAdd">
                      Select from saved addresses (1)
                    </h3>

                    {addresses.map((address) => (
                      <div
                        key={address.id}
                        className="card p-3 shadow-sm mb-2 gap-2 w-100"
                      >
                        <div className="d-flex gap-2 flex-start align-items-start">
                          <input
                            type="radio"
                            name="selectedAddress"
                            className="me-2 mt-1"
                            style={{ accentColor: "black" }}
                          />
                          <div className="col-10">
                            <h5 className="mb-1 pdtText">
                              {address.name}{" "}
                              <span className="copBorder">{address.type}</span>
                            </h5>

                            <p className="pdtText m-0 p-0">
                              {address.houseNo},
                              <span className="">
                                {address.buildingName},{" "}
                                <span>{address.city}-</span>
                                <span>
                                  {address.state}
                                  <GoDash size={18} className="ms-1" />
                                </span>
                              </span>{" "}
                            </p>
                            <p className="pdtText my-1">{address.pincode}</p>
                            <p className="mb-0 pdtText">
                              Mobile: {address.contact}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Modal.Body>

            <Modal.Footer className="">
              <Button className="revSubmit " onClick={changeLocClose}>
                Conform
              </Button>
            </Modal.Footer>
          </Modal>
        </>
        {/* Rate & Review Product modal */}
        <Modal show={showReview} onHide={handleReviewClose}>
          <Modal.Header closeButton>
            <Modal.Title>Write a Review</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="d-flex gap-3">
              <h1 className="pdtText mt-2">Rate This Prooduct</h1>
              <div className="d-flex">
                {[...Array(totalStars)].map((_, index) => (
                  <span
                    key={index}
                    onMouseEnter={() => setHoveredStar(index)}
                    onMouseLeave={() => setHoveredStar(-1)}
                    style={{ cursor: "pointer" }}
                  >
                    {index <= hoveredStar ? (
                      <FaStar className="pdtFaStar" />
                    ) : (
                      <CiStar className="pdtEmpty" />
                    )}
                  </span>
                ))}
              </div>
            </div>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Description..."
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Title (optional)</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="
                  Review title...
                  "
                  autoFocus
                />
              </Form.Group>

              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
              />
              <button
                type="button"
                className="revCamera"
                onClick={() => fileInputRef.current?.click()}
              >
                <TbCameraPlus size={20} />
              </button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button className="revSubmit" onClick={handleReviewClose}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default PdtDetail;
