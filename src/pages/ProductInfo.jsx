import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Product from "../components/Product";
import useAppState from "../state/createAppState";
import AddIcon from "../icons/add-icon";
import MinusIcon from "../icons/minus-icon";
import useFormat2Currency from "../composable/useFormat2Currency";
// import useGetProduct from "../composable/getProduct";
import { fetchData } from "../composable/getProduct";

export default function ProductInfo() {
  const [itemCounter, setItemCounter] = useState(1);
  const [isDisabled, setDisable] = useState(false);
  const context = useAppState();
  // const [products] = useContext(context.UserContext);
  const id = localStorage.getItem("productId");
  // const product = useGetProduct(id);
  // console.log(product);
  // const { productImage, productName, productDescription, productPrice } =
  //   product;
  //
  const [isAlreadyInCart, setAlreadyInCart] = useState(true);
  const prevCartItems = JSON.parse(localStorage.getItem("cartItems"));
  const [photoUrl, setPhotoUrl] = useState();
  const [productName, setProductName] = useState();
  const checkIfItemExist = function () {
    if (prevCartItems != null) {
      let searched = prevCartItems.findIndex((item) => item.id == id);
      if (searched < 0) setAlreadyInCart(false);
    }
  };
  // const { name, description, current_price, image } = product ?? "";
  // setPhotoUrl(photos?.map((photo) => photo.url) ?? "");
  // setProductName(name);
  // console.log(id);
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { name, description, current_price, photos } = product ?? "";

  const navigate = useNavigate();

  // useEffect(() => {
  // const queryParams = new URLSearchParams({
  //   param1: "00e23c010d104611a97143034fa60b76",
  // });
  // console.log(navigate.push());
  // });
  const productId = useParams();
  useEffect(() => {
    // navigate(`/productinfo/00e23c010d104611a97143034fa60b76`);
    const getData = async () => {
      try {
        const result = await fetchData(productId.productId);
        setProduct(result);
        console.log(result, productId);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getData();
    checkIfItemExist();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }

  const addToCart = function () {
    product.itemCounter = itemCounter;
    if (prevCartItems != null) {
      prevCartItems.push(product);
      localStorage.setItem("cartItems", JSON.stringify(prevCartItems));
    } else localStorage.setItem("cartItems", JSON.stringify([product]));
    setDisable(true);
  };

  const incrementItems = function () {
    let counter = itemCounter;
    counter += 1;
    setItemCounter(counter);
  };

  const decrementItems = function () {
    if (itemCounter != 1) {
      let counter = itemCounter;
      counter -= 1;
      setItemCounter(counter);
    }
  };
  return (
    <div className="md:h-[80vh] lg:px-8 flex justify-center items-center">
      <div className="bg-white max-w-[30rem] md:max-w-[60rem] md:p-8 lg:m-10 flex flex-col items-center md:flex-row rounded-lg">
        <section className="max-w-[28rem] md:max-w-[20rem] flex justify-center">
          <img
            src={`https://api.timbu.cloud/images/${photos[0].url ?? ""}`}
            className="w-full object-cover"
            alt=""
          />
        </section>
        <section className="self-stretch p-8 lg:px-16 flex flex-col justify-center gap-10 rounded-t-3xl">
          <div className="w-full flex flex-col gap-2">
            <h1 className="font-bold text-[#74330B] text-lg lg:text-2xl">
              {name}
            </h1>
            <p className="text-[#626262] text-sm">{description}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-semibold">
              {useFormat2Currency(current_price ?? 0)}
            </p>
            <div className="px-2 py-1 flex items-center gap-2  text-xl font-semibold rounded-xl">
              <button
                onClick={decrementItems}
                className="bg-[#E0B185] p-1 rounded"
              >
                <MinusIcon />
              </button>
              <p className="w-10 flex justify-center text-sm">{itemCounter}</p>
              <button
                onClick={incrementItems}
                className="bg-[#E0B185] p-1 rounded"
              >
                <AddIcon />
              </button>
            </div>
          </div>
          <div>
            <button
              onClick={addToCart}
              className={`${
                !isDisabled ? "bg-[#E0B185]" : "bg-[#a29b9e]"
              } w-full p-2 text-white text-lg  rounded`}
              disabled={isDisabled}
            >
              Add to cart
            </button>
          </div>
        </section>
      </div>
    </div>
  );
  // return <div>{photoUrl}</div>;
}
