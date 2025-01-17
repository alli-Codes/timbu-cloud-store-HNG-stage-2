export default function Banner() {
  return (
    <div className="mb-10 px-8 flex flex-col items-center justify-center gap-2">
      <section className="text-center hidden">
        <h1 className="text-2xl font-bold">Brands We Carry</h1>
        <p className="text-[#959595]">
          We offer a wide range of products from top brands.
        </p>
      </section>
      <section className=" w-ful flex items-center flex-wrap lg:gap-20">
        <img className="w-20" src="/brands/brand1.png" alt="" />
        <img className="w-20" src="/brands/brand2.png" alt="" />
        <img className="w-20" src="/brands/brand3.png" alt="" />
        <img className="w-20" src="/brands/brand4.png" alt="" />
      </section>
    </div>
  );
}
