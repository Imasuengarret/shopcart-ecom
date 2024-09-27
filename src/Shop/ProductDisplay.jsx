import React, { useState } from "react";
import { Link } from "react-router-dom";

const desc =
  "Energister an deliver atactica metrics after adversory Apropria transition enterpris an sources applications emergingg psd template";

function ProductDisplay({ item }) {
  const { name, id, price, seller, ratingsCount, quantity, img } = item;
  const [prequantity, setQuantity] = useState(quantity);
  const [coupon, setCoupon] = useState("");
  const [size, setSize] = useState("select Size");
  const [color, setColor] = useState("select Color");

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };
  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleDecrease = () => {
    if (prequantity > 1) {
      setQuantity(prequantity - 1);
    }
  };
  const handleIncrease = () => {
    setQuantity(prequantity + 1);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const product = {
      id: id,
      img: img,
      name: name,
      price: price,
      quantity: prequantity,
      size: size,
      color: color,
      coupon: coupon,
    };

    const existingCart = JSON.parse(localStorage.getItem("CART")) || [];
    const existingProductIndex = existingCart.findIndex(
      (item) => item.id === id
    );
    if (existingProductIndex !== -1) {
      existingCart[existingProductIndex].quantity += prequantity;
    } else {
      existingCart.push(product);
    }

    //  update loca;storage

    try {
      localStorage.setItem("CART", JSON.stringify(existingCart));
    } catch (error) {
      console.log("Failed to update cart in loc alstorage:", error)
    }

    // reset form fields
    setQuantity(1);
    setSize("select Size");
    setColor("select Color");
    setCoupon("");
  };

  return (
    <div>
      <div>
        <h5>{name}</h5>
        <p className="rating">
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <span>{ratingsCount} reviews</span>
        </p>
        <h5>${price}</h5>
        <h6>{seller}</h6>
        <p>{desc}</p>
      </div>

      {/* cart componenet */}
      <div>
        <form onSubmit={handleSubmit}>
          {/* sizing */}
          <div className="select-product size">
            <select value={size} onChange={handleSizeChange}>
              <option>Select size</option>
              <option value="SM">SM</option>
              <option value="MD">MD</option>
              <option value="LG">LG</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
            <i className="icofont-rounded-down"></i>
          </div>

          {/* color */}
          <div className="select-product color">
            <select value={color} onChange={handleColorChange}>
              <option>Select color</option>
              <option value="White">White</option>
              <option value="Black">Black</option>
              <option value="Green">Green</option>
              <option value="Red">Red</option>
              <option value="Blue">Blue</option>
            </select>
            <i className="icofont-rounded-down"></i>
          </div>

          {/* cart plus minus */}
          <div className="cart-plus-minus" onClick={handleDecrease}>
            <div className="dec qtybutton">-</div>
            <input
              className="cart-plus-minus-box"
              type="text"
              name="qtybutton"
              id="qtybutton"
              value={prequantity}
              onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
            />
            <div className="inc qtybutton" onClick={handleIncrease}>
              +
            </div>
          </div>

          {/* COUPON FILED */}
          <div className="discount-code mb-2">
            <input
              type="text"
              placeholder="Enter Discount Code"
              onChange={(e) => setCoupon(e.target.value)}
            />
          </div>

          {/*btn section  */}
          <button type="submit" className="lab-btn">
            <span>Add to Cart</span>
          </button>
          <Link to="/cart-page" className="lab-btn bg-primary">
            <span>Check Out</span>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default ProductDisplay;
