import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
/* import Contact from "./components/Contact"; */
import ErrorPage from "./components/ErrorPage";
import ProductDetails from "./components/ProductDetails";
import AuthContext from "./utils/AuthContext.js";

/* import FoodDelivery from "./components/FoodDelivery"; */
const FoodDelivery = lazy(() => import("./components/FoodDelivery"));
const Contact = lazy(() => import("./components/Contact"));

const App = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    //authentication logic
    const data = {
      userInfo: "Fathima",
    };
    setUserName(data.userInfo);
  }, []);
  return (
    <AuthContext.Provider value={{ loggedInUserName: userName, setUserName }}>
      <div className="app-layout">
        <Header />

        <main className="main-content">
          <Outlet />
        </main>
        <Footer />
      </div>
    </AuthContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
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
        path: "/products/:productId",
        element: <ProductDetails />,
      },
      {
        path: "/food",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <FoodDelivery />
          </Suspense>
        ),
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
