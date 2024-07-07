import AddNewHolder from "../components/AddNew.Holder";
import BankCardHolder from "../components/BankCardHolder";
import PaymentOption from "../components/PaymentOption";

export default function CheckOut() {
  return (
    <div className="flex flex-col p-8 gap-8">
      <PaymentOption title="Choose Bank">
        <section className="flex justify-between">
          <p>First Bank</p>
          <input type="radio" />
        </section>
        <section className="flex justify-between">
          <p>United Bank of Africa</p>
          <input type="radio" />
        </section>
        <section className="flex justify-between">
          <p>Guaranteed Trusted Bank</p>
          <input type="radio" />
        </section>
      </PaymentOption>
      <PaymentOption title="Debit Cards">
        <AddNewHolder title="Add New Card" />
      </PaymentOption>
      <PaymentOption title="Credit Cards">
        <BankCardHolder title="UBA Bank xxxx54" />
        <BankCardHolder title="GT Bank xxxx58" />
        <AddNewHolder title="Add New Card" />
      </PaymentOption>
      <AddNewHolder title="Add New Method" />
    </div>
  );
}
