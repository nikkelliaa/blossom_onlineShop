import React from 'react';

const Cart = ({cartItems, removeFromCart}) => {
    const total = cartItems.reduce((acc, item) => acc + item.price, 0)
    return (
        <div>
            <h2>Cart</h2>
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index}>
                        {item.name} - ${item.price}
                        <button onClick={() => removeFromCart(index)}>Remove</button>
                    </li>
                ))}
            </ul>
            <p>Total: ${total}</p>
        </div>
    );
};

export default Cart;