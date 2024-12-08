import axios from "axios";

const API_BASE_URL = "/api";

// Product API
export const fetchProducts = async () => {
    const response = await axios.get(`${API_BASE_URL}/products`);
    return response.data;
};

export const fetchProductById = async (id) => {
    const response = await axios.get(`${API_BASE_URL}/products/${id}`);
    return response.data;
};

export const addProduct = async (product) => {
    const response = await axios.post(`${API_BASE_URL}/products`, product);
    return response.data;
};

export const updateProduct = async (id, product) => {
    const response = await axios.put(`${API_BASE_URL}/products/${id}`, product);
    return response.data;
};

export const deleteProduct = async (id) => {
    const response = await axios.delete(`${API_BASE_URL}/products/${id}`);
    return response.data;
};

// Cart API
export const fetchCart = async (userId) => {
    const response = await axios.get(`${API_BASE_URL}/cart/${userId}`);
    return response.data;
};

export const addToCart = async (cartItem) => {
    const response = await axios.post(`${API_BASE_URL}/cart`, cartItem);
    return response.data;
};

export const updateCartItem = async (id, quantity) => {
    const response = await axios.put(`${API_BASE_URL}/cart/${id}`, { quantity });
    return response.data;
};

export const removeCartItem = async (id) => {
    const response = await axios.delete(`${API_BASE_URL}/cart/${id}`);
    return response.data;
};

// User API
export const fetchUser = async (userId) => {
    const response = await axios.get(`${API_BASE_URL}/users/${userId}`);
    return response.data;
};

export const updateUser = async (userId, userDetails) => {
    const response = await axios.put(`${API_BASE_URL}/users/${userId}`, userDetails);
    return response.data;
};

// Orders API
export const fetchOrders = async (userId) => {
    const response = await axios.get(`${API_BASE_URL}/orders/${userId}`);
    return response.data;
};

// Authentication API
export const registerUser = async (userDetails) => {
    const response = await axios.post(`${API_BASE_URL}/auth/register`, userDetails);
    return response.data;
};

export const loginUser = async (credentials) => {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, credentials);
    return response.data;
};

// this could work for the login asusmming the user would login email and password
export const login = async (email, password) => {
    const response = await fetch(`${API_BASE_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
        throw new Error("Invalid email or password");
    }
    return response.json();
};