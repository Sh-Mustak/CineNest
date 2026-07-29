import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { MovieProvider } from "./context/MovieContext.jsx";
import { WatchProvider } from "./context/WatchContex.jsx";
import { WatchlistProvider } from "./context/WatchlistContext.jsx";
import "./index.css";
import {account} from "./appwrite"
import AuthProvider from "./context/AppwriteContext/AuthProvider.jsx";


account
    .get()
    .then((user)=>{
        console.log("Connected...",user)
      })
    .catch((error)=>{
        console.log("Connection..",error)
      })

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
    <WatchProvider>
      <MovieProvider>
        <WatchlistProvider>
          <App />
        </WatchlistProvider>
      </MovieProvider>
    </WatchProvider>
    </AuthProvider>
  </StrictMode>,
);
