// Import necessary dependencies and components
import { Suspense } from "react"; // Suspense for lazy loading components
import Loading from "./Loading"; // Fallback component displayed during lazy loading
import { motion } from "framer-motion"; // For animations
import Hero from "../components/Hero"; // Hero section component
import Welcome from "../components/Welcome"; // Welcome section component
import MainLayout from "../layouts/MainLayout"; // Layout wrapper for the page
import ScrollingImageGrid from "../components/ScrollingImageGrid"; // Scrolling image grid component
import Chefs from "../components/Chef"; // Chef spotlight component
import CustomerReviews from "../components/CustomerReview"; // Customer reviews component
import FAQ from "../components/FAQ"; // Frequently Asked Questions component
import Achievements from "../components/Achievements"; // Achievements showcase component

// HomePage component wraps the page with lazy loading and animations
const HomePage: React.FC = () => {
  return (
    // Use Suspense to handle lazy loading with a fallback (Loading spinner)
    <Suspense fallback={<Loading />}>
      {/* Animated wrapper for page transitions */}
      <motion.div
        initial={{ opacity: 0.5 }} // Initial opacity for fade-in effect
        animate={{ opacity: 1 }} // Target opacity for visible state
        exit={{ opacity: 0.5 }} // Exit opacity for fade-out effect
        transition={{ duration: 0.5, ease: "anticipate" }} // Smooth transition settings
      >
        {/* Render the main page content */}
        <PageToRender />
      </motion.div>
    </Suspense>
  );
};

// PageToRender contains the structured content of the homepage
const PageToRender: React.FC = () => {
  return (
    // Use the MainLayout for consistent styling across the application
    <div className="poppins-regular overflow-hidden">
      <MainLayout>
        {/* Hero section with a featured image */}
        <Hero src="/images/food.png" />
        {/* Welcome section with an introductory image */}
        <Welcome src="/images/food2.png" />
        {/* Background gradient for content sections */}
        <div className="bg-gradient-to-br from-gray-100 to-gray-200">
          {/* Chefs spotlight */}
          <Chefs />
          {/* Customer reviews section */}
          <CustomerReviews />
          {/* Achievements and milestones */}
          <Achievements />
          {/* FAQ section */}
          <FAQ />
          {/* Scrolling image grid for visual appeal */}
          <ScrollingImageGrid />
        </div>
      </MainLayout>
    </div>
  );
};

// Export the HomePage component as the default export
export default HomePage;
