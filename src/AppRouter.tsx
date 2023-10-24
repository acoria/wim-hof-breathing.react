import { createBrowserRouter } from "react-router-dom";
import { DashboardPage } from "./pages/DashboardPage";

export const AppRouter = createBrowserRouter([
  { path: "/", element: <DashboardPage /> },
]);
