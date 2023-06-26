import React from "react";
import Product from "../Product/Product";
import "./ProductArea.scss";

function ProductArea({
  products,
  setProducts,
  setBudget,
  budget,
  total,
  setTotal,
  productsInCart,
  setProductsInCart,
}) {
  return (
    <div className="product-container">
      {products.map((product) => (
        <Product
          key={product.name}
          product={product}
          setBudget={setBudget}
          budget={budget}
          total={total}
          setTotal={setTotal}
          setProducts={setProducts}
          products={products}
          productsInCart={productsInCart}
          setProductsInCart={setProductsInCart}
        ></Product>
      ))}
    </div>
  );
}

export default ProductArea;
