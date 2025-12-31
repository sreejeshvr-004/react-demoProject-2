import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useProductDetails from "../utils/hooks/useProductDetails";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
import { useEffect, useState } from "react";

const ProductDetails = () => {
  const { productId } = useParams();
  const productDetails = useProductDetails(productId);
  const onlineStatus = useOnlineStatus();
  const [showReviews, setShowReviews] = useState(false);

  const handleClick = () => {
    setShowReviews(!showReviews);
  };

  if (onlineStatus === false)
    return <h1>Oops! You Are Offline Chech Your Internet</h1>;

  if (productDetails === null) return <Shimmer />;
  const { title, category, price, description, brand } = productDetails; //destructuring
  return (
    <div className="product-details">
      <h1>{title}</h1>
      <h4>{category}</h4>
      <h4>{price}</h4>
      <p>{description}</p>
      <h4>Brand:{brand}</h4>

      <h1 className="review-heading" onClick={handleClick}>
        Reviews
      </h1>
      {showReviews &&
        productDetails.reviews.map((review, index) => (
          <div className="review" key={index}>
            <h2>Rating:{review.rating}</h2>
            <h4>{review.comment}</h4>

            <p>-{review.reviewerName}-</p>
          </div>
        ))}
    </div>
  );
};

export default ProductDetails;
