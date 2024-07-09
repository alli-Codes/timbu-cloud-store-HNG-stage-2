import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div className="bg-[#E6C3A2] h-[80vh] px-8 flex flex-col lg:flex-row items-start lg:items-center justify-center gap-8 lg:justify-end relative rounded-xl">
      <section className="  h-full hidden lg:flex justify-center">
        <img className=" bottom-0" src="/woman.png" alt="" />
      </section>
      <section className="w-full text-white flex flex-col lg:items-start items-center text-center lg:text-left lg:justify-start justify-center gap-6">
        <h1 className="max-w-[24.5rem] text-4xl font-bold hero__text">
          Radiate Beauty and Smell Divine with{" "}
          <span className="text-[#B97938]">LuxeLook.</span>
        </h1>
        <p className="max-w-[34.5rem]">
          We have everything you need for beauty, from creams and perfumes to
          cosmetics.
        </p>
        <button
          onClick={() => scrollTo(0, 700)}
          className="bg-white text-[#7D3F10] font-bold p-4 rounded-[6.25rem]"
        >
          Start shopping now
        </button>
      </section>
    </div>
  );
}
