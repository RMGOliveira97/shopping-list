import React, { useState } from "react";
import "./Product.scss";

function Product({
  product,
  setTotal,
  total,
  setBudget,
  budget,
  productsInCart,
  setProductsInCart,
}) {
  const [value, setValue] = useState(0);

  const add = () => {
    setValue(value + 1);
    setTotal(total + product.price);
    setBudget(budget - product.price);
    if (value !== 0) {
      setProductsInCart([
        ...productsInCart.filter((element) => element.name !== product.name),
        {
          image: product.image,
          name: product.name,
          quantity: value + 1,
        },
      ]);
    } else {
      setProductsInCart([
        ...productsInCart,
        {
          image: product.image,
          name: product.name,
          quantity: value + 1,
        },
      ]);
    }
  };

  const sub = () => {
    setValue(value - 1);
    setTotal(total - product.price);
    setBudget(budget + product.price);
    if (value === 1) {
      setProductsInCart([
        ...productsInCart.filter((element) => element.name !== product.name),
      ]);
    } else if (value > 1) {
      setProductsInCart([
        ...productsInCart.filter((element) => element.name !== product.name),
        {
          image: product.image,
          name: product.name,
          quantity: value - 1,
        },
      ]);
    }
  };

  return (
    <div className="product">
      <div className="details">
        <img src={product.image} alt={product.name} />
        <p>{product.description}</p>
        <p>{product.price}</p>
      </div>
      <div className="button">
        <button onClick={add}>+</button>
        <p>{value}</p>
        <button onClick={sub} disabled={value === 0}>
          -
        </button>
      </div>
    </div>
  );
}

export default Product;
