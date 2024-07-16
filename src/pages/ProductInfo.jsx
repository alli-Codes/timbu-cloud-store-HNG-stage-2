import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Product from "../components/Product";
import useAppState from "../state/createAppState";
import AddIcon from "../icons/add-icon";
import MinusIcon from "../icons/minus-icon";
import useFormat2Currency from "../composable/useFormat2Currency";
// import useGetProduct from "../composable/getProduct";
import { fetchData } from "../composable/getProduct";
import { addToCart, removeFromCart } from "../composable/cartHandlers";
import VaryCartItem from "../components/VaryCartItem";

export default function ProductInfo() {
  const [itemCounter, setItemCounter] = useState(1);
  const [isDisabled, setDisable] = useState(false);
  const context = useAppState();
  const { newItemPrice, setNewItemPrice } = useContext(context.UserContext);
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
  const productId = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData(productId.productId);
        setProduct(result);
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

  const handleAddToCart = function (product) {
    addToCart(product, newItemPrice != 0 ? newItemPrice : current_price);
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
      <div className="bg-white max-w-[30rem] md:max-w-[60rem] md:h-full py-20  md:p-8 lg:m-10 flex flex-col items-center md:flex-row rounded-lg">
        <section className="max-w-[8rem] h-full  md:max-w-[20rem] w-full flex justify-center items-center">
          <img
            src={`https://api.timbu.cloud/images/${photos[0].url ?? ""}`}
            className="w-full h-full object-contain"
            alt=""
          />
        </section>
        <section className="self-stretch max-w-[30rem] p-8 lg:px-16 flex flex-col justify-center gap-10 rounded-t-3xl">
          <div className="w-full flex flex-col gap-2">
            <h1 className="font-bold text-[#74330B] text-lg lg:text-2xl">
              {name}
            </h1>
            <p className="text-[#626262] text-sm">{description}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-semibold">
              {useFormat2Currency(current_price ?? 0)}
            </p>
            <VaryCartItem itemPrice={current_price} />
          </div>
          <div>
            <button
              onClick={() => handleAddToCart(product)}
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
