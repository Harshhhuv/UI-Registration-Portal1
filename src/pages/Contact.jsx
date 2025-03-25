import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-2xl w-full">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <img
            src='https://tse2.mm.bing.net/th?id=OIP.y4Pyvg0JBcZ3ytN71svRoQHaHa&pid=Api&P=0&h=180'
            alt="Contact Us"
            className="w-40 h-20 rounded-full mb-4 md:mb-0 md:mr-6"
          />
          <div>
            <p className="text-gray-700">Feel free to reach out to us with any questions or inquiries.</p>
            <p className="text-gray-700">Email: contact@example.com</p>
            <p className="text-gray-700">Phone: (123) 456-7890</p>
          </div>
        </div>
        <form className="mt-6">
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Message"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
