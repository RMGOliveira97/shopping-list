import React from "react";
import "./CartModal.scss";
import x from "./../../assets/images/xmark-solid.svg";

function CartModal({ productsInCart, setProductsInCart, modal, toggleModal }) {
  if (modal) {
    document.body.classList.add(`active-modl`);
  } else {
    document.body.classList.remove(`active-modl`);
  }
  return (
    <>
      {modal && (
        <div className="modal">
          <div className="overlay"></div>
          <div className="modal-content">
            <h2>Cart</h2>
            {productsInCart?.map((product) => (
              <div key={product.name} className="container-cart">
                <img src={product.image} alt={product.name} />
                <p>{product.name}</p>
                <p>{product.quantity}</p>
              </div>
            ))}
          </div>
          <img
            src={x}
            alt="closeModal"
            onClick={toggleModal}
            className="close-modal"
          />
        </div>
      )}
    </>
  );
}

export default CartModal;
