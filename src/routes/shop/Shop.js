import { useContext } from "react";
import { ProductContext } from "../../contexts/productContext";
import ProductCard from "../../components/product-card/ProductCard";
import "./shop.scss";

const Shop = function () {
  const { products } = useContext(ProductContext);

  return (
    <div className="products-container">
      {products.map((product) => (
        <div key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default Shop;
