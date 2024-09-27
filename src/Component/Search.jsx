import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Search({ products, gridList }) {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredProducts = products.filter(
    (product) => product.name.
    toLowerCase().includes(searchTerm.toLowerCase())
  );
  return <div className="widget widget-search">
    <form className="search-wrapper mb-3">
        <input type="text" name="search" id="search" placeholder="Search..." defaultValue={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <button type="submit">
            <i className="icofont-search-2"></i>
        </button>
    </form>

    {/* showing search result */}
    <div>
        {
            searchTerm && filteredProducts.map((product) => (
                <Link key={product.id} to={`/shop/${product.id}`}>
                    <div className="d-flex gap-3 p-2">
                        <div>
                        <div className="pro-thumb h-25">
                            <img src={product.img} alt="" width={80} className="flex-{grow|shrink}" />
                        </div>
                        </div>

                        <div className="product-content">
                            <p>
                                <Link to={`/shop/${product.filteredProducts}`}>{product.name}</Link>
                            </p>
                            <h6>${product.price}</h6>
                        </div>
                    </div>
                </Link>
            ))
        }
    </div>
  </div>
}

export default Search;
