import "./Footer.scss";
import cart from "../../assets/images/cart-shopping-solid.svg";
import { useState } from "react";
import CartModal from "../CartModal/CartModal";

function Footer({
  budgetDisplay,
  totaldisplay,
  productsInCart,
  setProductsInCart,
}) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <footer className="footer">
      <p>Budget: {budgetDisplay.toFixed(2)}€</p>
      <div>
        <img src={cart} alt="cashout" onClick={toggleModal} />
        <CartModal
          modal={modal}
          toggleModal={toggleModal}
          productsInCart={productsInCart}
        />
        <p>Total: {totaldisplay.toFixed(2)}</p>
      </div>
    </footer>
  );
}

export default Footer;
