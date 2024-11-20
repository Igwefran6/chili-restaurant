import React, { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const User: React.FC<{
  setShowUser: Dispatch<SetStateAction<boolean>>;
}> = ({ setShowUser }) => {
  const placeholderImage = "https://via.placeholder.com/64";

  return (
    <motion.div
      className="fixed lg:right-8 right-1/2 top-1/2 translate-x-1/2 lg:translate-x-0 -translate-y-1/2 lg:rotate-3 z-40 shadow-lg rounded-lg bg-gray-light w-screen h-screen lg:w-80 lg:h-[520px] p-4 flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Close button */}
      <motion.div
        whileHover={{ scale: 0.8, cursor: "pointer" }}
        whileTap={{ scale: 0.5 }}
        onClick={() => setShowUser(false)}
        className="absolute top-4 right-4"
      >
        <X size={20} />
      </motion.div>
      {/* Logout button */}
      <motion.div
        whileHover={{ scale: 0.8, cursor: "pointer" }}
        whileTap={{ scale: 0.5 }}
        className="absolute top-4 left-4"
      >
        logout
      </motion.div>

      {/* Profile Section */}
      <div className="flex flex-col items-center mt-10">
        {/* Profile Picture */}
        <img
          src={placeholderImage}
          alt="User Profile"
          className="w-24 h-24 rounded-full object-cover mb-4"
        />

        {/* User Name */}
        <h2 className="text-xl font-semibold text-gray-700">John Doe</h2>

        {/* Bio */}
        <p className="text-center text-gray-500 mt-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit Fugit
          aliquam.
        </p>

        {/* Edit Button */}
        <motion.button
          className="mt-4 px-4 py-2 text-gray-darkrounded-full transition-colors duration-200 rounded"
          whileHover={{
            background: "linear-gradient(90deg, #F8B400, #FF8C00)", // Adjust gradient colors
          }}
          style={{
            background: "linear-gradient(90deg, #F8B400, #FFD700)", // Default gradient
          }}
          onClick={() => alert("Edit Profile")}
        >
          Edit Profile
        </motion.button>
      </div>

      {/* Additional Information */}
      <div className="mt-8 space-y-4">
        <div className="flex justify-between text-gray-700">
          <span>Email:</span>
          <span className="text-gray-500">john.doe@example.com</span>
        </div>
        <div className="flex justify-between text-gray-700">
          <span>Location:</span>
          <span className="text-gray-500">San Francisco, CA</span>
        </div>
        <div className="flex justify-between text-gray-700">
          <span>Joined:</span>
          <span className="text-gray-500">March 2021</span>
        </div>
      </div>
    </motion.div>
  );
};

export default User;
