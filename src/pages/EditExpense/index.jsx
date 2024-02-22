import Input from "../../components/Input";
import { Link, useParams } from "react-router-dom";
import Button from "../../components/Button";
import { useContext, useState } from "react";
import { ExpenseContext } from "../../Context/ExpenseContext";
import SelectTransaction from "../../components/SelectTransaction";
import { useEffect } from "react";

const initCreateExp = {
  account: "",
  category: "",
  date: "",
  amount: "",
  note: "",
  transactionType: "choose_a_exp",
};

export default function EditExpense() {
  const { getSingleDataDB, getSingleData, updateIndexdb } =
    useContext(ExpenseContext);
  const [update, setUpdate] = useState({ ...initCreateExp });
  let { id } = useParams();

  useEffect(() => {
    if (getSingleDataDB) {
      setUpdate(getSingleDataDB);
    }
  }, [getSingleDataDB]);

  useEffect(() => {
    if (id) getSingleData(id);
  }, []);

  const UpdateExpense = (e) => {
    e.preventDefault();
    window.location = "/React-Expense-App";
    updateIndexdb(update);
    setUpdate({ ...initCreateExp });
  };

  function onChangeval(e) {
    const value = (res) => ({
      ...res,
      ...update,
      [e.target.name]: e.target.value,
    });
    setUpdate(value);
  }

  return (
    <form onSubmit={UpdateExpense}>
      <div className="flex flex-col gap-3">
        <Input
          type="date"
          label="Date"
          id="Date"
          name="date"
          value={update.date}
          onChange={onChangeval}
          required="required"
        />
        <Input
          label="Account"
          id="account"
          name="account"
          value={update.account}
          onChange={onChangeval}
          required="required"
        />
        <Input
          label="Amount"
          id="amount"
          name="amount"
          value={update.amount}
          onChange={onChangeval}
          required="required"
        />
        <Input
          label="Category"
          id="category"
          name="category"
          value={update.category}
          onChange={onChangeval}
          required="required"
        />
        <Input
          label="Note"
          id="note"
          name="note"
          value={update.note}
          onChange={onChangeval}
        />
        <SelectTransaction
          id="transactionType"
          name="transactionType"
          value={update.transactionType}
          onChange={onChangeval}
          required="required"
        />
        <div className="wrapper flex justify-center">
          <Button valueClass="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 w-1/2">
            Update
          </Button>
          <Link
            to="/React-Expense-App"
            className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900 w-1/2"
          >
            Cancel
          </Link>
        </div>
      </div>
    </form>
  );
}
