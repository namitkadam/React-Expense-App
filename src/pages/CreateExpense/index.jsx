import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { ExpenseContext } from "../../Context/ExpenseContext";
import SelectTransaction from "../../components/SelectTransaction";

const initCreateExp = {
  account: "",
  category: "",
  date: "",
  amount: "",
  note: "",
  transactionType: "choose_a_exp",
  id: new Date().getTime(),
};
export default function CreateExp() {
  const [createExp, setCreateExp] = useState({ ...initCreateExp });
  const { addIndexDB } = useContext(ExpenseContext);

  const SumbmitExpense = (e) => {
    e.preventDefault();
    window.location = "/";
    if (!createExp) return;
    addIndexDB(createExp);
    setCreateExp({ ...initCreateExp });
  };

  function onChangeval(e) {
    const val = (res) => ({
      ...res,
      [e.target.name]: e.target.value,
    });
    setCreateExp(val);
  }

  return (
    <>
      <form action="" onSubmit={SumbmitExpense}>
        <div className="flex flex-col gap-3">
          <Input
            type="date"
            label="Date"
            id="Date"
            name="date"
            value={createExp.date}
            onChange={onChangeval}
            required="required"
          />
          <Input
            label="Account"
            id="account"
            name="account"
            value={createExp.account}
            onChange={onChangeval}
            required="required"
          />
          <Input
            type="Number"
            label="Amount"
            id="amount"
            name="amount"
            value={createExp.amount}
            onChange={onChangeval}
            required="required"
          />
          <Input
            label="Category"
            id="category"
            name="category"
            value={createExp.category}
            onChange={onChangeval}
            required="required"
          />
          <Input
            label="Note"
            id="note"
            name="note"
            onChange={onChangeval}
            value={createExp.note}
          />
          <SelectTransaction
            id="transactionType"
            name="transactionType"
            onChange={onChangeval}
            value={createExp.transactionType}
            required="required"
          />
          <div className="wrapper flex justify-center">
            <Button valueClass="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 w-1/2">
              Save
            </Button>
            <Link
              to="/"
              className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900 w-1/2"
            >
              Cancel
            </Link>
          </div>
        </div>
      </form>
    </>
  );
}
