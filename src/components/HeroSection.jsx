import HeroArrow from "./HeroArrow";

export default function HeroSection() {
  return (
    <div className="bg-[#E6C3A2] h-[80vh] md:h-auto px-8 flex flex-col lg:flex-row items-start lg:items-center justify-center gap-32 lg:justify-end relative rounded-xl">
      <section className="  h-full hidden lg:flex justify-center">
        <img className="w-[48rem] bottom-0" src="/woman.png" alt="" />
      </section>
      <section className="w-full text-white flex flex-col lg:items-start items-center text-center lg:text-left lg:justify-start justify-center gap-6 relative">
        <h1 className="max-w-[24.5rem] text-4xl font-bold hero__text">
          Radiate Beauty and Smell Divine with{" "}
          <span className="text-[#B97938]">LuxeLook.</span>
        </h1>
        <p className="max-w-[34.5rem]">
          We have everything you need for beauty, from creams and perfumes to
          cosmetics.
        </p>
        <button
          onClick={() => scrollTo(0, 600)}
          className="bg-white text-[#7D3F10] font-medium py-2 px-8 rounded-[6.25rem]"
        >
          Shop now
        </button>
        <HeroArrow />
      </section>
    </div>
  );
}
