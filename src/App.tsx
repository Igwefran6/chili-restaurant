import { AnimatePresence } from "framer-motion"; // Import AnimatePresence for page transition animations
import { Route, Routes, useLocation } from "react-router-dom"; // Import routing components from react-router-dom
import HomePage from "./pages/HomePage"; // Import HomePage component
import ReservationPage from "./pages/ReservationPage"; // Import ReservationPage component
import ErrorPage from "./pages/ErrorPage"; // Import ErrorPage component for handling invalid routes
import AboutPage from "./pages/AboutPage"; // Import AboutPage component
import MenuPage from "./pages/MenuPage"; // Import MenuPage component
import ShoppingContextProvider from "./context/ShoppingContextProvider"; // Import the ShoppingContextProvider for context management

function App() {
  const location = useLocation(); // Get the current location (URL) from the router

  return (
    <ShoppingContextProvider>
      {/* Wrap the entire app in the ShoppingContextProvider to manage shopping-related data */}

      <AnimatePresence mode="wait">
        {/* AnimatePresence ensures smooth page transitions when changing routes */}

        <Routes location={location} key={location.pathname}>
          {/* Define the routes for different pages, passing the location and key for animations */}

          <Route element={<HomePage />} path="/" />
          {/* HomePage route: This will be rendered when the URL path is '/' */}

          <Route element={<MenuPage />} path="menu" />
          {/* MenuPage route: This will be rendered when the URL path is '/menu' */}

          <Route element={<AboutPage />} path="/about" />
          {/* AboutPage route: This will be rendered when the URL path is '/about' */}

          <Route element={<ReservationPage />} path="/reservation" />
          {/* ReservationPage route: This will be rendered when the URL path is '/reservation' */}

          <Route element={<ErrorPage />} path="/*" />
          {/* ErrorPage route: This will be rendered for any undefined or invalid paths (catch-all route) */}
        </Routes>
      </AnimatePresence>
    </ShoppingContextProvider>
  );
}

export default App;
