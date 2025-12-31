import ProductCards, { withPromotedText } from "./ProductCards";
import { PRODUCT_API_URL } from "../utils/constants";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useDetails from "../utils/hooks/useDetails";
import AuthContext from "../utils/AuthContext.js";

const Body = () => {
  const productList = useDetails();

  const [filteredList, setFilteredList] = useState(productList);
  const [searchText, setSearchText] = useState("");
  const PromotedProduct = withPromotedText(ProductCards);
  const { loggedInUserName, setUserName } = useContext(AuthContext);

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
          <input
            className="search-input"
            type="text"
            value={loggedInUserName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="product-container">
        {filteredList?.map((pdt) => (
          <Link className="pdt-txt" key={pdt.id} to={`/products/${pdt.id}`}>
            {pdt.rating > 4 ? (
              <PromotedProduct pdt={pdt} />
            ) : (
              <ProductCards pdt={pdt} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
