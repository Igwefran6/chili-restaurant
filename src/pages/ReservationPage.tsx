import React, { useState } from "react";
import { motion } from "framer-motion";
import MainLayout from "../layouts/MainLayout";

const Reservation: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [specialRequests, setSpecialRequests] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to submit the reservation (could be an API call)
    alert("Reservation submitted!");
  };

  return (
    <MainLayout>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 p-8 lg:p-16  bg-gradient-to-br from-orange-100 via-white to-yellow-50 min-h-screen">
        <motion.div className="w-1/2 h-full grid-cols-2 p-8 gap-4 place-items-center hidden lg:grid">
          <motion.div
            initial={{ scale: 0, rotate: 0 }}
            whileInView={{ scale: 1.1, rotate: -8 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white overflow-hidden h-64 w-64 rounded shadow"
          >
            {" "}
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="bg-cover rounded-xl h-full w-full border-white border-8"
              src="/images/reservation/1.png"
              alt=""
            />
          </motion.div>
          <motion.div
            initial={{ scale: 1.4, rotate: 0 }}
            whileInView={{ scale: 1, rotate: 16 }}
            transition={{ delay: 0.2 }}
            className="bg-white overflow-hidden h-64 w-64 rounded shadow"
          >
            {" "}
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="bg-cover rounded-xl h-full w-full border-white border-8"
              src="/images/reservation/2.png"
              alt=""
            />
          </motion.div>
          <motion.div
            initial={{ scale: 0.5, rotate: 0 }}
            whileInView={{ scale: 1, rotate: 8 }}
            transition={{ delay: 0 }}
            className="bg-white overflow-hidden h-64 w-64 rounded shadow z-20"
          >
            {" "}
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="bg-cover rounded-xl h-full w-full border-white border-8"
              src="/images/reservation/4.png"
              alt=""
            />
          </motion.div>
          <motion.div
            initial={{ rotate: 0 }}
            whileInView={{ scale: 0.9, rotate: 45 }}
            transition={{ delay: 0.8 }}
            className="bg-white overflow-hidden h-64 w-64 rounded shadow z-10"
          >
            {" "}
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="bg-cover rounded-xl h-full w-full border-white border-8"
              src="/images/reservation/3.png"
              alt=""
            />
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96"
        >
          <h2 className="text-3xl font-semibold text-center text-brand mb-6">
            Make a Reservation
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col lg:flex-row gap-2">
              {/* Name */}
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
              {/* Email */}
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

            <div className="flex flex-col lg:flex-row gap-2">
              {/* Phone */}
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
              </div>{" "}
              {/* Date */}
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
            <div className="flex flex-col lg:flex-row gap-2">
              {/* Time */}
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
              </div>{" "}
              {/* Guests */}
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

            {/* Special Requests */}
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

export default Reservation;
