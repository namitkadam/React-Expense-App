import React from "react";
import MoenyTabHader from "../../components/MoenyTabHader";
import AddExp from "../../components/AddExp/inpex";
import ExpenseList from "../../components/ExpenseList";
import { useContext } from "react";
import { ExpenseContext } from "../../Context/ExpenseContext";

function Home() {
  const { expenses } = useContext(ExpenseContext);
  const income = expenses
    .filter(({ transactionType }) => transactionType === "Income")
    .map((exp) => exp.amount)
    .map(Number)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const expense = expenses
    .filter(({ transactionType }) => transactionType === "Expense")
    .map((exp) => exp.amount)
    .map(Number)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  return (
    <>
      <div className="warpper flex justify-between gap-4 border-y-2 bg">
        <MoenyTabHader
          title={"Income"}
          value={income}
          valueClass="text-blue-500"
        />
        <MoenyTabHader
          title={"Exp."}
          value={expense}
          valueClass="text-red-500"
        />
        <MoenyTabHader title={"Total"} value={income - expense} />
      </div>
      <div>
        <ExpenseList />
      </div>
      <AddExp />
    </>
  );
}

export default Home;
