import axios from "axios";

export const fetchData = async (id) => {
  const apiBaseUrl = import.meta.env.VITE_APP_BASE_URL;
  const apiKey = import.meta.env.VITE_APP_API_KEY;
  const appId = import.meta.env.VITE_APP_APP_ID;
  const orgId = import.meta.env.VITE_APP_ORGANIZATION_ID;
  const API_URL = `${apiBaseUrl}/products/${id}?organization_id=${orgId}&Appid=${appId}&Apikey=${apiKey}`; // Replace with your API URL
  try {
    const response = await axios.get(API_URL, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
