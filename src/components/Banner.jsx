export default function Banner() {
  return (
    <div className="py-8 px-8 flex flex-col justify-center gap-2">
      <section className="text-center">
        <h1 className="text-2xl font-semibold">Brands We Carry</h1>
        <p className="text-[#959595]">
          We offer a wide range of products from top brands.
        </p>
      </section>
      <section className=" w-full flex justify-center items-center flex-wrap lg:gap-20">
        <img className="w-20" src="/brands/brand1.png" alt="" />
        <img className="w-20" src="/brands/brand2.png" alt="" />
        <img className="w-20" src="/brands/brand3.png" alt="" />
        <img className="w-20" src="/brands/brand4.png" alt="" />
      </section>
    </div>
  );
}
