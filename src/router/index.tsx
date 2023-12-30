import { lazy } from "react";
import { useRoutes } from "react-router-dom";

import PrivateGuard from "../guards/PrivateGuard";
import PublicGuard from "../guards/PublicGuard";

import Loadable from "./Loadable";
import PrivateLayout from "../layouts/PrivateLayout";
import PublicLayout from "../layouts/PublicLayout";

import DashboardPage from "../pages/Dashboard/Dashboard";
import UserManagement from "../pages/UserManagement/UserManagemnt";
import Transactions from "../pages/Transactions/Transactions";

const Router = () =>
  useRoutes([
    {
      path: "/",
      element: (
        <PrivateGuard>
          <PrivateLayout>
            <DashboardPage />
          </PrivateLayout>
        </PrivateGuard>
      ),
      index: true,
    },
    {
      path: "UserManagement",
      element: (
        <PrivateGuard>
          <PrivateLayout>
            <UserManagement />
          </PrivateLayout>
        </PrivateGuard>
      ),
    },
    {
      path: "Transactions",
      element: (
        <PrivateGuard>
          <PrivateLayout>
            <Transactions />
          </PrivateLayout>
        </PrivateGuard>
      ),
    },
    {
      path: "LoginPage",
      element: (
        <PublicGuard>
          <PublicLayout>
            <LoginPage />
          </PublicLayout>
        </PublicGuard>
      ),
    },
    {
      path: "RegisterPage",
      element: (
        <PublicGuard>
          <PublicLayout>
            <RegisterPage />
          </PublicLayout>
        </PublicGuard>
      ),
    },
    {
      path: "*",
      children: [
        {
          path: "404",
          element: <Error404Page />,
        },
      ],
    },
  ]);

export default Router;

// Guest routes
const LoginPage = Loadable(
  lazy(() => import("../pages/Auth/LoginPage/LoginPage"))
);
const RegisterPage = Loadable(
  lazy(() => import("../pages/Auth/RegisterPage/RegisterPage"))
);

// Auth routes
const Dashboard = Loadable(lazy(() => import("../pages/Dashboard/Dashboard")));

// Error routes
const Error404Page = Loadable(lazy(() => import("../pages/NotFound/NotFound")));
