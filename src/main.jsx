import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "swiper/css";

// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

// fonts and icons
import "././assets/css/icofont.min.css";
import "././assets/css/animate.css";
import "././assets/css/style.min.css";
import Home from "./Home/Home.jsx";
import Blog from "./Blog.jsx";
import Shop from "./Shop/Shop.jsx";
import About from "./About/About.jsx";
import Contact from "./Contact/Contact.jsx";
import SingleProduct from "./Shop/SingleProduct.jsx";
import CartPage from "./Shop/CartPage.jsx";
import SingleBlog from "./SingleBlog.jsx";
import AuthProvider from "./Context/AuthProvider.jsx";
import PrivateRoute from "./private route/PrivateRoute.jsx";
import Login from "./Component/Login.jsx";
import SignUp from "./Component/SignUp.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:id",
        element: <SingleBlog />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "shop/:id",
        element: <SingleProduct />,
      },
      {
        path: "cart-page",
        element: (
          <PrivateRoute>
            <CartPage />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/sign-up",
    element: <SignUp/>,
  },
]);

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
