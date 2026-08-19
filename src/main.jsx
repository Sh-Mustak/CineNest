import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { MovieProvider } from "./context/MovieContext.jsx";
import { WatchProvider } from "./context/WatchContex.jsx";
import {Toaster} from "sonner"
import "./index.css";
import {account} from "./appwrite"
import AuthProvider from "./context/AppwriteContext/AuthProvider.jsx";
import WatchlistProvider from "./context/AppwriteContext/WatchlistProvider.jsx";


account
    .get()
    .then(()=>{
        
      })
    .catch(()=>{
        
      })

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
    <WatchProvider>
      <MovieProvider>
        <WatchlistProvider>
          <App />
          <Toaster
              position="bottom-center"
              toastOptions={{
                className: "cinenest-toast",
                classNames: {
                  success: "cinenest-toast-success",
                  error: "cinenest-toast-error",
                },
              }}
            />
        </WatchlistProvider>
      </MovieProvider>
    </WatchProvider>
    </AuthProvider>
  </StrictMode>,
);
