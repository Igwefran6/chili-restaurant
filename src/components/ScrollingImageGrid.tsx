import React from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

const ScrollingImageGrid: React.FC = () => {
  // Array of images with their src and style classes
  const images = [
    { src: "/images/grid/1.png" },
    { src: "/images/grid/2.png" },
    { src: "/images/grid/3.png" },
    { src: "/images/grid/4.png" },
    { src: "/images/grid/5.png" },
    { src: "/images/grid/6.png" },
    { src: "/images/grid/7.png" },
    { src: "/images/grid/8.png" },
    { src: "/images/grid/9.png" },
    { src: "/images/grid/10.png" },
  ];

  return (
    <motion.div
      initial={{ y: 100, opacity: 0.2 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative overflow-hidden h-fit w-full py-16"
    >
      <Marquee gradient={false} speed={50} style={{ overflow: "hidden" }}>
        {images.map((image, index) => {
          return (
            <div
              key={index}
              className={`m-4 w-40 h-40 rounded shadow border-8 bg-cover`}
            >
              <img
                src={image.src}
                className="rounded-lg h-full w-full"
                alt={`Image ${index + 1}`}
              />
            </div>
          );
        })}
      </Marquee>
    </motion.div>
  );
};

export default ScrollingImageGrid;
