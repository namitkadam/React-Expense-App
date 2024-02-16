import { Outlet } from "react-router-dom";
import PageTitle from "../../components/PageTitle";
import { useContext } from "react";
import { ExpenseContext } from "../../Context/ExpenseContext";
import DarkMode from "../../components/DarkMode";

export default function RootLayout() {
  const { indexDB } = useContext(ExpenseContext);

  if (!indexDB) return <>Loader....</>;
  return (
    <div className="dark:bg-gray-900">
      <div className="w-full md:w-9/12 m-auto px-4 min-h-screen bg-slate-50 relative dark:bg-black">
        <div className="flex justify-between items-center">
          <PageTitle />
          <DarkMode />
        </div>
        <Outlet />
      </div>
    </div>
  );
}
