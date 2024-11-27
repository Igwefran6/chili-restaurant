import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDownCircle } from "lucide-react";

// FAQ component
const FAQ: React.FC = () => {
  // Sample data for FAQs, each object contains a question and its respective answer
  const faqs = [
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for unused and undamaged items.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we ship to most countries worldwide. Shipping costs are calculated at checkout.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order is shipped, you will receive a tracking number via email.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept Visa, MasterCard, PayPal, and several other major payment methods.",
    },
    {
      question: "Can I change or cancel my order?",
      answer:
        "Orders can be changed or canceled within 12 hours of placement. Contact customer support for assistance.",
    },
  ];

  // State to keep track of the active FAQ item (index of the clicked question)
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Function to toggle the visibility of the answer when a FAQ item is clicked
  const toggleFAQ = (index: number) => {
    // If the same FAQ is clicked again, close it (set activeIndex to null), otherwise open it
    setActiveIndex(index === activeIndex ? null : index);
  };

  // Animation variants for showing and hiding the FAQ answers
  const faqVariants = {
    hidden: { opacity: 0, height: 0 }, // FAQ answer is hidden (invisible and collapsed)
    visible: { opacity: 1, height: "auto" }, // FAQ answer is visible (fully expanded)
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-50 py-16 px-8">
      {/* Main heading for the FAQ section */}
      <h2 className="text-4xl font-bold text-center text-brand mb-12">
        Frequently Asked Questions
      </h2>

      {/* FAQ items container */}
      <div className="max-w-4xl mx-auto space-y-4">
        {/* Loop through each FAQ item */}
        {faqs.map((faq, index) => (
          <motion.div
            initial={{ x: 100, opacity: 0.2 }} // Initial animation state (sliding from the right with low opacity)
            whileInView={{ x: 0, opacity: 1 }} // Animation when FAQ comes into view (fully visible)
            transition={{ duration: 1 }} // Duration of the animation
            viewport={{ once: true }} // Ensure animation only happens once when entering the view
            key={index} // Unique key for each FAQ item
            className="bg-white border border-gray-200 rounded-lg shadow-lg p-5" // Styling for each FAQ card
          >
            {/* FAQ Question and clickable header */}
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)} // Toggle FAQ visibility when clicked
            >
              <h3 className="text-lg font-medium text-gray-700">
                {faq.question} {/* Display the question */}
              </h3>
              {/* Arrow icon for toggling answer visibility */}
              <motion.span
                initial={{ rotate: 0 }} // Initial state (arrow pointing down)
                animate={{ rotate: activeIndex === index ? 180 : 0 }} // Rotate the arrow on FAQ open/close
                transition={{ duration: 0.3 }} // Duration for rotation animation
                className="text-brand text-xl"
              >
                <ArrowDownCircle />
              </motion.span>
            </div>

            {/* FAQ Answer - animated visibility */}
            <motion.div
              initial="hidden" // Initially, the answer is hidden
              animate={activeIndex === index ? "visible" : "hidden"} // If the FAQ is active, show the answer
              variants={faqVariants} // Apply the animation defined above
              transition={{ duration: 0.4 }} // Duration of the answer's animation
              className="overflow-hidden text-gray-600 mt-4" // Styling for the answer text
            >
              <p>{faq.answer}</p> {/* Display the answer */}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
