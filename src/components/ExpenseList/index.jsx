import { useContext } from "react";
import { ExpenseContext } from "../../Context/ExpenseContext";
import ExpenseSingle from "../ExpenseSingle";

export default function ExpenseList() {
  const { expenses } = useContext(ExpenseContext);
  return (
    <div className="container mx-auto bg-gray-50 min-h-screen mt-8 antialiased dark:bg-black">
      {expenses.map((expense, index) => (
        <ExpenseSingle
          key={`exp-list-${expense.id}-${index}`}
          Date={expense.date}
          Account={expense.account}
          Amount={expense.amount}
          Category={expense.category}
          Note={expense.note}
          Id={expense.id}
          TransactionType={expense.transactionType}
        />
      ))}
    </div>
  );
}
