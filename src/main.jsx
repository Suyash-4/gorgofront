import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import TransitionLoader from "./components/sideEffects/TransitionLoader.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <TransitionLoader>
        <App />
      </TransitionLoader>
    </BrowserRouter>
  </StrictMode>
);
