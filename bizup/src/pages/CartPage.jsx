import React, { useState, useEffect } from "react";

const CartPage = ({ userId }) => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        fetch(`/api/cart/${userId}`)
            .then((response) => response.json())
            .then((data) => setCartItems(data))
            .catch((err) => console.error("Failed to fetch cart items:", err));
    }, [userId]);

    const handleRemove = (itemId) => {
        fetch(`/api/cart/${itemId}`, { method: "DELETE" })
            .then(() => setCartItems(cartItems.filter((item) => item.id !== itemId)))
            .catch((err) => console.error("Failed to remove item:", err));
    };

    return (
        <div>
            <h1>Shopping Cart</h1>
            {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                    <img src={item.image_url} alt={item.name} />
                    <h2>{item.name}</h2>
                    <p>${item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                    <button onClick={() => handleRemove(item.id)}>Remove</button>
                </div>
            ))}
        </div>
    );
};

export default CartPage;