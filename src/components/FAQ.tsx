import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDownCircle } from "lucide-react";

const FAQ: React.FC = () => {
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

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto" },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-50 py-16 px-8">
      <h2 className="text-4xl font-bold text-center text-brand mb-12">
        Frequently Asked Questions
      </h2>
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            initial={{ x: 100, opacity: 0.2 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow-lg p-5"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-medium text-gray-700">
                {faq.question}
              </h3>
              <motion.span
                initial={{ rotate: 0 }}
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-brand text-xl"
              >
                <ArrowDownCircle />
              </motion.span>
            </div>
            <motion.div
              initial="hidden"
              animate={activeIndex === index ? "visible" : "hidden"}
              variants={faqVariants}
              transition={{ duration: 0.4 }}
              className="overflow-hidden text-gray-600 mt-4"
            >
              <p>{faq.answer}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
