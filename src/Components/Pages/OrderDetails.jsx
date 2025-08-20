// import React, { useState, useEffect } from "react";
// import "./cartPage.css";
// import "./orderDetails.css";

// import { MdCurrencyRupee } from "react-icons/md";
// import { RiTruckLine } from "react-icons/ri";
// import { AiOutlineMinus } from "react-icons/ai";
// import { TbCircleDashedPercentage } from "react-icons/tb";
// import { LuPartyPopper } from "react-icons/lu";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { FiPlus } from "react-icons/fi";
// import MoreToLike from "./../SliderPage/MoreToLike";
// import toast from "react-hot-toast";
// import Header2 from "./../Layout/Header2";
// import Footer from "../Layout/Footer";
// import ChangeAddress from "./../../Modal/ChangeAddress";
// import { useNavigate } from "react-router-dom";
// // modal

// import { Modal, Form } from "react-bootstrap";
// import { IoIosArrowForward } from "react-icons/io";
// import { FiEdit } from "react-icons/fi";
// import { IoIosArrowUp } from "react-icons/io";
// // import "./changeAddress.css";
// import UseMediaQuery from "./../../UseMediaQuery";
// import ShipmentDetails from "./../../UserPage/ShipmentDetails";
// function OrderDetails() {
//   const navigate = useNavigate();
//   const isMobile = UseMediaQuery("(max-width:486px)");
//   const [showMainModal, setShowMainModal] = useState(false);
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [isAddingNew, setIsAddingNew] = useState(false);
//   const [selectedAddress, setSelectedAddress] = useState(null);
//   const [houseNo, setHouseNo] = useState("");
//   const [buildingName, setBuildingName] = useState("");
//   const [pincode, setPincode] = useState("");
//   const [city, setCity] = useState("");
//   const [state, setState] = useState("");
//   const [country, setCountry] = useState("");
//   const [fullName, setFullName] = useState("");
//   const [contact, setContact] = useState("");
//   const [email, setEmail] = useState("");
//   const [selectedPlace, setSelectedPlace] = useState(null);
//   const [address, setAddress] = useState([]);
//   const [totalAmount, setTotalAmount] = useState(0);
//   const [defaultAddressId, setDefaultAddressId] = useState(null);
//   //start here

//   const [reviewOrder, setReviewOrder] = useState([]);
//   const getReviewOrder = async () => {
//     let token = localStorage.getItem("token");
//     try {
//       let res = await axios.get("https://tannis.in/api/review-order-details", {
//         headers: {
//           Authorization: `Token ${token}`,
//         },
//       });
//       setReviewOrder(res?.data);

//       if (res?.data?.length > 0 && !selectedAddress) {
//         setSelectedAddress(res?.shipping_address);
//       }
//       setTotalAmount(res?.data?.total_amount);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     getReviewOrder();
//   }, []);

//   // get all Shipting address
//   const getAllAddress = async () => {
//     const token = localStorage.getItem("token");
//     try {
//       const res = await axios.get(
//         "https://tannis.in/api/get-shipping-address/",
//         {
//           headers: {
//             Authorization: `Token ${token}`,
//           },
//         }
//       );
//       setAddress(res?.data);
//       // if (res?.data?.length > 0 && !selectedAddress) {
//       //   setSelectedAddress(res?.data[0]);
//       // }
//       setAddress(res?.data);
//       navigate("/order-details");

//       const def = res.data.find((a) => a.is_default);
//       if (def) setDefaultAddressId(def.id);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getAllAddress();
//   }, []);

//   // handleSubmit and Post all Shipting address
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const token = localStorage.getItem("token");
//       const headers = {
//         Authorization: `Token ${token}`,
//         "Content-Type": "application/json",
//       };

//       const formData = {
//         name: fullName,
//         address1: houseNo,
//         address2: buildingName,
//         pin_code: pincode,
//         city: city,
//         state: state,
//         phone: contact,
//         country: country,
//         type_of_address: selectedPlace,
//         email: email,
//       };

//       const response = await axios.post(
//         "https://tannis.in/api/shipping-address/",
//         formData,
//         { headers }
//       );

//       toast.success("Address saved successfully");

//       // ✅ Close Add Address modal
//       setShowEditModal(false);

//       // ✅ Optional: reopen main modal or go back
//       setShowMainModal(true); // if you want to show the address list modal again
//     } catch (error) {
//       console.error(
//         "Error saving address:",
//         error.response?.data || error.message
//       );
//       toast.error("Failed to save address");
//     }
//   };

//   const handlePincodeChange = async (e) => {
//     const pin = e.target.value;
//     setPincode(pin);

//     if (pin.length === 6) {
//       try {
//         const response = await axios.get(
//           `https://api.postalpincode.in/pincode/${pin}`
//         );
//         const data = response.data[0];

//         if (data.Status === "Success") {
//           const postOffice = data.PostOffice[0];
//           setCity(postOffice.District || "");
//           setState(postOffice.State || "");
//           setCountry("India");
//         } else {
//           console.warn("Invalid Pincode");
//           setCity("");
//           setState("");
//           setCountry("");
//         }
//       } catch (error) {
//         console.error("Error fetching pincode info:", error);
//       }
//     }
//   };

//   const handleEdit = (address) => {
//     setShowMainModal(false);
//     // setFormData(address);
//     setIsAddingNew(false);
//     setTimeout(() => setShowEditModal(true), 300);
//   };

//   const handleAddNew = () => {
//     setIsAddingNew(true); // Indicates it's a new address
//     setShowMainModal(false); // Close the main modal if it's open
//     setTimeout(() => setShowEditModal(true), 300); // Show the edit modal
//   };

//   const handleSelectAddress = (address) => {
//     setSelectedAddress(address);
//     setShowMainModal(false);
//   };

//   //defaultAddress

//   //post Defalu Address
//   const defaultAddress = async (id) => {
//     const token = localStorage.getItem("token");
//     try {
//       let updateData = await axios.patch(
//         `https://tannis.in/api/make-default-shipping-address/${id}`,
//         {},
//         {
//           headers: {
//             Authorization: `Token ${token}`,
//           },
//         }
//       );
//       {
//         getDefalutAddress();
//       }
//       setDefaultAddressId(id);
//       getAllAddress();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   //get Defalu Address

//   const getDefalutAddress = async () => {
//     const token = localStorage.getItem("token");
//     try {
//       let res = await axios.get(
//         "https://tannis.in/api/get-default-shipping-address",
//         {
//           headers: {
//             Authorization: `Token ${token}`,
//           },
//         }
//       );

//       //paused here only
//       setSelectedAddress(res?.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getDefalutAddress();
//   }, []);

//   // Place online order
//   // --- ADD this function (temporary frontend verification) ---
//   const checkPaymentStatus = async (paymentId) => {
//     try {
//       let res = await axios.get(
//         `https://api.razorpay.com/v1/payments/${paymentId}`,
//         {
//           auth: {
//             username: "rzp_test_BzGty5Y8oo9gcQ", // ⚠️ Move this to backend in production
//             password: " HqYibUO9lJLWy7lyKutusWMz",
//           },
//         }
//       );
//       console.log(res.data.status, "**********************");
//       return res.data.status; // "created", "authorized", "captured", "failed"
//     } catch (error) {
//       console.error("Error checking payment status:", error);
//       return "error";
//     }
//   };

//   // --- MODIFY onlineOrder so it accepts status ---
//   const onlineOrder = async (paymentId, status) => {
//     const token = localStorage.getItem("token");
//     const body = {
//       payment_mode: "ONLINE",
//       payment_status:
//         status === "captured" ? "COMPLETED" : status.toUpperCase(),
//       transaction_id: paymentId,
//     };
//     try {
//       let res = await axios.post("https://tannis.in/api/order/", body, {
//         headers: { Authorization: `Token ${token}` },
//       });
//       navigate("/");
//       console.log("Order placed:", res.data);
//       toast.success("Order placed successfully!");
//     } catch (error) {
//       console.log(error);
//       toast.error("Failed to place order");
//     }
//   };

//   // --- MODIFY loadRazorpay handler ---
//   const loadRazorpay = () => {
//     const options = {
//       key: "rzp_test_BzGty5Y8oo9gcQ",
//       amount: totalAmount * 100,
//       currency: "INR",
//       name: "Tannis Store",
//       description: "Order Payment",
//       image: "https://tannis.in/static/logo.png",
//       // handler: async function (response) {
//       //   const paymentId = response.razorpay_payment_id;
//       //   console.log("Payment ID:", paymentId);

//       //   // ✅ Verify status before creating order
//       //   const status = await checkPaymentStatus(paymentId);
//       //   console.log("Verified Payment Status:", status);

//       //   if (status === "captured") {
//       //     onlineOrder(paymentId, status); // COMPLETED
//       //   } else {
//       //     onlineOrder(paymentId, status); // e.g., FAILED / PENDING
//       //   }
//       // },
//       handler: async function (response) {
//         const paymentId = response.razorpay_payment_id;
//         console.log("Payment ID:", paymentId);

//         // 🚫 Don’t call Razorpay API from frontend
//         // ✅ Instead, treat this as successful and mark as COMPLETED
//         onlineOrder(paymentId, "captured");
//       },
//       prefill: {
//         name: "Praveen Kulkarni",
//         email: "praveen@example.com",
//         contact: "9999999999",
//       },
//       theme: { color: "#0d6efd" },
//     };
//     const rzp = new window.Razorpay(options);
//     rzp.open();
//   };

//   const CODOrder = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const body = {
//         payment_mode: "COD",
//         payment_status: "PENDING",
//       };
//       let res = await axios.post("https://tannis.in/api/order/", body, {
//         headers: {
//           Authorization: `Token ${token}`,
//         },
//       });
//       navigate("/");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // User clicked Pay Online
//   const handleOnlinePayment = () => {
//     loadRazorpay(); // ✅ No onlineOrder() call here
//   };

//   return (
//     <>
//       <div className="position-sticky top-0 start-0 z-3 bg-white">
//         <Header2 />
//       </div>
//       <div className="container my-2 my-xl-5 my-lg-5 my-md-3 my-sm-3 orderMain ">
//         <div className="row d-flex gap-3 mx-auto">
//           <div className="col-12">
//             <h3 className="couHead">Review Order Details</h3>
//           </div>

//           <div className="col-md-7 col1BorderOne d-flex flex-column">
//             <div className="card mb-2 border-0">
//               <div className="container">
//                 <div className="row">
//                   <div className="col-12">
//                     <div className="coupenOne p-3">
//                       <div className="d-flex justify-content-between align-items-center">
//                         <h3 className="couHead my-3">Address</h3>

//                         <Link
//                           className="couP1 text-dark my-3 d-flex align-items-center"
//                           onClick={() => setShowMainModal(true)}
//                         >
//                           Change
//                           <IoIosArrowForward
//                             size={15}
//                             className="IoStyle ms-1"
//                           />
//                         </Link>
//                       </div>
//                       {selectedAddress && (
//                         <>
//                           <h3 className="couP1 ">
//                             {selectedAddress?.name}
//                             <span className="copBorder ms-2">
//                               {" "}
//                               {selectedAddress?.type_of_address}
//                             </span>
//                           </h3>
//                           <h3 className="couP3">
//                             {selectedAddress?.address1},
//                             {selectedAddress?.address2}, {selectedAddress?.city}
//                             , {selectedAddress?.state} -{" "}
//                             {selectedAddress?.pin_code}
//                           </h3>
//                           <p className="couP5 mb-0">
//                             Mobile: {selectedAddress?.phone}
//                           </p>
//                         </>
//                       )}
//                       {/**/}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="p-3">
//                 <h3 className="couHead my-2">Expected Delivery</h3>
//                 <p className="couP4">Shipment 1 of 1</p>

//                 <div className="shipBorder">
//                   <div className="d-flex gap-3">
//                     {Object.entries(reviewOrder?.data || {}).map(
//                       ([date, items]) => {
//                         return items.map((item, i) => (
//                           <div
//                             key={item.id}
//                             className="row d-flex justify-content-between"
//                           >
//                             <h3 className=" couP1 my-2">
//                               <RiTruckLine size={20} className="IoStyle me-2" />
//                               <span className="couP1"> Delivery by {date}</span>
//                             </h3>
//                             <img
//                               src={item.thumbnail}
//                               alt={item.p_name}
//                               className="img-fluid shipImg"
//                             />
//                           </div>
//                         ));
//                       }
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="col-md-4 col2BorderTwo p-0">
//             <div className="coupenOne p-2 d-flex justify-content-between">
//               <h3 className="couHead">
//                 <span className="">Payment Method</span>
//               </h3>
//               <h3
//                 className="couP1"
//                 onClick={loadRazorpay}
//                 style={{ cursor: "pointer" }}
//               >
//                 Select <IoIosArrowForward size={15} className="IoStyle" />
//               </h3>
//             </div>
//             <div className="my-3 p-2 coupenOne">
//               <h3 className="couh1">Price Details</h3>
//               <div className="d-flex justify-content-between">
//                 <div>
//                   <h3 className="couP1">Total MRP</h3>
//                   <p className="couP5">Inclusive of All Taxes</p>
//                 </div>
//                 <div className="d-flex justify-content-between align-items-center">
//                   <h3 className="couP1">
//                     {" "}
//                     <MdCurrencyRupee />
//                     {reviewOrder?.total_mrp}
//                   </h3>
//                 </div>
//               </div>
//               <div className="d-flex justify-content-between">
//                 <h4 className="couP1">Subtotal</h4>
//                 <h4 className="couP1">
//                   {" "}
//                   <MdCurrencyRupee />
//                   {reviewOrder?.total_mrp}
//                 </h4>
//               </div>
//             </div>
//             <div className="coupenOne p-2">
//               <div className="d-flex justify-content-between">
//                 <h4 className="couh1">Total</h4>
//                 <h4 className="couh1">
//                   {" "}
//                   <MdCurrencyRupee />
//                   {reviewOrder?.total_amount}
//                 </h4>
//               </div>
//             </div>

//             {isMobile ? (
//               <>
//                 <div className="container ">
//                   <div className="row userOnlineFixed">
//                     <div className="col-12">
//                       {" "}
//                       <h3 className="couSave mb-2">
//                         Woohoo! You save <MdCurrencyRupee /> 200 on this order.
//                       </h3>
//                     </div>
//                     <div className="col-6">
//                       <p className="totalPayP">
//                         Total Amount <IoIosArrowUp />
//                       </p>
//                       <h3 className="totalPayh1">
//                         <MdCurrencyRupee />
//                         {reviewOrder?.total_amount}
//                         <span className="totalPayh2">
//                           <del>
//                             {" "}
//                             <MdCurrencyRupee />
//                             {reviewOrder?.total_mrp}
//                           </del>
//                         </span>
//                       </h3>
//                     </div>

//                     <div className="col-3 mt-3">
//                       <div className="">
//                         <button
//                           className="couCheckOut d-flex justify-content-center align-items-center"
//                           onClick={handleOnlinePayment}
//                         >
//                           Pay Online
//                         </button>
//                       </div>
//                     </div>
//                     <div className="col-3 mt-3">
//                       <div className="">
//                         <Link
//                           to="/"
//                           className="couCheckOut d-flex justify-content-center align-items-center"
//                           onClick={CODOrder}
//                         >
//                           Cash on Delievry
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </>
//             ) : (
//               <>
//                 <h3 className="couSave mb-2">
//                   Woohoo! You save <MdCurrencyRupee />{" "}
//                   {reviewOrder?.total_discount} on this order.
//                 </h3>

//                 <div className="row my-2 ms-2 ">
//                   <div className="col-5 mt-3 payObtn ">
//                     <div className="">
//                       <button
//                         className="couCheckOut d-flex justify-content-center align-items-center"
//                         onClick={handleOnlinePayment}
//                       >
//                         Pay Online
//                       </button>
//                     </div>
//                   </div>
//                   <div className="col-7 mt-3 payObtn">
//                     <div className=" ">
//                       <button
//                         className="couCheckOut d-flex justify-content-center align-items-center "
//                         onClick={CODOrder}
//                       >
//                         Cash on Delievry
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//       <div className="container">
//         <div className="row">
//           <div className="col-12">
//             {" "}
//             <div className="coupenOne"></div>
//           </div>
//         </div>
//       </div>

//       <Modal
//         show={showMainModal}
//         onHide={() => setShowMainModal(false)}
//         end
//         dialogClassName="right-side-modal"
//         scrollable
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>Change Address</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {address?.map((address) => (
//             <div
//               key={address.id}
//               className=" p-3 shadow-sm  my-4 d-flex justify-content-between"
//             >
//               <div className="d-flex gap-2 flex-start align-items-start">
//                 <Form.Check
//                   type="radio"
//                   name="selectedAddress"
//                   checked={selectedAddress?.id === address.id}
//                   onChange={() => handleSelectAddress(address)}
//                   style={{ accentColor: "black" }}
//                 />
//                 <div className="flex-grow-2">
//                   <h5 className="couP1">
//                     {address.name}{" "}
//                     <span className="copBorder">{address.type_of_address}</span>
//                   </h5>

//                   <p className="storeData m-0">
//                     {address.address1}{" "}
//                     <span>
//                       {address.address2} {address.city}, {address.state} -{" "}
//                       {address.pin_code}{" "}
//                     </span>
//                   </p>

//                   <p className="mb-0">Mobile: {address.phone}</p>
//                 </div>

//                 <FiEdit
//                   size={20}
//                   onClick={() => handleEdit(address)}
//                   className="ms-2"
//                 />
//               </div>

//               <div key={address.id} className="mb-3 p-2 rounded">
//                 {address.id === defaultAddressId ? (
//                   <p className="defaultBtn">Default</p>
//                 ) : (
//                   <button
//                     className="setBefaultBtn"
//                     onClick={() => defaultAddress(address.id)}
//                   >
//                     Set as Default
//                   </button>
//                 )}
//               </div>
//             </div>
//           ))}
//         </Modal.Body>
//         <Modal.Footer>
//           <button className="mt-3 couCheckOut mx-auto" onClick={handleAddNew}>
//             + Add New Address
//           </button>
//         </Modal.Footer>
//       </Modal>

//       <Modal
//         show={showEditModal}
//         onHide={() => setShowEditModal(false)}
//         centered
//         dialogClassName="right-side-modal"
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>
//             {isAddingNew ? "Add New Address" : "Edit Address"}
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form onSubmit={handleSubmit} className="formAddreess">
//             <Form.Group className="mb-3">
//               <Form.Label className="modelFLabel">
//                 {" "}
//                 Flat No/House No/Building No
//                 <span className="proErr">*</span>
//               </Form.Label>
//               <Form.Control
//                 type="text"
//                 name="houseNo"
//                 value={houseNo}
//                 onChange={(e) => setHouseNo(e.target.value)}
//                 required
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label className="modelFLabel">Address Type</Form.Label>

//               <div className="gender-container mb-3">
//                 <button
//                   type="button"
//                   className={`gender-button ${
//                     selectedPlace === "Home" ? "active" : ""
//                   }`}
//                   onClick={() => setSelectedPlace("Home")}
//                 >
//                   Home
//                 </button>
//                 <button
//                   type="button"
//                   className={`gender-button ${
//                     selectedPlace === "Work" ? "active" : ""
//                   }`}
//                   onClick={() => setSelectedPlace("Work")}
//                 >
//                   Work
//                 </button>
//                 <button
//                   type="button"
//                   className={`gender-button ${
//                     selectedPlace === "Other" ? "active" : ""
//                   }`}
//                   onClick={() => setSelectedPlace("Other")}
//                 >
//                   Other
//                 </button>
//               </div>
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label className="modelFLabel">
//                 {" "}
//                 Building Name/Street/Society
//                 <span className="proErr">*</span>
//               </Form.Label>
//               <Form.Control
//                 type="text"
//                 name="buildingName"
//                 value={buildingName}
//                 onChange={(e) => setBuildingName(e.target.value)}
//                 required
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label className="modelFLabel">
//                 {" "}
//                 Pincode
//                 <span className="proErr">*</span>
//               </Form.Label>
//               <Form.Control
//                 type="text"
//                 name="pincode"
//                 value={pincode}
//                 onChange={handlePincodeChange}
//                 required
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label className="modelFLabel">
//                 {" "}
//                 City
//                 <span className="proErr">*</span>
//               </Form.Label>
//               <Form.Control
//                 type="text"
//                 name="city"
//                 value={city}
//                 onChange={(e) => setCity(e.target.value)}
//                 required
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label className="modelFLabel">
//                 State
//                 <span className="proErr">*</span>
//               </Form.Label>
//               <Form.Control
//                 type="text"
//                 name="state"
//                 value={state}
//                 onChange={(e) => setState(e.target.value)}
//                 required
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label className="modelFLabel">
//                 {" "}
//                 Country
//                 <span className="proErr">*</span>
//               </Form.Label>
//               <Form.Control
//                 type="text"
//                 name="country"
//                 value={country}
//                 onChange={(e) => setCountry(e.target.value)}
//                 required
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label className="modelFLabel">
//                 {" "}
//                 Fullname
//                 <span className="proErr">*</span>
//               </Form.Label>
//               <Form.Control
//                 type="text"
//                 name="name"
//                 value={fullName}
//                 onChange={(e) => setFullName(e.target.value)}
//                 required
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label className="modelFLabel">
//                 {" "}
//                 Contact
//                 <span className="proErr">*</span>
//               </Form.Label>
//               <Form.Control
//                 type="text"
//                 name="contact"
//                 value={contact}
//                 onChange={(e) => setContact(e.target.value)}
//                 required
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label className="modelFLabel"> Email(optional)</Form.Label>
//               <Form.Control
//                 type="email"
//                 name="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </Form.Group>{" "}
//             <Modal.Footer>
//               <button type="submit" className="couCheckOut mx-auto">
//                 {isAddingNew ? "Add Address" : "Save Changes"}
//               </button>
//             </Modal.Footer>
//           </Form>
//         </Modal.Body>
//       </Modal>
//       <Footer />
//     </>
//   );
// }

// export default OrderDetails;

import React, { useState, useEffect } from "react";
import "./cartPage.css";
import "./orderDetails.css";

import { MdCurrencyRupee } from "react-icons/md";
import { RiTruckLine } from "react-icons/ri";
import { AiOutlineMinus } from "react-icons/ai";
import { TbCircleDashedPercentage } from "react-icons/tb";
import { LuPartyPopper } from "react-icons/lu";
import { Link } from "react-router-dom";
import axios from "axios";
import { FiPlus } from "react-icons/fi";
import MoreToLike from "./../SliderPage/MoreToLike";
import toast from "react-hot-toast";
import Header2 from "./../Layout/Header2";
import Footer from "../Layout/Footer";
import ChangeAddress from "./../../Modal/ChangeAddress";
import { useNavigate } from "react-router-dom";
// modal

import { Modal, Form } from "react-bootstrap";
import { IoIosArrowForward } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { IoIosArrowUp } from "react-icons/io";
// import "./changeAddress.css";
import UseMediaQuery from "./../../UseMediaQuery";
import ShipmentDetails from "./../../UserPage/ShipmentDetails";
function OrderDetails() {
  const navigate = useNavigate();
  const isMobile = UseMediaQuery("(max-width:486px)");
  const [showMainModal, setShowMainModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [houseNo, setHouseNo] = useState("");
  const [buildingName, setBuildingName] = useState("");
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [fullName, setFullName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [address, setAddress] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [defaultAddressId, setDefaultAddressId] = useState(null);
  //start here

  const [reviewOrder, setReviewOrder] = useState([]);
  const getReviewOrder = async () => {
    let token = localStorage.getItem("token");
    try {
      let res = await axios.get("https://tannis.in/api/review-order-details", {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      setReviewOrder(res?.data);

      // if (res?.data?.length > 0 && !selectedAddress) {
      //   setSelectedAddress(res?.shipping_address);
      // }
      setTotalAmount(res?.data?.total_amount);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getReviewOrder();
  }, []);

  // get all Shipting address
  const getAllAddress = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get(
        "https://tannis.in/api/get-shipping-address/",
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      setAddress(res?.data);
      if (res?.data?.length > 0 && !selectedAddress) {
        setSelectedAddress(res?.data[0]);
      }
      setAddress(res?.data);
      navigate("/order-details");

      const def = res.data.find((a) => a.is_default);
      if (def) setDefaultAddressId(def.id);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllAddress();
  }, []);

  // handleSubmit and Post all Shipting address
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json",
      };

      const formData = {
        name: fullName,
        address1: houseNo,
        address2: buildingName,
        pin_code: pincode,
        city: city,
        state: state,
        phone: contact,
        country: country,
        type_of_address: selectedPlace,
        email: email,
      };

      const response = await axios.post(
        "https://tannis.in/api/shipping-address/",
        formData,
        { headers }
      );

      toast.success("Address saved successfully");

      // ✅ Close Add Address modal
      setShowEditModal(false);

      // ✅ Optional: reopen main modal or go back
      setShowMainModal(true); // if you want to show the address list modal again
    } catch (error) {
      console.error(
        "Error saving address:",
        error.response?.data || error.message
      );
      toast.error("Failed to save address");
    }
  };

  const handlePincodeChange = async (e) => {
    const pin = e.target.value;
    setPincode(pin);

    if (pin.length === 6) {
      try {
        const response = await axios.get(
          `https://api.postalpincode.in/pincode/${pin}`
        );
        const data = response.data[0];

        if (data.Status === "Success") {
          const postOffice = data.PostOffice[0];
          setCity(postOffice.District || "");
          setState(postOffice.State || "");
          setCountry("India");
        } else {
          console.warn("Invalid Pincode");
          setCity("");
          setState("");
          setCountry("");
        }
      } catch (error) {
        console.error("Error fetching pincode info:", error);
      }
    }
  };

  const handleEdit = (address) => {
    setShowMainModal(false);
    // setFormData(address);
    setIsAddingNew(false);
    setTimeout(() => setShowEditModal(true), 300);
  };

  const handleAddNew = () => {
    setIsAddingNew(true); // Indicates it's a new address
    setShowMainModal(false); // Close the main modal if it's open
    setTimeout(() => setShowEditModal(true), 300); // Show the edit modal
  };

  useEffect(() => {
    const savedAddress = localStorage.getItem("selectedAddress");
    if (savedAddress) {
      setSelectedAddress(JSON.parse(savedAddress));
      console.log(JSON.parse(savedAddress), "JSON.parse(savedAddress)");
    }
  }, []);
  const handleSelectAddress = (address) => {
    setSelectedAddress(address);
    setShowMainModal(false);
  };

  //defaultAddress

  //post Defalu Address
  const defaultAddress = async (id) => {
    const token = localStorage.getItem("token");
    try {
      let updateData = await axios.patch(
        `https://tannis.in/api/make-default-shipping-address/${id}`,
        {},
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      {
        getDefalutAddress();
      }
      setDefaultAddressId(id);
      getAllAddress();
    } catch (error) {
      console.error(error);
    }
  };

  //get Defalu Address

  const getDefalutAddress = async () => {
    const token = localStorage.getItem("token");
    try {
      let res = await axios.get(
        "https://tannis.in/api/get-default-shipping-address",
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      //paused here only
      setSelectedAddress(res?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDefalutAddress();
  }, []);

  // Place online order
  // --- ADD this function (temporary frontend verification) ---
  const checkPaymentStatus = async (paymentId) => {
    try {
      let res = await axios.get(
        `https://api.razorpay.com/v1/payments/${paymentId}`,
        {
          auth: {
            username: "rzp_test_BzGty5Y8oo9gcQ", // ⚠️ Move this to backend in production
            password: " HqYibUO9lJLWy7lyKutusWMz",
          },
        }
      );
      console.log(res.data.status, "**********************");
      return res.data.status; // "created", "authorized", "captured", "failed"
    } catch (error) {
      console.error("Error checking payment status:", error);
      return "error";
    }
  };

  // --- MODIFY onlineOrder so it accepts status ---
  const onlineOrder = async (paymentId, status) => {
    const token = localStorage.getItem("token");
    const body = {
      payment_mode: "ONLINE",
      payment_status:
        status === "captured" ? "COMPLETED" : status.toUpperCase(),
      transaction_id: paymentId,
    };
    try {
      let res = await axios.post("https://tannis.in/api/order/", body, {
        headers: { Authorization: `Token ${token}` },
      });
      navigate("/");
      console.log("Order placed:", res.data);
      toast.success("Order placed successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Failed to place order");
    }
  };

  // --- MODIFY loadRazorpay handler ---
  const loadRazorpay = () => {
    const options = {
      key: "rzp_test_BzGty5Y8oo9gcQ",
      amount: totalAmount * 100,
      currency: "INR",
      name: "Tannis Store",
      description: "Order Payment",
      image: "https://tannis.in/static/logo.png",
      // handler: async function (response) {
      //   const paymentId = response.razorpay_payment_id;
      //   console.log("Payment ID:", paymentId);

      //   // ✅ Verify status before creating order
      //   const status = await checkPaymentStatus(paymentId);
      //   console.log("Verified Payment Status:", status);

      //   if (status === "captured") {
      //     onlineOrder(paymentId, status); // COMPLETED
      //   } else {
      //     onlineOrder(paymentId, status); // e.g., FAILED / PENDING
      //   }
      // },
      handler: async function (response) {
        const paymentId = response.razorpay_payment_id;
        console.log("Payment ID:", paymentId);

        // 🚫 Don’t call Razorpay API from frontend
        // ✅ Instead, treat this as successful and mark as COMPLETED
        onlineOrder(paymentId, "captured");
      },
      prefill: {
        name: "Praveen Kulkarni",
        email: "praveen@example.com",
        contact: "9999999999",
      },
      theme: { color: "#0d6efd" },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const CODOrder = async () => {
    try {
      const token = localStorage.getItem("token");
      const body = {
        payment_mode: "COD",
        payment_status: "PENDING",
      };
      let res = await axios.post("https://tannis.in/api/order/", body, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  // User clicked Pay Online
  const handleOnlinePayment = () => {
    loadRazorpay(); // ✅ No onlineOrder() call here
  };

  return (
    <>
      <div className="position-sticky top-0 start-0 z-3 bg-white">
        <Header2 />
      </div>
      <div className="container my-2 my-xl-5 my-lg-5 my-md-3 my-sm-3 orderMain ">
        <div className="row d-flex gap-3 mx-auto">
          <div className="col-12">
            <h3 className="couHead">Review Order Details</h3>
          </div>

          <div className="col-md-7 col1BorderOne d-flex flex-column">
            <div className="card mb-2 border-0">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="coupenOne p-3">
                      <div className="d-flex justify-content-between align-items-center">
                        <h3 className="couHead my-3">Address</h3>

                        <Link
                          className="couP1 text-dark my-3 d-flex align-items-center"
                          onClick={() => setShowMainModal(true)}
                        >
                          Change
                          <IoIosArrowForward
                            size={15}
                            className="IoStyle ms-1"
                          />
                        </Link>
                      </div>
                      {selectedAddress && (
                        <>
                          <h3 className="couP1 ">
                            {selectedAddress?.name}
                            <span className="copBorder ms-2">
                              {" "}
                              {selectedAddress?.type_of_address}
                            </span>
                          </h3>
                          <h3 className="couP3">
                            {selectedAddress?.address1},
                            {selectedAddress?.address2}, {selectedAddress?.city}
                            , {selectedAddress?.state} -{" "}
                            {selectedAddress?.pin_code}
                          </h3>
                          <p className="couP5 mb-0">
                            Mobile: {selectedAddress?.phone}
                          </p>
                        </>
                      )}
                      {/**/}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-3">
                <h3 className="couHead my-2">Expected Delivery</h3>
                <p className="couP4">Shipment 1 of 1</p>

                <div className="shipBorder">
                  <div className="d-flex gap-3">
                    {Object.entries(reviewOrder?.data || {}).map(
                      ([date, items]) => {
                        return items.map((item, i) => (
                          <div
                            key={item.id}
                            className="row d-flex justify-content-between"
                          >
                            <h3 className=" couP1 my-2">
                              <RiTruckLine size={20} className="IoStyle me-2" />
                              <span className="couP1"> Delivery by {date}</span>
                            </h3>
                            <img
                              src={item.thumbnail}
                              alt={item.p_name}
                              className="img-fluid shipImg"
                            />
                          </div>
                        ));
                      }
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 col2BorderTwo p-0">
            <div className="coupenOne p-2 d-flex justify-content-between">
              <h3 className="couHead">
                <span className="">Payment Method</span>
              </h3>
              <h3
                className="couP1"
                onClick={loadRazorpay}
                style={{ cursor: "pointer" }}
              >
                Select <IoIosArrowForward size={15} className="IoStyle" />
              </h3>
            </div>
            <div className="my-3 p-2 coupenOne">
              <h3 className="couh1">Price Details</h3>
              <div className="d-flex justify-content-between">
                <div>
                  <h3 className="couP1">Total MRP</h3>
                  <p className="couP5">Inclusive of All Taxes</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <h3 className="couP1">
                    {" "}
                    <MdCurrencyRupee />
                    {reviewOrder?.total_mrp}
                  </h3>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <h4 className="couP1">Subtotal</h4>
                <h4 className="couP1">
                  {" "}
                  <MdCurrencyRupee />
                  {reviewOrder?.total_mrp}
                </h4>
              </div>
            </div>
            <div className="coupenOne p-2">
              <div className="d-flex justify-content-between">
                <h4 className="couh1">Total</h4>
                <h4 className="couh1">
                  {" "}
                  <MdCurrencyRupee />
                  {reviewOrder?.total_amount}
                </h4>
              </div>
            </div>

            {isMobile ? (
              <>
                <div className="container ">
                  <div className="row userOnlineFixed">
                    <div className="col-12">
                      {" "}
                      <h3 className="couSave mb-2">
                        Woohoo! You save <MdCurrencyRupee /> 200 on this order.
                      </h3>
                    </div>
                    <div className="col-6">
                      <p className="totalPayP">
                        Total Amount <IoIosArrowUp />
                      </p>
                      <h3 className="totalPayh1">
                        <MdCurrencyRupee />
                        {reviewOrder?.total_amount}
                        <span className="totalPayh2">
                          <del>
                            {" "}
                            <MdCurrencyRupee />
                            {reviewOrder?.total_mrp}
                          </del>
                        </span>
                      </h3>
                    </div>

                    <div className="col-3 mt-3">
                      <div className="">
                        <button
                          className="couCheckOut d-flex justify-content-center align-items-center"
                          onClick={handleOnlinePayment}
                        >
                          Pay Online
                        </button>
                      </div>
                    </div>
                    <div className="col-3 mt-3">
                      <div className="">
                        <Link
                          to="/"
                          className="couCheckOut d-flex justify-content-center align-items-center"
                          onClick={CODOrder}
                        >
                          Cash on Delievry
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <h3 className="couSave mb-2">
                  Woohoo! You save <MdCurrencyRupee />{" "}
                  {reviewOrder?.total_discount} on this order.
                </h3>

                <div className="row my-2 ms-2 ">
                  <div className="col-5 mt-3 payObtn ">
                    <div className="">
                      <button
                        className="couCheckOut d-flex justify-content-center align-items-center"
                        onClick={handleOnlinePayment}
                      >
                        Pay Online
                      </button>
                    </div>
                  </div>
                  <div className="col-7 mt-3 payObtn">
                    <div className=" ">
                      <button
                        className="couCheckOut d-flex justify-content-center align-items-center "
                        onClick={CODOrder}
                      >
                        Cash on Delievry
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            {" "}
            <div className="coupenOne"></div>
          </div>
        </div>
      </div>

      <Modal
        show={showMainModal}
        onHide={() => setShowMainModal(false)}
        end
        dialogClassName="right-side-modal"
        scrollable
      >
        <Modal.Header closeButton>
          <Modal.Title>Change Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {address?.map((address) => (
            <div
              key={address.id}
              className=" p-3 shadow-sm  my-4 d-flex justify-content-between"
            >
              <div className="d-flex gap-2 flex-start align-items-start">
                <Form.Check
                  type="radio"
                  name="selectedAddress"
                  checked={selectedAddress?.id === address.id}
                  onChange={() => handleSelectAddress(address)}
                  style={{ accentColor: "black" }}
                />
                <div className="flex-grow-2">
                  <h5 className="couP1">
                    {address.name}{" "}
                    <span className="copBorder">{address.type_of_address}</span>
                  </h5>

                  <p className="storeData m-0">
                    {address.address1}{" "}
                    <span>
                      {address.address2} {address.city}, {address.state} -{" "}
                      {address.pin_code}{" "}
                    </span>
                  </p>

                  <p className="mb-0">Mobile: {address.phone}</p>
                </div>

                <FiEdit
                  size={20}
                  onClick={() => handleEdit(address)}
                  className="ms-2"
                />
              </div>

              <div key={address.id} className="mb-3 p-2 rounded">
                {address.id === defaultAddressId ? (
                  <p className="defaultBtn">Default</p>
                ) : (
                  <button
                    className="setBefaultBtn"
                    onClick={() => defaultAddress(address.id)}
                  >
                    Set as Default
                  </button>
                )}
              </div>
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <button className="mt-3 couCheckOut mx-auto" onClick={handleAddNew}>
            + Add New Address
          </button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showEditModal}
        onHide={() => setShowEditModal(false)}
        centered
        dialogClassName="right-side-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {isAddingNew ? "Add New Address" : "Edit Address"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit} className="formAddreess">
            <Form.Group className="mb-3">
              <Form.Label className="modelFLabel">
                {" "}
                Flat No/House No/Building No
                <span className="proErr">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="houseNo"
                value={houseNo}
                onChange={(e) => setHouseNo(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="modelFLabel">Address Type</Form.Label>

              <div className="gender-container mb-3">
                <button
                  type="button"
                  className={`gender-button ${
                    selectedPlace === "Home" ? "active" : ""
                  }`}
                  onClick={() => setSelectedPlace("Home")}
                >
                  Home
                </button>
                <button
                  type="button"
                  className={`gender-button ${
                    selectedPlace === "Work" ? "active" : ""
                  }`}
                  onClick={() => setSelectedPlace("Work")}
                >
                  Work
                </button>
                <button
                  type="button"
                  className={`gender-button ${
                    selectedPlace === "Other" ? "active" : ""
                  }`}
                  onClick={() => setSelectedPlace("Other")}
                >
                  Other
                </button>
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="modelFLabel">
                {" "}
                Building Name/Street/Society
                <span className="proErr">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="buildingName"
                value={buildingName}
                onChange={(e) => setBuildingName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="modelFLabel">
                {" "}
                Pincode
                <span className="proErr">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="pincode"
                value={pincode}
                onChange={handlePincodeChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="modelFLabel">
                {" "}
                City
                <span className="proErr">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="modelFLabel">
                State
                <span className="proErr">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="modelFLabel">
                {" "}
                Country
                <span className="proErr">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="modelFLabel">
                {" "}
                Fullname
                <span className="proErr">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="modelFLabel">
                {" "}
                Contact
                <span className="proErr">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="modelFLabel"> Email(optional)</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>{" "}
            <Modal.Footer>
              <button type="submit" className="couCheckOut mx-auto">
                {isAddingNew ? "Add Address" : "Save Changes"}
              </button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
      <Footer />
    </>
  );
}

export default OrderDetails;
