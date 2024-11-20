import { Suspense } from "react";
import Loading from "./Loading";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Welcome from "../components/Welcome";
import MainLayout from "../layouts/MainLayout";
import ScrollingImageGrid from "../components/ScrollingImageGrid";
import Chefs from "../components/Chef";
import CustomerReviews from "../components/CustomerReview";
import FAQ from "../components/FAQ";
import Counter from "../components/Counter";

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
        <div className="bg-gradient-to-br from-gray-100 to-gray-200">
          <Chefs />
          <CustomerReviews />
          <Counter />
          <FAQ />
          <ScrollingImageGrid />
        </div>
      </MainLayout>
    </div>
  );
};

export default HomePage;
