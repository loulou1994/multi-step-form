import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import SubscriptionFormProvider from "./context/subscriptionFormProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SubscriptionFormProvider>
      <App />
    </SubscriptionFormProvider>
  </React.StrictMode>
);
