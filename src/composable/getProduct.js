import axios from "axios";
// import { useEffect, useState } from "react";

// export default function useGetProduct(id) {
//   let [data, setData] = useState();

//   useEffect(() => {
//     let config = {
//       method: "get",
//       maxBodyLength: Infinity,
//       url: `api/products/${id}?organization_id=7969044c6ce14183923973947f6b847f&Appid=DM5EKOPTYGT0T8C&Apikey=80ef3d8f25974c2e9d862d383a4a993e20240712202351870290`,
//       headers: {},
//     };
//     axios
//       .request(config)
//       .then((response) => {
//         const { name, description, photos, current_price } = response.data;
//         const image = photos[0].url;
//         setData({ name, description, image, current_price });
//       })
//       .catch((error) => {
//         //   console.log(error);
//       });
//   }, []);
//   return data;
// }

export const fetchData = async (id) => {
  const API_URL = `api/products/${id}?organization_id=7969044c6ce14183923973947f6b847f&Appid=DM5EKOPTYGT0T8C&Apikey=80ef3d8f25974c2e9d862d383a4a993e20240712202351870290`; // Replace with your API URL
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
