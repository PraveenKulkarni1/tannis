import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import { CiLocationOn } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
function LocModel({ changeLocClose, showChangeLoc }) {
  const [address, setAddress] = useState([]);
  const [pincode, setPincode] = useState("560036");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const [selectedAddress, setSelectedAddress] = useState(null);
  const [location, setLocation] = useState(null);
  const [locAddress, setLocAddress] = useState("");
  const [error, setError] = useState("");

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

      // navigate("/order-details");

      // const def = res.data.find((a) => a.is_default);
      // if (def) setDefaultAddressId(def.id);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllAddress();
  }, []);
  const handleCheck = async (e) => {
    e.preventDefault();
    if (pincode.length !== 6) {
      alert("Please enter a valid 6-digit pincode");
      return;
    }

    try {
      const res = await axios.get(
        `https://api.postalpincode.in/pincode/${pincode}`
      );
      const postOffices = res.data[0].PostOffice;

      if (postOffices && postOffices.length > 0) {
        setCity(postOffices[0].District);
        setState(postOffices[0].State);
      } else {
        setCity("Not found");
        setState("");
      }
    } catch (error) {
      console.error(error);
      setCity("Error fetching city");
      setState("");
    }
  };

  const getAddressFromCoords = async (lat, lng) => {
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
      );
      const data = await res.json();

      if (data && data.address) {
        const addr = data.address;
        // Construct a readable address
        return `${addr.city || addr.town || addr.village || ""}, ${
          addr.state || ""
        }, ${addr.postcode || ""}`;
        // ${addr.postcode || ""}, ${addr.country || ""}`;
      }
      return "Address not found";
    } catch (err) {
      console.error(err);
      return "Failed to fetch address";
    }
  };

  // Get current location
  const getLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
    } else {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;

          setLocation({ lat, lng });
          setError("");

          // Convert lat/lng -> Address
          const addr = await getAddressFromCoords(lat, lng);
          setLocAddress(addr);
        },
        () => {
          setError("Location access denied. Please allow location access.");
        }
      );
    }
  };

  return (
    <>
      <>
        <Modal show={showChangeLoc} onHide={changeLocClose} scrollable>
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
                    <IoIosArrowForward
                      className="locIcon1"
                      size={20}
                      onClick={getLocation}
                    />
                  </div>
                </div>
                <div className="col-12">
                  {locAddress && (
                    <p className="mt-2 text-green-600">
                      <strong>Detected Address:</strong> {locAddress}
                    </p>
                  )}
                  {error && <p className="mt-2 text-red-600">{error}</p>}
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
                        placeholder="eg 560036"
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                        autoFocus
                      />
                      <button
                        type="button"
                        className="revSubmit"
                        onClick={handleCheck}
                      >
                        Check
                      </button>
                    </div>
                    <p className="pdtSpan my-2">
                      Delivery to:
                      <span className="pdtCity ">
                        {city && (
                          <span className="pdtCity ms-1">
                            {city.toLocaleUpperCase()} <br />
                          </span>
                        )}
                      </span>
                    </p>
                  </Form.Group>
                </Form>
                <div className="col-12 my-xl-4 my-lg-4 my-md-3 my-sm-2 my-2">
                  <h4 className="text-center pdtSpan ">---- OR ----</h4>
                </div>
                <div className="col-12">
                  <h3 className="pdtSaveAdd">
                    Select from saved addresses ({address?.length})
                  </h3>

                  {address.map((address) => (
                    <div
                      key={address.id}
                      className={`card p-3 shadow-sm mb-2 gap-2 w-100 ${
                        selectedAddress?.id === address.id
                          ? "border border-dark"
                          : ""
                      }`}
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
                            <span className="copBorder ms-2">
                              {address.type_of_address}
                            </span>
                          </h5>

                          <p className="pdtText m-0 p-0">
                            {address.address1},
                            <span className="pdtText">
                              {address.address2},{" "}
                              <span className="pdtText">
                                {address.city}- {address.state}-{" "}
                                {address.pin_code}
                                {/* <GoDash size={18} className="ms-1" /> */}
                                <p className="pdtText my-1"></p>
                              </span>
                            </span>{" "}
                          </p>

                          <p className="mb-0 pdtTextm">
                            Mobile: {address.phone}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Button
              className="revSubmit"
              onClick={() => {
                if (selectedAddress) {
                  localStorage.setItem(
                    "selectedAddress",
                    JSON.stringify(selectedAddress)
                  );
                }
                changeLocClose();
              }}
            >
              Confirm
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </>
  );
}

export default LocModel;
