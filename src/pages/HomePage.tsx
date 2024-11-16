import { Suspense } from "react";
import Loading from "./Loading";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Welcome from "../components/Welcome";

const HomePage: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.5 }}
        transition={{ duration: 0.5, ease: "anticipate" }}
      >
        <PageToRender />
      </motion.div>
    </Suspense>
  );
};

const PageToRender: React.FC = () => {
  return (
    <div className="poppins-regular overflow-hidden">
      <Header />
      <Hero />
      <Welcome />
    </div>
  );
};

export default HomePage;
