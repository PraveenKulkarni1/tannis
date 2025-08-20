import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Products from "./Components/Pages/Products";
import DetailProduct from "./Components/Pages/DetailProduct";
import CartPage from "./Components/Pages/CartPage";
import Footer from "./Components/Layout/Footer";
import Header from "./Components/Layout/Header";
import RadioDropdown from "./Components/SliderPage/MoreToLike";
import SignUp from "./Auth/SignUp";
import Login from "./Auth/Login";
import UserDashboard from "./User/UserDashboard";
import UserProfile from "./UserPage/UserProfile";
import UserOrder from "./UserPage/UserOrder";
import UserAddress from "./UserPage/UserAddress";
import AboutUs from "./UserPage/AboutUs";

import ReferEarn from "./UserPage/ReferEarn";
import TopShelf from "./UserPage/TopShelf";
import LoginOtp from "./Auth/LoginOtp";
import AddAddress from "./UserPage/AddAddress";
import ScrollToTopButton from "./Scroll/ScrollToTop";
import OrderDetails from "./Components/Pages/OrderDetails";

import ChangeAddress from "./Modal/ChangeAddress";
import Faq from "./UserPage/Help&FAQ/Faq";
import ManageYourAcc from "./UserPage/Help&FAQ/ManageYourAcc";
import Shopping from "./UserPage/Help&FAQ/Shoppig";
import OrderStatus from "./UserPage/Help&FAQ/OrderStatus";
import Cancellation from "./UserPage/Help&FAQ/Cancellation";
import ReturnRefund from "./UserPage/Help&FAQ/ReturnRefund";
import Payments from "./UserPage/Help&FAQ/Payments";
import OffersPromotions from "./UserPage/Help&FAQ/OffersPromotions";
import Authenticity from "./UserPage/Help&FAQ/Authenticity";
import GenrealQueries from "./UserPage/Help&FAQ/GenralQueries";
import WriteToUs from "./UserPage/Help&FAQ/WriteToUs";
import TannisTribe from "./UserPage/Help&FAQ/TannisTribe";
import Rev from "./UserPage/Rev";
import TermsAndCond from "./Terms&Codition/TermsAndCond";
import FeesPayment from "./Terms&Codition/FeesPayment";
import CancellationRefund from "./Terms&Codition/CancellationRefund";
import ShippingDelivery from "./Terms&Codition/ShippingDelivery";
import RewardPolicy from "./Terms&Codition/RewardPolicy";
import PromotionTerms from "./Terms&Codition/PromotionTerms";
import PrivatePolicy from "./Terms&Codition/PrivatePolicy";
import OfferHome from "./Offers/OfferHome";

import WishlistPage from "./Components/Pages/WishlistPage";
import HomeTannisRed from "./TannisRed/HomeTannisRed";
import UserOnline from "./UserPage/UserOnline";
import WishlistProduct from "./Components/Pages/WishListProduct";
import MainSubategory from "./Components/SubCategory/MainSubcategory";
import Search from "./Components/Layout/Search";
import ShipmentDetails from "./UserPage/ShipmentDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/search/:slug" element={<Search />}></Route>
        <Route path="/user-dashboard" element={<UserDashboard />}></Route>
        <Route path="/tannis-red" element={<HomeTannisRed />}></Route>
        {/* userMenu */}
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/order" element={<UserOrder />}>
          <Route path="shipment" element={<ShipmentDetails />} />
        </Route>

        <Route path="/address" element={<UserAddress />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/refer" element={<ReferEarn />} />
        <Route path="/top-shelf" element={<TopShelf />} />
        <Route path="/add-address" element={<AddAddress />} />
        {/* userMenu */}
        <Route path="/register" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/login-otp" element={<LoginOtp />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/:slug/products" element={<Products />}></Route>

        <Route path="/wishlist" element={<WishlistPage />}></Route>
        <Route
          path="/product-details/:slug"
          element={<DetailProduct />}
        ></Route>
        <Route path="/product-list" element={<DetailProduct />}></Route>

        <Route path="/:slug" element={<MainSubategory />}></Route>
        <Route path="/order-details" element={<OrderDetails />}></Route>
        <Route path="/change-aadress" element={<ChangeAddress />}></Route>
        <Route
          path="/cart"
          element={
            <>
              <CartPage />

              <Footer />
            </>
          }
        ></Route>
        {/* FAQ Links */}
        <Route path="/manage-account" element={<ManageYourAcc />}></Route>
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/rev" element={<Rev />} />
        <Route path="/order-status" element={<OrderStatus />} />
        <Route path="/cancel-refunds" element={<Cancellation />} />
        <Route path="/return-refund" element={<ReturnRefund />} />
        <Route path="/faq-payments" element={<Payments />} />
        <Route path="/faq-offers" element={<OffersPromotions />} />
        <Route path="/autenticity" element={<Authenticity />} />
        <Route path="/genral-queries" element={<GenrealQueries />} />
        <Route path="/write-to-us" element={<WriteToUs />} />
        <Route path="/tannis-tribute" element={<TannisTribe />} />

        <Route path="/terms-conditions" element={<TermsAndCond />} />
        <Route path="/fees-payments" element={<FeesPayment />} />
        <Route path="/cancel-refund-policy" element={<CancellationRefund />} />
        <Route
          path="/shipping-delivery-policy"
          element={<ShippingDelivery />}
        />
        <Route path="/private-policy" element={<PrivatePolicy />} />
        <Route path="/rewards-policy" element={<RewardPolicy />} />
        <Route
          path="/promotions-terms-condtions"
          element={<PromotionTerms />}
        />

        {/* OfferHome */}
        <Route path="/offers" element={<OfferHome />} />
        <Route path="/wishlist-product" element={<WishlistProduct />} />
      </Routes>
      <ScrollToTopButton />
    </>
  );
}

export default App;
// // // "scripts": {
// // //   "start": "node --max-old-space-size=4096 ./node_modules/react-scripts/scripts/start.js",
// // //   "build": "node --max-old-space-size=4096 ./node_modules/react-scripts/scripts/build.js"
// // // }

// import React, { useState } from "react";

// const App = () => {
//   const [location, setLocation] = useState(null);
//   const [locAddress, setLocAddress] = useState("");
//   const [error, setError] = useState("");

//   // Reverse geocode (Lat/Lng -> Address)
//   const getAddressFromCoords = async (lat, lng) => {
//     try {
//       const res = await fetch(
//         `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
//       );
//       const data = await res.json();

//       if (data && data.address) {
//         const addr = data.address;
//         // Construct a readable address
//         return `${addr.city || addr.town || addr.village || ""}, ${
//           addr.state || ""
//         }, ${addr.postcode || ""}, ${addr.country || ""}`;
//       }
//       return "Address not found";
//     } catch (err) {
//       console.error(err);
//       return "Failed to fetch address";
//     }
//   };

//   // Get current location
//   const getLocation = () => {
//     if (!navigator.geolocation) {
//       setError("Geolocation is not supported by your browser");
//     } else {
//       navigator.geolocation.getCurrentPosition(
//         async (position) => {
//           const lat = position.coords.latitude;
//           const lng = position.coords.longitude;

//           setLocation({ lat, lng });
//           setError("");

//           // Convert lat/lng -> Address
//           const addr = await getAddressFromCoords(lat, lng);
//           setLocAddress(addr);
//         },
//         () => {
//           setError("Location access denied. Please allow location access.");
//         }
//       );
//     }
//   };

//   return (
//     <div className="p-6 max-w-md mx-auto bg-white rounded-2xl shadow-md">
//       <h2 className="text-xl font-bold mb-4">📍 Choose your location</h2>

//       <button
//         onClick={getLocation}
//         className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
//       >
//         Use My Current Location
//       </button>

//       {locAddress && (
//         <p className="mt-2 text-green-600">
//           <strong>Detected Address:</strong> {locAddress}
//         </p>
//       )}

//       {error && <p className="mt-2 text-red-600">{error}</p>}
//     </div>
//   );
// };

// export default App;
