import React, { ReactNode } from "react"; // Importing necessary React types
import Header from "../components/Header"; // Importing the Header component
import Footer from "../components/Footer"; // Importing the Footer component
import ScrollToTopButton from "../components/ScrollToTopButton"; // Importing the ScrollToTopButton component

// Interface for MainLayout props, defining the children property to accept any valid React component
interface MainLayoutProps {
  children: ReactNode; // This allows the page-specific content to be passed into the layout
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header /> {/* Header component displayed at the top of the page */}
      {children} {/* Page-specific content is rendered here */}
      <ScrollToTopButton />{" "}
      {/* Button that allows users to scroll to the top of the page */}
      <Footer /> {/* Footer component displayed at the bottom of the page */}
    </div>
  );
};

export default MainLayout; // Exporting the MainLayout component for use in other parts of the application
