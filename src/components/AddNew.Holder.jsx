import AddCircleIcon from "../icons/add-circle-icon";

export default function AddNewHolder({ title }) {
  return (
    <div className="flex justify-center items-center gap-4 p-4 shadow rounded-xl">
      <AddCircleIcon />
      <h1>{title}</h1>
    </div>
  );
}
