export default function OrderSummary() {
  return (
    <div className="p-4 flex flex-col gap-2 font-medium shadow rounded-xl">
      <h1>Order Summary</h1>
      <section className="pt-4 text-[#626262] border-t border-black">
        <article className="flex justify-between">
          <p>Order</p>
          <p>N10,000</p>
        </article>
        <article className="flex justify-between">
          <p>Delivery Fee</p>
          <p>N1,000</p>
        </article>
        <article className="flex justify-between">
          <p>Total</p>
          <p>N11,000</p>
        </article>
      </section>
    </div>
  );
}
