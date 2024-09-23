import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "./input.css";
import Navbar from "./components/home/navbar";
import { Router, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Category from "./pages/category";
import { RecoilRoot } from "recoil";
import Search from "./pages/search";

const root = ReactDOM.createRoot(document.getElementById("root"));
const route = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/category",
        element: <Category />,
      },{
        path: "/search",
        element: <Search />,
      },
    ],
  },
]);

root.render(

    <div className="bg-white dark:bg-1a-black text-1a-black dark:text-white">
  <React.StrictMode>
      <RecoilRoot>
        <RouterProvider router={route} />
      </RecoilRoot>
  </React.StrictMode>

    </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
