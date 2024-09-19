import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "./input.css";
import Navbar from "./components/home/navbar";
import Popular from "./components/home/popular";
import Newest from "./components/home/newest";
import Pagination from "./components/home/pagination";
import { Router, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";

const root = ReactDOM.createRoot(document.getElementById("root"));
const route=createBrowserRouter([
 {
  path:"/",
  element:<Home/>
 } 
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={route}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
