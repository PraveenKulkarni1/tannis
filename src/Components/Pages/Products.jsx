import React, { useState, useEffect } from "react";
import "./products.css";
import Layout from "./../Layout/Layout";
import { NavLink } from "react-router-dom";
import { MdCurrencyRupee } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import FiltrProduct from "./FiltrProduct";
import axios from "axios";
import toast from "react-hot-toast";
import { useProductContext } from "../contextApi/ProductContext";

const Products = () => {
  const { products, setProducts } = useProductContext();

  // const [products, setProducts] = useState(data);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [likedProducts, setLikedProducts] = useState({});

  const toggleLike = (id, event) => {
    event.preventDefault();
    setLikedProducts((prevLiked) => ({
      ...prevLiked,
      [id]: !prevLiked[id],
    }));
  };

  const getProduct = async () => {
    try {
      const res = await axios.get(
        `https://tannis.in/api/product-by-mid-category/${5}`
      );
      setProducts(res.data, "//////////////");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

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
  return (
    <Layout title={"All-Tannis-products"}>
      <div className="container">
        <div className="row filter-container">
          <div className="col-md-4 col-lg-3">
            <FiltrProduct />
          </div>
          <div className="col-md-8 col-lg-9 mt-3">
            <div className="row">
              <div className="selectDrop">
                <div className="col-md-4 col-10 d-flex justify-content-end">
                  <p className="w-25 p-2 sorttxt">Sort by:</p>
                  <select
                    className="form-select form-select dpBtn mb-3 border-1"
                    aria-label="small select example"
                  >
                    <option selected>Relevance</option>
                    <option value={1}>Price Low to High</option>
                    <option value={2}>Price High to Low</option>
                    <option value={3}>Discount Low to High</option>
                    <option value={4}>Discount High to Low</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row productsRow">
              {products.length > 0 &&
                products.map((item, i) => {
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
                      className="d-flex col-md-4 col-sm-6 col-6 mb-3"
                      key={id}
                    >
                      <div className="card productCard border-0 shadow-sm g-2">
                        <div className="iconAbs d-flex justify-content-end align-items-center">
                          <span
                            className={`heartIcon ${
                              likedProducts[id] ? "red-heart" : ""
                            }`}
                            onClick={(e) => toggleLike(id, e)}
                          >
                            {likedProducts[id] ? (
                              <FaHeart className="pFaHeaert" />
                            ) : (
                              <CiHeart />
                            )}
                          </span>
                        </div>
                        <div className="iconRel">
                          <img
                            src={thumbnail}
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
                            {discount && (
                              <del className="delProduct">
                                <MdCurrencyRupee />
                                {mrp}
                              </del>
                            )}
                            {discount && (
                              <span className="offdes">
                                ({Math.floor((discount / mrp) * 100)}%)
                              </span>
                            )}
                          </h6>
                          <p className="offerP3">1 Offer</p>
                          <p className="offerP4">15ml</p>
                          {/* <button
                            className="proCartBtn hoverButton"
                            onClick={() => handleAddToCart(id, qty)}
                          >
                            Add to Bag
                          </button> */}

                          <button
                            className="proCartBtn hoverButton"
                            onClick={(e) => {
                              e.preventDefault(); // stop NavLink redirect
                              e.stopPropagation(); // stop event bubbling
                              handleAddToCart(id, qty);
                            }}
                          >
                            Add to Bag
                          </button>
                        </div>
                      </div>
                    </NavLink>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;

// needed
// import React, { useState, useEffect } from "react";
// import "./products.css";
// import Layout from "./../Layout/Layout";
// import { NavLink } from "react-router-dom";
// import { MdCurrencyRupee } from "react-icons/md";
// import { CiHeart } from "react-icons/ci";
// import { FaHeart } from "react-icons/fa";
// import FiltrProduct from "./FiltrProduct";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { useProductContext } from "../contextApi/ProductContext";

// const Products = () => {
//   const { products, setProducts } = useProductContext();

//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [likedProducts, setLikedProducts] = useState({});
//   const [addedToCart, setAddedToCart] = useState({});

//   // Load addedToCart state from localStorage on mount
//   useEffect(() => {
//     const savedCart = localStorage.getItem("addedToCart");
//     if (savedCart) {
//       try {
//         setAddedToCart(JSON.parse(savedCart));
//       } catch (e) {
//         console.error("Error parsing localStorage addedToCart:", e);
//       }
//     }
//   }, []);

//   // Save addedToCart state to localStorage whenever it changes
//   useEffect(() => {
//     localStorage.setItem("addedToCart", JSON.stringify(addedToCart));
//   }, [addedToCart]);

//   const toggleLike = (id, event) => {
//     event.preventDefault();
//     setLikedProducts((prevLiked) => {
//       const updated = Object.assign({}, prevLiked); // no spread
//       updated[id] = !updated[id];
//       return updated;
//     });
//   };

//   const getProduct = async () => {
//     try {
//       const res = await axios.get(
//         `https://tannis.in/api/product-by-mid-category/${5}`
//       );
//       setProducts(res.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getProduct();
//   }, []);

//   const handleAddToCart = async (id, qty, e) => {
//     e.preventDefault(); // Prevent NavLink navigation
//     const token = localStorage.getItem("token");
//     const body = { variant: id, qty: qty };
//     try {
//       await axios.post("https://tannis.in/api/add-to-cart/", body, {
//         headers: {
//           Authorization: `Token ${token}`,
//         },
//       });

//       toast.success("Item Added Successfully");

//       // ✅ Update without spread operator and save to localStorage
//       setAddedToCart((prev) => {
//         const updated = Object.assign({}, prev);
//         updated[id] = true;
//         return updated;
//       });
//     } catch (error) {
//       console.error("Error adding to cart:", error);
//     }
//   };

//   return (
//     <Layout title={"All-Tannis-products"}>
//       <div className="container">
//         <div className="row filter-container">
//           <div className="col-md-4 col-lg-3">
//             <FiltrProduct />
//           </div>
//           <div className="col-md-8 col-lg-9 mt-3">
//             <div className="row">
//               <div className="selectDrop">
//                 <div className="col-md-4 col-10 d-flex justify-content-end">
//                   <p className="w-25 p-2 sorttxt">Sort by:</p>
//                   <select
//                     className="form-select form-select dpBtn mb-3 border-1"
//                     aria-label="small select example"
//                   >
//                     <option defaultValue>Relevance</option>
//                     <option value={1}>Price Low to High</option>
//                     <option value={2}>Price High to Low</option>
//                     <option value={3}>Discount Low to High</option>
//                     <option value={4}>Discount High to Low</option>
//                   </select>
//                 </div>
//               </div>
//             </div>
//             <div className="row productsRow">
//               {products.length > 0 &&
//                 products.map((item) => {
//                   let {
//                     id,
//                     product: { discount, qty, p_name, brand, mrp },
//                     thumbnail,
//                   } = item;

//                   return (
//                     <NavLink
//                       to={`/product-details/${item.id}`}
//                       className="d-flex col-md-4 col-sm-6 col-6 mb-3"
//                       key={id}
//                     >
//                       <div className="card productCard border-0 shadow-sm g-2">
//                         <div className="iconAbs d-flex justify-content-end align-items-center">
//                           <span
//                             className={`heartIcon ${
//                               likedProducts[id] ? "red-heart" : ""
//                             }`}
//                             onClick={(e) => toggleLike(id, e)}
//                           >
//                             {likedProducts[id] ? (
//                               <FaHeart className="pFaHeaert" />
//                             ) : (
//                               <CiHeart />
//                             )}
//                           </span>
//                         </div>
//                         <div className="iconRel">
//                           <img
//                             src={thumbnail}
//                             className="card-img-top"
//                             alt="..."
//                           />
//                         </div>
//                         <div className="card-body">
//                           <p className="card-title proTitle">{brand}</p>
//                           <h6 className="card-text proText">{p_name}</h6>
//                           <h6 className="titilHead">
//                             <MdCurrencyRupee />
//                             {mrp - discount}
//                             {discount && (
//                               <del className="delProduct">
//                                 <MdCurrencyRupee />
//                                 {mrp}
//                               </del>
//                             )}
//                             {discount && (
//                               <span className="offdes">
//                                 ({Math.floor((discount / mrp) * 100)}%)
//                               </span>
//                             )}
//                           </h6>
//                           <p className="offerP3">1 Offer</p>
//                           <p className="offerP4">15ml</p>
//                           <button
//                             className={`proCartBtn hoverButton ${
//                               addedToCart[id] ? "added-btn" : ""
//                             }`}
//                             onClick={(e) => handleAddToCart(id, qty, e)}
//                             disabled={addedToCart[id]}
//                           >
//                             {addedToCart[id] ? "Added" : "Add to Bag"}
//                           </button>
//                         </div>
//                       </div>
//                     </NavLink>
//                   );
//                 })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Products;
