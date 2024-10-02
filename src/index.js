import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot
import App from "./App";
import "./index.css";
import { ThemeProvider } from "./context";

const container = document.querySelector("#root"); // Get the root element
const root = createRoot(container); // Create a root

// Render your app
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
