import ProductCards from "./ProductCards";
import { PRODUCT_API_URL } from "../utils/constants";
import {  useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [productList, setProductList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(PRODUCT_API_URL);
    const json = await data.json();
    console.log(json);
    setProductList(json?.products || []);
    setFilteredList(json?.products || []);
  };

  useEffect(() => {
    if (searchText.trim() === "") {
      setFilteredList(productList);
    }
  }, [searchText, productList]);

  return productList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="top-btn">
        <button
          className="btn"
          onClick={() => {
            const filtered = productList.filter((pdt) => pdt.rating > 4.4);
            setFilteredList(filtered);
            console.log(filtered);
          }}
        >
          Top Rated Products
        </button>

        <div className="search-container">
          <input
            className="search-input"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            placeholder="Search Here"
          />
          {""}
          <button
            className="search-button"
            onClick={() => {
              const filtered = productList.filter((pdt) =>
                pdt.title.toLowerCase().includes(searchText.toLocaleLowerCase())
              );
              searchText.trim === ""
                ? setFilteredList(productList)
                : setFilteredList(filtered);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="product-container">
        {filteredList?.map((pdt) => (
          <Link className="pdt-txt" key={pdt.id} to={`/products/${pdt.id}`}>
            <ProductCards pdt={pdt} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
