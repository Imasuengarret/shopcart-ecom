import React, { useState } from "react";
import PageHeader from "../Component/PageHeader";

const showResults = "Showing 01 - 12 of 139 Results";
import Data from "../products.json";
import ProductCards from "./ProductCards";
import Pagination from "./Pagination";
import Search from "../Component/Search";
import ShopCategory from "./ShopCategory";
import PopularPost from "./PopularPost";
import Tags from "./Tags";

function Shop() {
  const [gridList, setGridList] = useState(true);
  const [products, setProducts] = useState(Data);

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstPage = indexOfLastProduct - productsPerPage;
  const currentProduct = products.slice(indexOfFirstPage, indexOfLastProduct);

  // function to change current page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // filtered products based on category

  const [selectedCategory, setSelectedCategory] = useState("All");
  const menuItem = [...new Set(Data.map((val) => val.category))];
  const filterItem = (curCat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curCat;
    });
    setSelectedCategory(curCat);
    setProducts(newItem);
  };

  return (
    <div>
      <PageHeader title={`Shop Page`} currentPage={`Shop`} />

      {/* shop page */}
      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              {/* layout and title */}
              <article>
                <div className="shop-title items-center flex justify-around ">
                  <p>{showResults}</p>
                  <div>
                    <button
                      className={`grid-s  ${gridList ? "active" : ""}`}
                      onClick={() => setGridList(true)}
                      aria-pressed={gridList}
                    >
                      <i className="icofont-ghost"></i>
                    </button>
                    <button
                      className={`list-s ${!gridList ? "active" : ""}`}
                      onClick={() => setGridList(false)}
                      aria-pressed={!gridList}
                    >
                      <i className="icofont-listine-dots"></i>
                    </button>
                  </div>
                </div>

                {/* product cards */}
                <div>
                  <ProductCards gridList={gridList} products={currentProduct} />
                </div>

                {/* pagination */}
                <div>
                  <Pagination
                    productsPerPage={productsPerPage}
                    totalProducts={products.length}
                    paginate={paginate}
                    activePage={currentPage}
                  />
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <aside>
                <Search products={products} gridList={gridList} />
                <ShopCategory
                  filterItem={filterItem}
                  setItem={setProducts}
                  menuItem={menuItem}
                  setProducts={setProducts}
                  selectedCategory={selectedCategory}
                />
                <PopularPost/>
                <Tags/>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
