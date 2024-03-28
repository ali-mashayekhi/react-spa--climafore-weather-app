import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import PositionCoordsCtxProvider from "./store/PositionCoordsCtxProvider.jsx";

import "./assets/weather-icons-master/css/weather-icons-wind.css";
import "./assets/weather-icons-master/css/weather-icons-wind.min.css";
import "./assets/weather-icons-master/css/weather-icons.css";
import "./assets/weather-icons-master/css/weather-icons.min.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <PositionCoordsCtxProvider>
        <App />
      </PositionCoordsCtxProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
