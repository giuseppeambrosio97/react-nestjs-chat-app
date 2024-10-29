import React from "react";
import ReactDOM from "react-dom/client";
import { PrimeReactProvider } from "primereact/api";
import Tailwind from "primereact/passthrough/tailwind";
import App from "./App";
import { Provider } from "react-redux";
import "./index.css";
import { store } from "./store/store";

const rootElement = document.getElementById("root") as Element;

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
        <App />
      </PrimeReactProvider>
    </Provider>
  </React.StrictMode>
);
