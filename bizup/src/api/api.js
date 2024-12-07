const API_BASE_URL = "/api";

export const fetchProducts = async () => {
    const response = await fetch(`${API_BASE_URL}/products`);
    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }
    return response.json();
};

export const fetchCartItems = async (userId) => {
    const response = await fetch(`${API_BASE_URL}/cart/${userId}`);
    if (!response.ok) {
        throw new Error("Failed to fetch cart items");
    }
    return response.json();
};

export const addItemToCart = async (userId, productId, quantity) => {
    const response = await fetch(`${API_BASE_URL}/cart`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, productId, quantity }),
    });
    if (!response.ok) {
        throw new Error("Failed to add item to cart");
    }
    return response.json();
};
