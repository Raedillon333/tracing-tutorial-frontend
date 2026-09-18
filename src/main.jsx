import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as Sentry from "@sentry/react";
Sentry.init({
  dsn: "<npm_install_@sentry/react>", 
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  // Capture 100% of transactions for tracing.
  tracesSampleRate: 1.0,
  // Enable distributed tracing for requests to these targets. "localhost"
  // covers this tutorial; the second entry is just an example — replace it
  // with a pattern that matches your own backend URL(s) in production.
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  // Session Replay sample rates.
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
