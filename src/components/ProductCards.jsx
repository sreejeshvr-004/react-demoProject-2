import { useContext } from "react";
import AuthContext from "../utils/AuthContext";

const ProductCards = ({ pdt }) => {
  const { loggedInUserName } = useContext(AuthContext);

  return (
    <div className="pdt-card">
      <img className="pdt-img" src={pdt.thumbnail} />

      <h2>{pdt.title}</h2>
      <h4>Rating: {pdt.rating}</h4>
      <h4>Type: {pdt.tags.join(", ")}</h4>
      <h4>Price: {pdt.price}</h4>
      <h4>{pdt.shippingInformation} </h4>
      <h4>{loggedInUserName}</h4>
    </div>
  );
};

export default ProductCards;

export const withPromotedText = (ProductCards) => {
  return (props) => {
    return (
      <div>
        <label className="promoted" htmlFor="">
          Promoted
        </label>
        <ProductCards {...props} />
      </div>
    );
  };
};
