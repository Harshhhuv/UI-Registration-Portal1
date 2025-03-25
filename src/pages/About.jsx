import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-3xl w-full">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.jKRFmN4Y8VJrzdajcjTX5gHaEK&pid=Api&P=0&h=180"
            alt="About Us"
            className="w-48 h-48 rounded-lg mb-4 md:mb-0 md:mr-6"
          />
          <div>
            <p className="text-gray-700 mb-4">
              Welcome to our company! We are dedicated to providing top-notch services and products to our customers.
            </p>
            <p className="text-gray-700 mb-4">
              Our team of experts works hard to bring innovation and excellence to everything we do.
            </p>
            <p className="text-gray-700">
              Feel free to reach out to us to learn more about our journey and what we offer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
