import useFormat2Currency from "../composable/useFormat2Currency";

export default function OrderSummary({ products }) {
  // const {productPrice} = products
  console.log(products);
  const productPrices = products.map((product) => product.current_price);
  const sum = productPrices.reduce((acc, n) => {
    return (acc += parseInt(n));
  }, 0);
  console.log(productPrices);
  const sumOfPrices = useFormat2Currency(sum);
  const totalPrices = useFormat2Currency(sum + 1000);
  const deliveryFee = useFormat2Currency(1000);
  return (
    <div className="bg-white p-4 flex flex-col gap-2 font-medium rounded">
      <h1>Order Summary</h1>
      <section className="pt-4 text-[#626262] border-t border-black">
        <article className="flex justify-between">
          <p>Order</p>
          <p>{sumOfPrices}</p>
        </article>
        <article className="flex justify-between">
          <p>Delivery Fee</p>
          <p>{deliveryFee}</p>
        </article>
        <article className="flex justify-between">
          <p>Total</p>
          <p>{totalPrices}</p>
        </article>
      </section>
    </div>
  );
}
