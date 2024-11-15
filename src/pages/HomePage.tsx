import { Suspense } from "react";
import Loading from "./Loading";
import { motion } from "framer-motion";

function HomePage() {
  return (
    <Suspense fallback={<Loading />}>
      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.5 }}
        transition={{ duration: 0.5, ease: "anticipate" }}
      >
        HomePage
      </motion.div>
    </Suspense>
  );
}

export default HomePage;
