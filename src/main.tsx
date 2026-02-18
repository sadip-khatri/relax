import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import ScrollToTop from "./ScrollToTop";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </StrictMode>,
);
