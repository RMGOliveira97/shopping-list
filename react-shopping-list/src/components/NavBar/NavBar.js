import React from "react";
import "./NavBar.scss";

function NavBar({ setProducts, initialState }) {
  const fruitsAndVegetables = (type) => {
    setProducts([...initialState.filter((element) => element.type === type)]);
  };
  const bakeryAndBread = (type) => {
    setProducts([...initialState.filter((element) => element.type === type)]);
  };
  const meatAndSeafood = (type) => {
    setProducts([...initialState.filter((element) => element.type === type)]);
  };
  const cerealsAndBreakfastFoods = (type) => {
    setProducts([...initialState.filter((element) => element.type === type)]);
  };
  const drinks = (type) => {
    setProducts([...initialState.filter((element) => element.type === type)]);
  };

  return (
    <div>
      <div>
        <button onClick={() => bakeryAndBread("Bakery and Bread")}>
          Bakery and Bread
        </button>
      </div>
      <div>
        <button onClick={() => fruitsAndVegetables("Fruits and Vegetables")}>
          Fruits and vegetables
        </button>
      </div>
      <div>
        <button onClick={() => meatAndSeafood("Meat and Seafood")}>
          Meat and Seafood
        </button>
      </div>
      <div>
        <button
          onClick={() =>
            cerealsAndBreakfastFoods("Cereals and Breakfast Foods")
          }
        >
          Cereals and Breakfast Foods
        </button>
      </div>
      <div>
        <button onClick={() => drinks("Drinks")}>Drinks</button>
      </div>
    </div>
  );
}

export default NavBar;
