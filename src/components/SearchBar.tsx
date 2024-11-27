import { motion } from "framer-motion"; // Import motion for animations
import { Search, X } from "lucide-react"; // Import icons from lucide-react (Search and Close (X))
import { Dispatch, SetStateAction } from "react"; // Import types for managing state

// SearchBar component takes a prop `setShowSearchBar` for controlling visibility
const SearchBar: React.FC<{
  setShowSearchBar: Dispatch<SetStateAction<boolean>>; // This prop updates the visibility of the search bar
}> = ({ setShowSearchBar }) => {
  return (
    // Wrapper for the entire search bar with animation (fade in)
    <motion.div
      initial={{ opacity: 0 }} // Initial opacity set to 0 (hidden)
      animate={{ opacity: 1 }} // Animate to full opacity
      exit={{ opacity: 0 }} // Animate back to 0 opacity when exiting
      transition={{ delay: 0.5, duration: 0.5 }} // Animation delay and duration
      className="fixed top-0 right-0 h-screen w-screen poppins-regular z-50 bg-gray-translucent-light flex justify-center items-center"
    >
      {/* Search form: input for text and a button for submission */}
      <form className="w-[75%] lg:w-1/2 flex">
        <input
          className="py-2 px-4 text-2xl w-full bg-transparent border-b-2 border-gray-dark focus:border-b-2 focus:outline-none text-gray-dark"
          type="text"
          placeholder="Search dish..." // Placeholder text for the search input
        />
        <motion.button
          whileHover={{ scale: 0.8 }} // Shrink the button on hover
          whileTap={{ scale: 0.5 }} // Further shrink the button on tap (click)
          className="py-2 px-4"
          type="submit" // Submit button
        >
          <Search size={42} /> {/* Search icon from lucide-react */}
        </motion.button>
      </form>

      {/* Close button: X icon to hide the search bar */}
      <motion.div
        whileTap={{ scale: 0.5 }} // Shrink on click
        whileHover={{ scale: 0.8 }} // Shrink slightly on hover
        onClick={() => setShowSearchBar(false)} // Hide the search bar when clicked
        className="fixed top-16 right-16 cursor-pointer text-gray-dark"
      >
        <X /> {/* Close (X) icon from lucide-react */}
      </motion.div>
    </motion.div>
  );
};

export default SearchBar;
