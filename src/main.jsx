import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { MovieProvider } from "./context/MovieContext.jsx";
import { WatchProvider } from "./context/WatchContex.jsx";
import { WatchlistProvider } from "./context/WatchlistContext.jsx";
import "./index.css";
import {account} from "./appwrite"


account
    .get()
    .then((user)=>{
        console.log("Connected...",user)
      })
    .catch((error)=>{
        console.log("Connection..")
      })

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WatchProvider>
      <MovieProvider>
        <WatchlistProvider>
          <App />
        </WatchlistProvider>
      </MovieProvider>
    </WatchProvider>
  </StrictMode>,
);
