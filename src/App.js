import { ExpenseProvider } from "./Context/ExpenseContext";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import { PublicRouter } from "./Routes";

function App() {
  return (
    <ExpenseProvider>
      <RouterProvider router={PublicRouter} />
    </ExpenseProvider>
  );
}

export default App;
