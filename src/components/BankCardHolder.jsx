export default function BankCardHolder({ title }) {
  return (
    <div className="flex items-center text-[#9980AC] font-medium gap-4 p-4 shadow rounded-xl">
      <img src="/bank-card.png" alt="" />
      <h1>{title}</h1>
    </div>
  );
}
