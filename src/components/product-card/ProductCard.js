import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";

import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";
import { ProductCardContainer, Footer, Name, Price } from "./productCard.style";

const ProductCard = function ({ product }) {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        onClick={addProductToCart}
        buttonType={BUTTON_TYPE_CLASSES.inverted}
      >
        Add To Cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
