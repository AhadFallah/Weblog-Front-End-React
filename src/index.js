import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./input.css";
import Navbar from "./components/home/navbar";
import Title from "./components/home/title";
import DarkMode from "./components/home/darkMode";
import Popular from "./components/home/popular";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
	<div className="bg-white dark:bg-1a-black h-screen w-screen text-1a-black dark:text-white">
		<Navbar/>
		<Popular/>
</div>
	</React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
