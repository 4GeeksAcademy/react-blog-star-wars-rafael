import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes.jsx";
import { AppContextProvider } from "./store.jsx"; // 👈 tu nuevo context correcto

const Main = () => {
  return (
    <React.StrictMode>
      {/* Global State Provider */}
      <AppContextProvider>
        {/* Routing */}
        <RouterProvider router={router} />
      </AppContextProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
