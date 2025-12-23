import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [productDetails, setProductDetails] = useState(null);
  useEffect(() => {
    fetchProducts();
  }, []);

  const { productId } = useParams();
  console.log(productId);

  const fetchProducts = async () => {
    const data = await fetch(`https://dummyjson.com/products/${productId}`);
    const json = await data.json();
    console.log(json);

    setProductDetails(json);
  };
  if (productDetails === null) return <Shimmer />;
  const { title, category, price, description,brand } = productDetails; //destructuring
  return (
    <div className="product-details">
      <h1>{title}</h1>
      <h4>{category}</h4>
      <h4>{price}</h4>
      <p>{description}</p>
      <h4>Brand:{brand}</h4>
      {productDetails.reviews.map((review, index) => (
        <div key={index}>
          <h4>{review.comment}</h4>
          <p>{review.rating}</p>
          <p>{review.reviewerName}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductDetails;


