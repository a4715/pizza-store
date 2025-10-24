import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div>
      <Header />
      <PizzaImage />
      <p><b>Margherita Pizza</b></p>
      <p>Tomato, Mozzarella Cheese</p>
      <p>10</p>
    </div>
  );
}

function Header() {
  return (
    <div>
      <h2>Adhav's Pizza Co.</h2>
    </div>
  );
}

function PizzaImage() {
  return (
    <div>
    <img src="margherita.jpg" alt="Margherita Pizza"></img>  
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
