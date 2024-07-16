import { useContext } from "react";
import useAppState from "../state/createAppState";

export default function Pagination() {
  const context = useAppState();
  const { page, setPage } = useContext(context.UserContext);
  return (
    <div className="self-end flex gap-2">
      <button
        onClick={() => setPage(1)}
        className="p-4 w-1 h-1 flex items-center justify-center border border-2 rounded"
      >
        1
      </button>
      <button
        onClick={() => setPage(2)}
        className="p-4 w-1 h-1 flex items-center justify-center border border-2 rounded"
      >
        2
      </button>
      <button
        onClick={() => setPage(1)}
        className="p-4 w-1 h-1 flex items-center justify-center border border-2 rounded"
      >
        3
      </button>
    </div>
  );
}
