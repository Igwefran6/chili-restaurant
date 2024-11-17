import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ReservationPage from "./pages/ReservationPage";
import ErrorPage from "./pages/ErrorPage";
import AboutPage from "./pages/AboutPage";
import MenuPage from "./pages/MenuPage";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<HomePage />} path="/" />
        <Route element={<MenuPage />} path="menu" />
        <Route element={<AboutPage />} path="/about" />
        <Route element={<ReservationPage />} path="/reservation" />
        <Route element={<ErrorPage />} path="/*" />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
