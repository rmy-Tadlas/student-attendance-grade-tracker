import api from "./axiosClient";

export const checkAuth = async () => {
  try {
    const token = localStorage.getItem("auth_token");
    if (!token) return false;

    const response = await api.get("/user", {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data; // returns user info if valid
  } catch (error) {
    console.error("Auth check failed:", error);
    return false;
  }
};