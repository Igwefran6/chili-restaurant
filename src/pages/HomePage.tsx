import { Suspense } from "react";
import Loading from "./Loading";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Welcome from "../components/Welcome";
import MainLayout from "../layouts/MainLayout";

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
      <MainLayout>
        <Hero />
        <Welcome />
      </MainLayout>
    </div>
  );
};

export default HomePage;
