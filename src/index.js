import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div style={{ textAlign: "center"}}>
      <Header />
      <div style={{ textAlign: "center"}}>
        <p style={{ fontFamily: "Courier New"}}>Authentic Italian cuisune, all from our stone oven.</p>
      <div style={{display: "flex", justifyContent: "Center", flexWrap:"wrap", gap: "60px", "marginTop": "30px", maxWidth:"800px", marginLeft:"auto", marginRight:"auto"}}>
          <Product />
          <ProductTwo />
          <ProductThree />
          <ProductFour />
          <ProductFive />
          <ProductSix />
          </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div>
      <h1 style={{ fontFamily: "Arial Black" , color: "#FFBF00", textAlign: "Center", style: "font-size:30px"}}>ADHAV'S PIZZA CO.</h1>
    </div>
  );
}

function Product() {
    return (
      <div style={{ fontFamily:"Courier New", textAlign:"Center", width:"250px"}}>
          <img src="margherita.jpg" alt="Margherita Pizza" width="150" style={{ borderRadius:"10px"}}></img>
          <h3>Margherita Pizza</h3> 
          <p>Tomato, Mozzarella Cheese</p>
          <p>$10</p>
      </div>
    );
  }

function ProductTwo() {
  return (
    <div style={{ fontFamily:"Courier New", textAlign:"Center", width:"250px"}}>
        <img src="spinaci.jpg" alt="Spinaci Pizza" width="150" style={{ borderRadius:"10px"}}></img>
        <h3>Spinach Pizza</h3> 
        <p>Tomato, Mozzarella Cheese, Spinach</p>
        <p>$12</p>
    </div>
  );
}

function ProductThree() {
  return (
    <div style={{ fontFamily:"Courier New", textAlign:"Center", width:"250px"}}>
        <img src="funghi.jpg" alt="Funghi Pizza" width="150" style={{ borderRadius:"10px"}}></img>
        <h3>Funghi Pizza</h3> 
        <p>Tomato, Mozzarella Cheese, Mushrooms, Onion</p>
        <p>$12</p>
    </div>
  );
}

function ProductFour() {
  return (
    <div style={{ fontFamily:"Courier New", textAlign:"Center", width:"250px"}}>
        <img src="salamino.jpg" alt="Salamino Pizza" width="150" style={{ borderRadius:"10px"}}></img>
        <h3>Salamino Pizza</h3> 
        <p>Tomato, Mozzarella Cheese, Pepperoni</p>
        <p>$15</p>
    </div>
  );
}

function ProductFive() {
  return (
    <div style={{ fontFamily:"Courier New", textAlign:"Center", width:"250px"}}>
        <img src="prosciutto.jpg" alt="Prosciutto Pizza" width="150" style={{ borderRadius:"10px"}}></img>
        <h3>Prosciutto Pizza</h3> 
        <p>Tomato, Mozzarella Cheese, Ham, Aragula, Burrete Cheese</p>
        <p>$18</p>
    </div>
  );
}

function ProductSix() {
  return (
    <div style={{ fontFamily:"Courier New", textAlign:"Center", width:"250px"}}>
        <img src="focaccia.jpg" alt="Focaccia" width="150" style={{ borderRadius:"10px"}}></img>
        <h3>Focaccia</h3> 
        <p>Bread with Italian Olive Oil and Rosemary</p>
        <p>$6</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
