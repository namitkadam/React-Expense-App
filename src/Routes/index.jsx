import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import CreateExp from "../pages/CreateExpense";
import RootLayout from "../pages/Root";
import EditExpense from "../pages/EditExpense";

export const PublicRouter = createBrowserRouter([
  {
    path: "/Expense-App",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/Expense-App/create-exp", element: <CreateExp /> },
      { path: "/Expense-App/edit-exp/:id", element: <EditExpense /> },
    ],
  },
]);
