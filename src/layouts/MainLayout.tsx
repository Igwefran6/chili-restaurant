import React, { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";

interface MainLayoutProps {
  children: ReactNode; // To display page-specific content
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {children}
      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export default MainLayout;
