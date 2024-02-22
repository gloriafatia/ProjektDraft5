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
        
          <PrivateLayout>
            <DashboardPage />
          </PrivateLayout>
       
      ),
      index: true,
    },
    {
      path: "UserManagement",
      element: (
        
          <PrivateLayout>
            <UserManagement />
          </PrivateLayout>
       
      ),
    },
    {
      path: "Transactions",
      element: (
       
          <PrivateLayout>
            <Transactions />
          </PrivateLayout>
       
      ),
    },
    {
      path: "LoginPage",
      element: (
        
          <PublicLayout>
            <LoginPage />
          </PublicLayout>
        
      ),
    },
    {
      path: "RegisterPage",
      element: (
        
          <PublicLayout>
            <RegisterPage />
          </PublicLayout>
        
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
