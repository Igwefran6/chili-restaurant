// Import necessary dependencies
import React from "react"; // React for creating components
import { Link } from "react-router-dom"; // Link component for navigation if using React Router
import MainLayout from "../layouts/MainLayout"; // Layout wrapper for the page

// Define the ErrorPage component
const ErrorPage: React.FC = () => {
  return (
    // Wrap the page content in the main layout
    <MainLayout>
      {/* Full-page container with centered content */}
      <div className="flex items-center justify-center min-h-screen bg-gray-light text-center p-8">
        {/* Error message container */}
        <div className="bg-white p-8 rounded-lg shadow-xl max-w-sm w-full">
          {/* Display the error code */}
          <h1 className="text-6xl font-bold text-brand mb-4">404</h1>
          {/* Display the main error message */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Oops! Page Not Found
          </h2>
          {/* Provide a brief description of the error */}
          <p className="text-gray-600 mb-6">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          {/* Link to navigate back to the homepage */}
          <Link
            to="/" // Redirects to the homepage
            className="text-white bg-brand py-2 px-6 rounded-full text-lg hover:bg-brand-dark transition-colors"
          >
            Go Back to Home
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

// Export the ErrorPage component for use in other parts of the app
export default ErrorPage;
