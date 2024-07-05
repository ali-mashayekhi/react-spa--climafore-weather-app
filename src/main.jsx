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
import TempUnitCtxProvider from "./store/tempUnit/TempUnitCtxProvider.jsx";
import WatchedCitiesCtxProvider from "./store/watchCities/WatchedCitiesCtxProvider.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <WatchedCitiesCtxProvider>
        <TempUnitCtxProvider>
          <PositionCoordsCtxProvider>
            <App />
          </PositionCoordsCtxProvider>
        </TempUnitCtxProvider>
      </WatchedCitiesCtxProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
