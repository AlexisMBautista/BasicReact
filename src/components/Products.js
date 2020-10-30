import React from 'react';



const Products  = ({product, cart, addCart, products}) => {

    const {id, name, price} = product;

    // add to shopping cart 

    const selectProduct = (id) => {
        const product = products.filter(product => product.id === id)[0];
        
        addCart([
            ...cart, 
            product
        ]);
    }

    const deleteProduct = (id) => {
        const products = cart.filter(product => product.id !== id);

        addCart(products);
    }

    




    return (
        <div>
            <h3>{name}</h3>
            <p>${price}</p>

            {
                products 
                ?
                <button type="button"
                onClick = {() => selectProduct(id)}
                >Comprar</button>
                :
                <button type="button"
                onClick= {() => deleteProduct(id)}
                >Eliminar</button>

            }
           
        </div>
    );
}




 
export default Products;