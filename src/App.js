import { Fragment, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {
  //create list of products
  const [products, saveProducts] = useState([
    { id: 1, name: "ShirtReact", price: 50 },
    { id: 2, name: "ShirtVue", price: 100 },
    { id: 3, name: "ShirtAngular", price: 20 },
    { id: 4, name: "ShirtNode", price: 50 },
  ]);

  //state for a shopping cart

  const [cart, addCart] = useState([]);

  return (
    <Fragment>
      <Header />

      <h1>Lista de productos</h1>
      {products.map((product) => (
        <Products
          key={product.id}
          product={product}
          products={products}
          cart={cart}
          addCart={addCart}
        />
      ))}

        <Cart 
        cart={cart} 
        addCart={addCart}
        />

      <Footer />
    </Fragment>
  );
}

export default App;
