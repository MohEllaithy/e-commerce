import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
import {
  CheckoutItemContainer,
  ImageContainer,
  Span,
  QuantitySpan,
  ValueSpan,
  ArrowSpan,
  RemoveButton,
} from "./checkoutItem.style";

const CheckoutItem = function ({ cartItem }) {
  const { name, imageUrl, quantity, price } = cartItem;
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);

  const clearCartItemHandler = () => clearItemFromCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <Span>{name}</Span>
      <QuantitySpan>
        <ArrowSpan onClick={() => removeItemFromCart(cartItem)}>
          &#10094;
        </ArrowSpan>
        <ValueSpan>{quantity}</ValueSpan>
        <ArrowSpan onClick={() => addItemToCart(cartItem)}>&#10095;</ArrowSpan>
      </QuantitySpan>
      <Span>{price}</Span>
      <RemoveButton onClick={clearCartItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
