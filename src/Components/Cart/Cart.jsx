// import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let totalPopulation = 0;
    for(let i = 0; i < cart.length; i++){
        const country = cart[i]
        totalPopulation = totalPopulation + country.population;
    }
    return (
        <div>
            <h1>This is Cart: {cart.length}</h1>
            <p>Total Population: {totalPopulation}</p>
        </div>
    );
};

export default Cart;