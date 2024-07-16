import axios from "axios";

export const fetchData = async (id) => {
  const API_URL = `api/products/${id}?organization_id=7969044c6ce14183923973947f6b847f&Appid=DM5EKOPTYGT0T8C&Apikey=80ef3d8f25974c2e9d862d383a4a993e20240712202351870290`; // Replace with your API URL
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
