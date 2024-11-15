import { motion } from "framer-motion";

function Loading() {
  return (
    <motion.div
      className="flex justify-center items-center h-screen w-screen bg-brand no-copy"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.5, background: "#FDFD96" }} // Fade out effect
      transition={{ duration: 0.5 }} // Duration of fade out
    >
      Loading...
    </motion.div>
  );
}

export default Loading;
