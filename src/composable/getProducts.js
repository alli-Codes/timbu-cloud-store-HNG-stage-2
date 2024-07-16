import axios from "axios";

// Replace with your API URL

export const fetchData = async (page) => {
  const apiBaseUrl = import.meta.env.VITE_APP_BASE_URL;
  const apiKey = import.meta.env.VITE_APP_API_KEY;
  const appId = import.meta.env.VITE_APP_APP_ID;
  const orgId = import.meta.env.VITE_APP_ORGANIZATION_ID;

  console.log(apiBaseUrl);
  const API_URL = `${apiBaseUrl}/products?organization_id=${orgId}&Appid=${appId}&Apikey=${apiKey}&size=10&page=${page}`;
  try {
    const response = await axios.get(API_URL, {
      headers: {
        "Content-Type": "application/json",
        // Add other headers if necessary
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
