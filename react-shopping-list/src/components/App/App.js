import { useState } from "react";
import NavBar from "../NavBar/NavBar";
import ProductArea from "../ProductArea/ProductArea";
import Footer from "../Footer/Footer";
import "./App.scss";
import bananas from "../../assets/images/bananas.png";
import apple from "../../assets/images/apple.png";
import orange from "../../assets/images/orange.png";
import pineaple from "../../assets/images/pineaple.png";
import cabbage from "../../assets/images/cabbage.png";
import redpepper from "../../assets/images/redpepper.png";
import onions from "../../assets/images/onions.png";
import carrot from "../../assets/images/carrot.png";
import bread from "../../assets/images/bread.png";
import breadchorizo from "../../assets/images/breadchorizo.png";
import croissant from "../../assets/images/croissant.png";
import cupcake from "../../assets/images/cupcake.png";
import chocolatesalami from "../../assets/images/chocolatesalami.png";
import shrimp from "../../assets/images/shrimp.png";
import porkchops from "../../assets/images/porkchops.png";
import meatballs from "../../assets/images/meatballs.png";
import chickenbreast from "../../assets/images/chickenbreast.png";
import salmon from "../../assets/images/salmon.png";
import cod from "../../assets/images/cod.png";
import cereal from "../../assets/images/cereal.png";
import cerealbar from "../../assets/images/cerealbar.png";
import oatmeal from "../../assets/images/oatmeal.png";
import bearmini from "../../assets/images/bearmini.png";
import cocacola from "../../assets/images/cocacola.png";
import sparklingwater from "../../assets/images/sparklingwater.png";
import water from "../../assets/images/water.png";
import somersby from "../../assets/images/somersby.png";
import icetea from "../../assets/images/icetea.png";
import bongo from "../../assets/images/bongo.png";

function App() {
  const initialState = [
    {
      image: bananas,
      name: "bananas",
      description: "Bananas",
      price: 0.24,
      type: "Fruits and Vegetables",
    },
    {
      image: apple,
      name: "apple",
      description: "Apple",
      price: 0.41,
      type: "Fruits and Vegetables",
    },
    {
      image: orange,
      name: "orange",
      description: "Orange",
      price: 0.42,
      type: "Fruits and Vegetables",
    },
    {
      image: pineaple,
      name: "pineaple",
      description: "Pineaple",
      price: 1.67,
      type: "Fruits and Vegetables",
    },
    {
      image: cabbage,
      name: "cabbage",
      description: "Cabbage",
      price: 1.31,
      type: "Fruits and Vegetables",
    },
    {
      image: redpepper,
      name: "redpepper",
      description: "Red Pepper",
      price: 1.4,
      type: "Fruits and Vegetables",
    },
    {
      image: onions,
      name: "onions",
      description: "Onions",
      price: 0.47,
      type: "Fruits and Vegetables",
    },
    {
      image: carrot,
      name: "carrot",
      description: "Carrot",
      price: 0.21,
      type: "Fruits and Vegetables",
    },
    {
      image: bread,
      name: "bread",
      description: "Bread",
      price: 0.46,
      type: "Bakery and Bread",
    },
    {
      image: breadchorizo,
      name: "breadchorizo",
      description: "Bread with Chorizo",
      price: 0.8,
      type: "Bakery and Bread",
    },
    {
      image: croissant,
      name: "croissant",
      description: "Croissant",
      price: 3.45,
      type: "Bakery and Bread",
    },
    {
      image: cupcake,
      name: "cupcake",
      description: "Cupcake",
      price: 2.07,
      type: "Bakery and Bread",
    },
    {
      image: chocolatesalami,
      name: "chocolatesalami",
      description: "Chocolate salami",
      price: 2.2,
      type: "Bakery and Bread",
    },
    {
      image: shrimp,
      name: "shrimp",
      description: "Shrimp",
      price: 7.19,
      type: "Meat and Seafood",
    },
    {
      image: porkchops,
      name: "porkchops",
      description: "Pork Chops",
      price: 4.98,
      type: "Meat and Seafood",
    },
    {
      image: meatballs,
      name: "meatballs",
      description: "Meatballs",
      price: 5.29,
      type: "Meat and Seafood",
    },
    {
      image: chickenbreast,
      name: "chickenbreast",
      description: "Chicken Breast",
      price: 6.09,
      type: "Meat and Seafood",
    },
    {
      image: salmon,
      name: "salmon",
      description: "Salmon",
      price: 13.99,
      type: "Meat and Seafood",
    },
    {
      image: cod,
      name: "cod",
      description: "Cod",
      price: 9.99,
      type: "Meat and Seafood",
    },
    {
      image: cereal,
      name: "cereal",
      description: "Chocapic",
      price: 3.49,
      type: "Cereals and Breakfast Foods",
    },
    {
      image: oatmeal,
      name: "oatmeal",
      description: "Oat Meal",
      price: 1.79,
      type: "Cereals and Breakfast Foods",
    },
    {
      image: cerealbar,
      name: "cerealbar",
      description: "Cereal Bar",
      price: 1.99,
      type: "Cereals and Breakfast Foods",
    },
    {
      image: bearmini,
      name: "bearmini",
      description: "Bear Mini",
      price: 13.99,
      type: "Drinks",
    },
    {
      image: cocacola,
      name: "cocacola",
      description: "Coca-Cola",
      price: 4.75,
      type: "Drinks",
    },
    {
      image: sparklingwater,
      name: "sparklingwater",
      description: "Sparkling Water",
      price: 4.89,
      type: "Drinks",
    },
    {
      image: water,
      name: "water",
      description: "Water Monchique",
      price: 3.99,
      type: "Drinks",
    },
    {
      image: somersby,
      name: "somersby",
      description: "Somersby",
      price: 10.49,
      type: "Drinks",
    },
    {
      image: icetea,
      name: "icetea",
      description: "Lipton Ice Tea Peach",
      price: 5.01,
      type: "Drinks",
    },
    {
      image: bongo,
      name: "bongo",
      description: "Um Bongo Mango",
      price: 1.49,
      type: "Drinks",
    },
  ];
  const [products, setProducts] = useState(initialState);
  const [budget, setBudget] = useState(50);
  const [total, setTotal] = useState(0);
  const [productsInCart, setProductsInCart] = useState([]);

  const showAllProducts = () => {
    setProducts(initialState);
  };

  return (
    <div className="App">
      <h1 onClick={() => showAllProducts()}>Shopping List</h1>
      <NavBar
        products={products}
        setProducts={setProducts}
        initialState={initialState}
      />
      <ProductArea
        products={products}
        setProducts={setProducts}
        budget={budget}
        setBudget={setBudget}
        setTotal={setTotal}
        total={total}
        productsInCart={productsInCart}
        setProductsInCart={setProductsInCart}
      ></ProductArea>
      <Footer
        budgetDisplay={budget}
        totaldisplay={total}
        productsInCart={productsInCart}
        setProductsInCart={setProductsInCart}
      />
    </div>
  );
}

export default App;
