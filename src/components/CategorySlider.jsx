import React from "react";
import { motion } from "framer-motion";
import { categories } from "../data/CategoryData";

const CategorySlider = () => {
  const extendedCategories = [...categories, ...categories]; // Duplicate for smooth looping

  const scrollToCategory = (categoryName) => {
    const categorySection = document.getElementById(categoryName);
    if (categorySection) {
      categorySection.scrollIntoView({ behavior: "smooth"});
    }
  };

  return (
    <div className="overflow-hidden w-[60%] mx-auto py-4 relative">
      <motion.div
        className="flex gap-4 snap-x snap-mandatory"
        initial={{ x: "0%" }}
        animate={{ x: "-100%" }}
        transition={{
          ease: "linear",
          duration: 30,
          repeat: Infinity,
        }}
        exit={{ x: "0%" }}
        // This will make the animation loop back to the start
  
      >
        {extendedCategories.map((category, index) => (
          <motion.button
            key={index}
            className="flex flex-col items-center min-w-[30%] snap-start" // Only 3 fully visible at a time
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.img
              src={category.image}
              alt={category.name}
              className="w-32 h-32 object-cover rounded-lg cursor-pointer"
              onClick={() => scrollToCategory(category.name)}
            />
            <span className="text-sm mt-2">{category.name}</span>
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};

export default CategorySlider;
