import React from "react";
import "./cart.css";
import Products from "./Products";

const Cart = ({ cart , addCart={addCart} }) => {
    return (
        <div className="cart">
            <h2>Tu carrito de compras</h2>
            {cart.length === 0 ?
                <p>No hay productos</p>
                :
                cart.map((product) => <Products key={product.id} product={product} cart= {cart} addCart={addCart} />)
            }
        </div>
    );
};

export default Cart;
