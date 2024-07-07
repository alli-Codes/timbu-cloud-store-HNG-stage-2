export default function Address() {
  return (
    <section className="p-4 flex flex-col gap-2 font-medium shadow rounded-xl">
      <article className="flex justify-between text-[#626262]">
        <p>Address</p>
        <select name="address" id="address">
          <option value="Ajao Estate, Lagos">Ajao Estate, Lagos</option>
          <option value="Ajao Estate, Lagos">Ajao Estate, Lagos</option>
          <option value="Ajao Estate, Lagos">Ajao Estate, Lagos</option>
        </select>
      </article>
    </section>
  );
}
