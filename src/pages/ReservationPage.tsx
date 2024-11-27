import React, { Suspense, useState } from "react"; // Importing necessary React hooks
import { motion } from "framer-motion"; // Importing motion for animations
import MainLayout from "../layouts/MainLayout"; // Importing the main layout component
import { ImageLoader } from "../utils/ImageLoader"; // Importing utility for image loading
import Loading from "./Loading"; // Importing a loading component for suspense

// PageToRender Component: This component renders the reservation page.
const PageToRender: React.FC = () => {
  // State variables to store form input values
  const [name, setName] = useState(""); // Name of the person making the reservation
  const [email, setEmail] = useState(""); // Email address
  const [phone, setPhone] = useState(""); // Phone number
  const [date, setDate] = useState(""); // Reservation date
  const [time, setTime] = useState(""); // Reservation time
  const [guests, setGuests] = useState(1); // Number of guests
  const [specialRequests, setSpecialRequests] = useState(""); // Special requests for the reservation

  // Array of images to display in the gallery section, each with a delay for animation
  const images = [
    { src: "/images/reservation/1.png", delay: 0 },
    { src: "/images/reservation/2.png", delay: 0.4 },
    { src: "/images/reservation/3.png", delay: 0.8 },
    { src: "/images/reservation/4.png", delay: 1.2 },
  ];

  // Text descriptions associated with each image for display
  const text = [
    "Serene Environ",
    "Delicious Meals",
    "Made with Love",
    "A Smile guaranteed",
  ];

  // Handle form submission (simply shows an alert for now)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload on form submission
    alert("Reservation submitted!"); // Placeholder for reservation submission logic
  };

  return (
    <MainLayout>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 p-8 lg:p-16 bg-gradient-to-br from-orange-100 via-white to-yellow-50 min-h-screen">
        {/* Image Grid: Displays images with animation */}
        <motion.div className="w-1/2 h-full grid-cols-2 p-8 gap-4 place-items-center lg:grid">
          {images.map((image, index) => {
            // ImageLoader is called to preload images
            ImageLoader(image.src);
            return (
              <motion.div
                key={index}
                initial={{ x: -200, opacity: 0 }} // Initial animation state (hidden and off-screen)
                whileInView={{ x: 0, opacity: 1 }} // Final animation state (visible)
                transition={{ delay: image.delay, duration: 0.5 }} // Animation delay and duration
                viewport={{ once: true }} // Animation triggers once when the element enters the viewport
                className={`bg-white overflow-hidden h-64 w-64 rounded shadow relative mb-4 lg:mb-0 z-[${index}]`}
              >
                <span className="absolute z-10 bottom-1/2 left-1/2 translate-y-1/2 -translate-x-1/2 text-brand drop-shadow-2xl flex justify-center text-lg w-full font-bold">
                  {text[index]} {/* Text description of each image */}
                </span>

                <motion.img
                  whileHover={{ opacity: 0.5 }} // Image opacity changes on hover
                  transition={{ duration: 0.5 }} // Smooth transition for opacity
                  className="bg-cover rounded-xl h-full w-full border-white border-8"
                  src={image.src}
                  alt={`Reservation Image ${index + 1}`} // Descriptive alt text for images
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Reservation Form: Form where the user enters their reservation details */}
        <motion.div
          initial={{ opacity: 0, y: 200 }} // Initial position and opacity of the form
          animate={{ opacity: 1, y: 0 }} // Final position and opacity of the form
          viewport={{ once: true }} // Animation triggers once when the form enters the viewport
          transition={{ duration: 1, delay: 1 }} // Animation duration and delay
          className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96"
        >
          <h2 className="text-3xl font-semibold text-center text-brand mb-6">
            Make a Reservation
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name and Email Input */}
            <div className="flex flex-col lg:flex-row gap-2">
              <div className="lg:w-1/2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="lg:w-1/2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Phone, Date, and Time Inputs */}
            <div className="flex flex-col lg:flex-row gap-2">
              <div className="lg:w-1/2">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className="lg:w-1/2">
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700"
                >
                  Reservation Date
                </label>
                <input
                  type="date"
                  id="date"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Time and Guests Inputs */}
            <div className="flex flex-col lg:flex-row gap-2">
              <div className="lg:w-1/2">
                <label
                  htmlFor="time"
                  className="block text-sm font-medium text-gray-700"
                >
                  Reservation Time
                </label>
                <select
                  id="time"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                >
                  <option value="">Select a time</option>
                  <option value="18:00">6:00 PM</option>
                  <option value="19:00">7:00 PM</option>
                  <option value="20:00">8:00 PM</option>
                </select>
              </div>
              <div className="lg:w-1/2">
                <label
                  htmlFor="guests"
                  className="block text-sm font-medium text-gray-700"
                >
                  Number of Guests
                </label>
                <input
                  type="number"
                  id="guests"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand"
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  min="1"
                  required
                />
              </div>
            </div>

            {/* Special Requests Input */}
            <div>
              <label
                htmlFor="specialRequests"
                className="block text-sm font-medium text-gray-700"
              >
                Special Requests
              </label>
              <textarea
                id="specialRequests"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand"
                placeholder="Enter any special requests"
                value={specialRequests}
                onChange={(e) => setSpecialRequests(e.target.value)}
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full py-2 mt-4 bg-brand text-white font-semibold rounded-md shadow-lg hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-brand"
              >
                Submit Reservation
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </MainLayout>
  );
};

// ReservationPage Component: This is a wrapper to handle async operations like image loading.
function ReservationPage() {
  return (
    <Suspense fallback={<Loading />}>
      {" "}
      {/* Show loading component while the page is loading */}
      <PageToRender /> {/* Render the main reservation page */}
    </Suspense>
  );
}

export default ReservationPage; // Export the ReservationPage component for use in other parts of the application
