import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { MovieProvider } from "./context/MovieContext.jsx";
import { WatchProvider } from "./context/WatchContex.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WatchProvider>
      <MovieProvider>
        <App />
      </MovieProvider>
    </WatchProvider>
  </StrictMode>,
);
