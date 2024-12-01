import { createBrowserRouter } from "react-router-dom";

/**
 * Layouts
 *
 * Layouts are components that wrap the routes
 * It can be used to add common components like navbar, footer, etc
 * It can also be used to redirect user to login page if user is not authenticated
 */
import PublicLayout from "@/layouts/PublicLayout";
import PrivateLayout from "@/layouts/PrivateLayout";
import MainLayout from "./layouts/MainLayout";

/**
 * Pages and components
 */
import Home from "@/pages/Home";
import PackagesPage from "@/pages/Packages";
import CheckoutPackage from "@/pages/CheckoutPackage";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";
import ProfilePage from "@/pages/ProfilePage";
import NotFoundPage from "@/pages/NotFoundPage";

export const router = createBrowserRouter([
  /**
   * Public routes
   *
   * Layout that does not require user to be authenticated to access the routes
   * This layout will not redirect user to login page if user is not authenticated
   */
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      //==> Layout need navbar and footer <==//
      {
        path: "/",
        element: <MainLayout />,
        children: [
          { path: "/", element: <Home /> },
          { path: "/packages", element: <PackagesPage /> },
        ],
      },

      //==> Layout doesn't need navbar and footer <==//
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
    ],
  },

  /**
   * Private routes
   *
   * Layout that requires user to be authenticated to access the routes
   * This layout will redirect user to login page if user is not authenticated
   */
  {
    path: "/",
    element: <PrivateLayout />,
    children: [
      { path: "/packages/:id/checkout", element: <CheckoutPackage /> },
      { path: "/profile/:id", element: <ProfilePage /> },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
