import { Link } from "react-router-dom";

export default function AddExp() {
  return (
    <Link
      to="/Expense-App/create-exp"
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-extrabold rounded-lg text-2xl px-[1.1rem] py-[0.6rem] text-center inline-flex items-center dark:bg-white dark:text-black  dark:hover:bg-slate-300 dark:focus:ring-slate-400 fixed bottom-[8%] right-[16%]"
    >
      +
    </Link>
  );
}
