import { useState } from "react";
import ArrowRIcon from "../icons/arrow-right-icon";

export default function PaymentOption({ title, children }) {
  const [isVisible, setVisible] = useState(false);
  return (
    <div
      onClick={() => setVisible(!isVisible)}
      className="px-4 py-2 shadow rounded-xl"
    >
      <section className="py-2 flex justify-between items-center ">
        <h1>{title}</h1>
        <div className={isVisible ? "rotate-90" : ""}>
          <ArrowRIcon />
        </div>
      </section>
      {isVisible ? (
        <section className=" flex flex-col gap-2 py-4 border-t border-[#A6A6A6]">
          {children}
        </section>
      ) : (
        ""
      )}
    </div>
  );
}
