import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "../Component/Modal.css";
import { useLocation, useNavigate } from "react-router-dom";

function CheckOut() {
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState("visa");

  // handle tab change
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };
  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(!true);
  };

  // direct to home page
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";


  const handleOrderConfirm = () =>{
    alert("Your order is placedd successfully");
    localStorage.removeItem("CART");
    navigate(from, {replace: true})
  }
  return (
    <div className="modalcard">
      <Button variant="primary" className="py-2" onClick={handleShow}>
        Proceed to Checkout
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        className="modal-fade"
        centered
      >
        <div className="modal-dialog">
          <h5 className="px-2 mb-2">Select Payment Method</h5>
          <div className="modal-content">
            <div className="modal-body">
              <div className="tabs mt-3">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a
                      className={`nav-link ${
                        activeTab === "visa" ? "acive" : ""
                      }`}
                      id="visa-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="visa"
                      aria-selected={activeTab === "visa"}
                      onClick={() => handleTabChange("visa")}
                      href="#visa"
                    >
                      <img
                        src="http://i.imgur.com/sB4jftM.png"
                        alt=""
                        width={70}
                      />
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className={`nav-link ${
                        activeTab === "paypal" ? "acive" : ""
                      }`}
                      id="paypal-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="payal"
                      aria-selected={activeTab === "paypal"}
                      onClick={() => handleTabChange("paypal")}
                      href="#paypal"
                    >
                      <img
                        src="http://i.imgur.com/yK7EDD1.png"
                        alt=""
                        width={70}
                      />
                    </a>
                  </li>
                </ul>

                {/* content */}
                <div className="tab-content" id=",yTabContent">
                  {/* visa content */}
                  <div
                    className={`tab-pane fade ${
                      activeTab === "visa" ? "show active" : ""
                    }`}
                    id="visa"
                    role="tabpanel"
                    aria-labelledby="visa-tab"
                  >
                    {/* visa tab content */}

                    <div className="mt-4 mx-4">
                      <div className="text-center">
                        <h5>Credit Card</h5>
                      </div>
                      <div className="form mt-3">
                        <div className="inputbox">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            className="form-control"
                            required
                          />
                          <span>Cardholder's Name</span>
                        </div>
                        <div className="inputbox">
                          <input
                            type="text"
                            name="nummber"
                            id="number"
                            className="form-control"
                            required
                            min={1}
                            max={999}
                          />
                          <span>Card Number</span> <i className="fa fa-eye"></i>
                        </div>
                        <div className="d-flex flex-row">
                          <div className="inputbox">
                            <input
                              type="text"
                              name="nummber"
                              id="number"
                              className="form-control"
                              required
                              min={1}
                              max={999}
                            />
                            <span>Expiration Date</span>{" "}
                            <i className="fa fa-eye"></i>
                          </div>
                          <div className="inputbox">
                            <input
                              type="text"
                              name="nummber"
                              id="number"
                              className="form-control"
                              required
                              min={1}
                              max={999}
                            />
                            <span>CVV</span> <i className="fa fa-eye"></i>
                          </div>
                        </div>
                      </div>
                      <div className="px-5 pay">
                        <button className="btn btn-success btn-block" onClick={handleOrderConfirm}>
                          Order Now
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* paypal content */}
                  <div className={`tab-pane fade ${activeTab === "paypal" ? "show active" : ""}`}
                  id="paypal"
                  role="tabpanel"
                  aria-labelledby="paypal-tab"
                  >
                     <div className="mt-4 mx-4">
                      <div className="text-center">
                        <h5>PayPal Account Info</h5>
                      </div>
                      <div className="form mt-3">
                        <div className="inputbox">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            className="form-control"
                            required
                          />
                          <span>Enter Email</span>
                        </div>
                        <div className="inputbox">
                          <input
                            type="text"
                            name="nummber"
                            id="number"
                            className="form-control"
                            required
                            min={1}
                            max={999}
                          />
                          <span>Account Name</span> <i className="fa fa-eye"></i>
                        </div>
                        <div className="d-flex flex-row">
                        <div className="inputbox">
                            <input
                              type="text"
                              name="nummber"
                              id="number"
                              className="form-control"
                              required
                              min={1}
                              max={999}
                            />
                            <span>Extra Info</span>
                            <i className="fa fa-eye"></i>
                          </div>
                        <div className="inputbox">
                            <input
                              type="text"
                              name="nummber"
                              id="number"
                              className="form-control"
                              required
                              min={1}
                              max={999}
                            />
                            <span></span>
                            <i className="fa fa-eye"></i>
                          </div>
                        </div>
                      </div>
                      <div className="px-5 pay">
                        <button className="btn btn-success btn-block" onClick={handleOrderConfirm}>
                          Add paypal
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* payment disclaimer */}
                <p className="mt-3 px-4 p-disclaimer"><em>Payment Disclaimer: </em> In no event shall payment or partial payment be done by by owner for any material or services</p>
                
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default CheckOut;
