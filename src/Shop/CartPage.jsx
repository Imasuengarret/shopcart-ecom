import React from "react";
import { useState, useEffect } from "react";
import PageHeader from "../Component/PageHeader";
import { Link } from "react-router-dom";
import imgDel from "../assets/images/shop/del.png";
import CheckOut from "./CheckOut";

function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    //  fetch cart item from localstorage
    const storedCartItem = JSON.parse(localStorage.getItem("CART")) || [];
    setCartItems(storedCartItem);
  }, []);

  // calculate prices
  const calculateTotalPrice = (item) => {
    return item.price * item.quantity;
  };
  // handle qauntity increase

  const handleIncrease = (item) => {
    item.quantity += 1;
    setCartItems([...cartItems]);

    // update local storage with new cart item
    localStorage.setItem("CART", JSON.stringify(cartItems));
  };

  // handle quantity decrease
  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      item.quantity -= 1;
      setCartItems([...cartItems]);
    }

    // update local storage with new cart item
    localStorage.setItem("CART", JSON.stringify(cartItems));
  };

  //   handle item remove
  const handleRemoveItem = (item) => {
    const updatedCart = cartItems.filter(
      (cartItems) => cartItems.id !== item.id
    );

    // update new cart
    setCartItems(updatedCart);

    updateLocalStorage(updatedCart);
  };

  const updateLocalStorage = (cart) => {
    localStorage.setItem("CART", JSON.stringify(cart));
  };

  // cart subtotal
  const cartSubtotal = cartItems.reduce((total, item) => {
    return total + calculateTotalPrice(item);
  }, 0);

  // order total total
  const orderTotal = cartSubtotal;
  return (
    <div>
      <PageHeader title={"Shop Cart"} currentPage={"Cart Page"} />
      <div className="shop-cart paddling-tb">
        <div className="container">
          <div className="section-wrapper">
            {/* cart top */}
            <div className="cart-top">
              <table>
                <thead>
                  <tr>
                    <th className="cat-product">product</th>
                    <th className="cat-price">price</th>
                    <th className="cat-quantity">Quantity</th>
                    <th className="cat-toprice">Total</th>
                    <th className="cat-edit">Edit</th>
                  </tr>
                </thead>
                {/* table body  */}
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item}>
                      <td className="product-item cat-product">
                        <div className="p-thumb">
                          <Link to="/shop">
                            <img src={item.img} alt="" />
                          </Link>
                        </div>
                        <div className="p-content">
                          <Link to="/shop">{item.name}</Link>
                        </div>
                      </td>
                      <td className="cat-price">${item.price}</td>
                      <td className="cat-quantity">
                        <div className="cart-plus-minus">
                          <div
                            className="dec qtybutton"
                            onClick={() => handleDecrease(item)}
                          >
                            -
                          </div>
                          <input
                            type="text"
                            className="cart-plus-minus-box"
                            name="qtybutton"
                            value={item.quantity}
                          />
                          <div
                            className="inc qtybutton"
                            onClick={() => handleIncrease(item)}
                          >
                            +
                          </div>
                        </div>
                      </td>
                      <td className="cat-toprice">
                        ${calculateTotalPrice(item)}
                      </td>
                      <td className="cat-edit">
                        <a href="#" onClick={() => handleRemoveItem(item)}>
                          <img src={imgDel} alt="" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* cart top ends */}
            {/* cart button */}
            <div className="cart-bottom">
              {/* checkout box */}
              <div className="cart-checkout-box">
                <form className="coupon">
                  <input
                    className="cart-page-input-text"
                    type="text"
                    id="coupon"
                    name="coupon"
                    placeholder="Coupon Code ...."
                  />
                  <input type="submit" value="Apply Coupon" />
                </form>
                <form className="cart-checkout">
                  <input type="submit" value="Update Cart" />
                  <div>
                    <CheckOut/>
                  </div>
                </form>
              </div>
              {/* checkout box end */}

              {/* shopping box */}
              <div className="shipping-box">
                <div className="row">
                  <div className="col-lg-6 col-12">
                    <div className="calculate-shiping">
                      <h4>Calculate shipping</h4>
                      <div className="outline-select">
                        <select>
                          <option value="uk">United Kingdom</option>
                          <option value="us">United States</option>
                          <option value="ng">Nigeria</option>
                          <option value="gh">Ghana</option>
                          <option value="cad">Canada</option>
                          <option value="ita">Italy</option>
                          <option value="ger">Germany</option>
                        </select>
                      </div>
                      <div className="outline-select shipping-select">
                        <select className="mt-4 w-[45%]">
                          <option value="uk">London</option>
                          <option value="us">Dellas</option>
                          <option value="ng">Lagos</option>
                          <option value="gh">Kumasi</option>
                          <option value="cad">Ottawa</option>
                          <option value="ita">Napoli</option>
                          <option value="ger">Stuttgart</option>
                        </select>
                        <input
                          type="text"
                          name="Postal Code"
                          id="Postal Code"
                          className="cart-page-input-text w-[45%] justify-start ml-10"
                          placeholder="Postcode/ZIP*"
                        />
                        <button
                          type="submit"
                          className="bg-orange-600 text-white font-semibold rounded-sm px-4 py-2 mt-3"
                        >
                          Update Address
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-12">
                    <div className="cart-overview">
                      <h4>Cart Total</h4>
                      <ul className="lab-ul">
                        <li className="flex justify-between border py-1 items-center">
                          <span className="ml-3">Cart Subtotal</span>
                          <p className="text-orange-400 mr-10">
                            ${cartSubtotal}
                          </p>
                        </li>
                        <li className="flex justify-between border mt-3 py-1 items-center">
                          <span className="ml-3">Shipping and Handling</span>
                          <p className="text-orange-400 mr-10">Free shipping</p>
                        </li>
                        <li className="flex justify-between border mt-3 py-1 items-center">
                          <span className="ml-3">Order Total</span>
                          <p className="text-orange-400 mr-10">
                            ${orderTotal.toFixed(2)}
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
