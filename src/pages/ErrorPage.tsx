import React from "react";
import { Link } from "react-router-dom"; // If using React Router for navigation
import MainLayout from "../layouts/MainLayout";

const ErrorPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="flex items-center justify-center min-h-screen  bg-gray-light text-center p-8">
        <div className="bg-white p-8 rounded-lg shadow-xl max-w-sm w-full">
          <h1 className="text-6xl font-bold text-brand mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="text-white bg-brand py-2 px-6 rounded-full text-lg hover:bg-brand-dark transition-colors"
          >
            Go Back to Home
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default ErrorPage;
