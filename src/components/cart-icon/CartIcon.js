import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";

import { CartIconContainer, ShoppingIcon, ItemCount } from "./cartIcon.style";

const CartIcon = function () {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
