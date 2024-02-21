import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import "./assets/weather-icons-master/css/weather-icons-wind.css";
import "./assets/weather-icons-master/css/weather-icons-wind.min.css";
import "./assets/weather-icons-master/css/weather-icons.css";
import "./assets/weather-icons-master/css/weather-icons.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
