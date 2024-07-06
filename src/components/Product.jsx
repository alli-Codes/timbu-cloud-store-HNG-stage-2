import HeartIcon from "../icons/heart-icon";

export default function Product() {
  return (
    <div className="flex flex-col gap-2">
      <section className="bg-[#FAFAFA] h-36 w-36 p-4 rounded-lg relative">
        <div className="absolute right-0 -translate-x-2">
          <HeartIcon />
        </div>
        <img src="/product2.png" alt="" />
      </section>
      <section>
        <h1 className="font-medium">Fair & White</h1>
        <p className="text-[#626262] text-sm">N10, 000</p>
      </section>
    </div>
  );
}
