
const BASE_URL = "http://localhost:6767";

// GET PROFILE
export const getProfile = async (id) => {
  const response = await fetch(`${BASE_URL}/profiles/${id}`);

  if (!response.ok) {
    throw new Error("Unable to fetch profile data");
  }

  return response.json();
};

// SAVE CONTACT
export const saveContact = async (contact) => {
  const response = await fetch(`${BASE_URL}/contacts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contact),
  });

  if (!response.ok) {
    throw new Error("Unable to send message");
  }

  return response.json();
};

// AI CHAT
export const askAI = async (message) => {
  const response = await fetch(`${BASE_URL}/api/ai/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  });

  if (!response.ok) {
    throw new Error("Unable to get AI response");
  }

  return response.json();
};

// ADMIN LOGIN
export const adminLogin = async (username, password) => {
  const response = await fetch(`${BASE_URL}/api/admin/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    throw new Error("Invalid username or password");
  }

  const data = await response.json();

  if (!data.token) {
    throw new Error("Token not received from server");
  }

  localStorage.setItem("token", data.token);

  return data;
};

// AUTHORIZED API REQUEST
export const authorizedFetch = async (url, options = {}) => {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Please login first");
  }

  const response = await fetch(`${BASE_URL}${url}`, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }

  return response;
};

// ADMIN LOGOUT
export const adminLogout = () => {
  localStorage.removeItem("token");
  window.dispatchEvent(new Event("auth-changed"));
};
// ADMIN REGISTER
export const adminRegister = async (username, password) => {
  const response = await fetch(`${BASE_URL}/api/admin/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  const message = await response.text();

  if (!response.ok) {
    throw new Error(message || "Registration failed");
  }

  return message;
};
