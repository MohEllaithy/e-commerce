import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";

import Button from "../button/Button";
import "./productCard.scss";

const ProductCard = function ({ product }) {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button onClick={addProductToCart} buttonType="inverted">
        Add To Cart
      </Button>
    </div>
  );
};

export default ProductCard;
