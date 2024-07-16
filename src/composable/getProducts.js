import axios from "axios";

// Replace with your API URL

export const fetchData = async (page) => {
  const API_URL = `https://api.timbu.cloud/products?organization_id=7969044c6ce14183923973947f6b847f&Appid=DM5EKOPTYGT0T8C&Apikey=80ef3d8f25974c2e9d862d383a4a993e20240712202351870290&size=10&page=${page}`;
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
