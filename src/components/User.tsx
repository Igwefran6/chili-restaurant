import React, { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

// User component to display user profile modal
const User: React.FC<{
  setShowUser: Dispatch<SetStateAction<boolean>>; // Function to toggle visibility of the user profile modal
}> = ({ setShowUser }) => {
  const placeholderImage = "https://via.placeholder.com/64"; // Placeholder image for the user profile

  return (
    <motion.div
      // Main container for the user profile modal
      className="fixed lg:right-8 right-1/2 top-1/2 translate-x-1/2 lg:translate-x-0 -translate-y-1/2 lg:rotate-3 z-40 shadow-lg lg:rounded-lg bg-gray-light w-svw h-svh lg:w-80 lg:h-[520px] p-4 flex flex-col"
      initial={{ opacity: 0 }} // Initial state: hidden
      animate={{ opacity: 1 }} // Animation to fade in
      transition={{ duration: 0.5 }} // Smooth fade-in transition
    >
      {/* Close button for closing the profile modal */}
      <motion.div
        whileHover={{ scale: 0.8, cursor: "pointer" }} // Scale down on hover
        whileTap={{ scale: 0.8 }} // Scale down on click
        onClick={() => setShowUser(false)} // Hide profile modal when clicked
        className="absolute top-4 right-4"
      >
        <X size={20} /> {/* X icon from lucide-react for closing the modal */}
      </motion.div>

      {/* Logout button */}
      <motion.div
        whileHover={{ scale: 0.8, cursor: "pointer" }} // Scale down on hover
        whileTap={{ scale: 0.5 }} // Scale down on tap
        className="absolute top-4 left-4"
      >
        logout {/* Placeholder text for logout button */}
      </motion.div>

      {/* Profile Section */}
      <div className="flex flex-col items-center mt-10">
        {/* Profile Picture */}
        <img
          src={placeholderImage} // Placeholder image for the user profile
          alt="User Profile"
          className="w-24 h-24 rounded-full object-cover mb-4"
        />

        {/* User's Name */}
        <h2 className="text-xl font-semibold text-gray-700">John Doe</h2>

        {/* User's Bio */}
        <p className="text-center text-gray-500 mt-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit Fugit
          aliquam.
        </p>

        {/* Edit Profile Button */}
        <motion.button
          className="mt-4 px-4 py-2 text-gray-dark rounded-full transition-colors duration-200"
          whileHover={{
            background: "linear-gradient(90deg, #F8B400, #FF8C00)", // Gradient effect on hover
          }}
          style={{
            background: "linear-gradient(90deg, #F8B400, #FFD700)", // Default gradient for the button
          }}
          onClick={() => alert("Edit Profile")} // Placeholder action for editing the profile
        >
          Edit Profile {/* Button text */}
        </motion.button>
      </div>

      {/* Additional Information Section */}
      <div className="mt-8 space-y-4">
        {/* User's Email */}
        <div className="flex justify-between text-gray-700">
          <span>Email:</span>
          <span className="text-gray-500">john.doe@example.com</span>
        </div>

        {/* User's Location */}
        <div className="flex justify-between text-gray-700">
          <span>Location:</span>
          <span className="text-gray-500">San Francisco, CA</span>
        </div>

        {/* User's Account Join Date */}
        <div className="flex justify-between text-gray-700">
          <span>Joined:</span>
          <span className="text-gray-500">March 2021</span>
        </div>
      </div>
    </motion.div>
  );
};

export default User;
