import { useEffect, useState } from "react";

const useProductDetails = (productId) => {
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const data = await fetch(`https://dummyjson.com/products/${productId}`);
    const json = await data.json();
    setProductDetails(json);
  };
  return productDetails;
};

export default useProductDetails;
