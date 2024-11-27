import { StrictMode } from "react"; // Import StrictMode from React to enable additional checks and warnings during development
import { createRoot } from "react-dom/client"; // Import createRoot from react-dom to render the app
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter from react-router-dom to enable routing in the app
import "./index.css"; // Import global CSS styles for the app
import App from "./App.tsx"; // Import the main App component

// Create a root container and render the React app inside it
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* StrictMode helps identify potential problems in the app during development */}

    <BrowserRouter>
      {/* BrowserRouter is used to enable the routing functionality in the app */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
