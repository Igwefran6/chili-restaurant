import { motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

const SearchBar: React.FC<{
  setShowSearchBar: Dispatch<SetStateAction<boolean>>;
}> = ({ setShowSearchBar }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="fixed top-0 right-0 h-screen w-screen poppins-regular z-50 bg-gray-translucent-light flex justify-center items-center"
    >
      <form className="w-1/2 flex">
        <input
          className="py-2 px-4 text-2xl w-full bg-transparent border-b-2 border-gray-dark focus:border-b-2 focus:outline-none text-gray-dark"
          type="text"
          placeholder="Search..."
        />
        <motion.button
          whileHover={{ scale: 0.8 }}
          whileTap={{ scale: 0.5 }}
          className="py-2 px-4"
          type="submit"
        >
          <Search size={42} />
        </motion.button>
      </form>
      <motion.div
        whileTap={{ scale: 0.5 }}
        whileHover={{ scale: 0.8 }}
        onClick={() => setShowSearchBar((prev) => !prev)}
        className="fixed top-16 right-16 p-2 bg-gray-translucent-dark rounded-full cursor-pointer text-gray-light border-2"
      >
        <X />
      </motion.div>
    </motion.div>
  );
};

export default SearchBar;
