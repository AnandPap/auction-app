import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import ErrorBoundary from "./components/ErrorBoundary.tsx";
import Router from "./Router.tsx";
import "./styles/index.css";
import "./styles/header-footer.css";
import "./styles/login-reg.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ErrorBoundary fallback={<div>Greska</div>}>
        <Router />
      </ErrorBoundary>
    </Provider>
  </StrictMode>
);
