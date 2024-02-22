import Button from "../Button";
import { useContext } from "react";
import { ExpenseContext } from "../../Context/ExpenseContext";
import { Link } from "react-router-dom";

export default function ExpenseSingle(prop) {
  const { deletIndexdb } = useContext(ExpenseContext);

  return (
    <div>
      <div className="bg-gray-100 mx-auto border-gray-500 border rounded-sm text-gray-700 mb-3 h-30 dark:bg-zinc-900 dark:border-zinc-500 ">
        <div
          className={`flex p-3 border-l-8  ${
            prop.TransactionType === "Income"
              ? "border-green-600"
              : "border-red-600"
          }`}
        >
          <div className="space-y-1 border-r-2 pr-3 max-sm:pr-2">
            <div className="text-base leading-5 font-bold dark:text-gray-300">
              <span className="text-sm leading-4 font-semibold text-gray-500 dark:text-zinc-400">
                {" "}
                Account #
              </span>{" "}
              {prop.Account}
            </div>

            <div className="text-sm leading-5 font-semibold dark:text-zinc-400">
              {prop.Date}
            </div>
          </div>
          <div className="flex-1 border-r-2 pr-3 max-sm:ml-2 max-sm:pr-2 ">
            <div className="ml-3 space-y-1 max-sm:m-0">
              <div className="text-base leading-4 font-bold dark:text-gray-300">
                <span className="text-sm leading-4 font-semibold text-gray-500 dark:text-zinc-400">
                  {" "}
                  Category #
                </span>{" "}
                {prop.Category}
              </div>
              <div className="text-base leading-4 font-bold dark:text-gray-300">
                <span className="text-sm leading-4 font-semibold text-gray-500 dark:text-zinc-400">
                  {" "}
                  Note #
                </span>{" "}
                {prop.Note}
              </div>
            </div>
          </div>
          <div className="flex items-center border-r-2 pr-3 max-sm:pr-2">
            <div>
              <div
                className={`p-1.5 ml-3 w-20 rounded-lg  max-sm:ml-2   ${
                  prop.TransactionType === "Income"
                    ? "bg-green-600"
                    : "bg-red-600"
                }`}
              >
                <div className="uppercase text-base leading-4 font-bold text-center text-white">
                  {prop.Amount}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="p-3 px-5 flex items-center max-sm:p-1 max-sm:flex-col justify-around">
              <Link
                to={`/Expense-App/edit-exp/${prop.Id}`}
                className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
              >
                Edit
              </Link>
              <button
                type="button"
                className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                onClick={() => deletIndexdb(prop.Id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
