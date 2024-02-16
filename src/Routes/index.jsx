import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import CreateExp from "../pages/CreateExpense";
import RootLayout from "../pages/Root";
import EditExpense from "../pages/EditExpense";

export const PublicRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/create-exp", element: <CreateExp /> },
      { path: "/edit-exp/:id", element: <EditExpense /> },
    ],
  },
]);
