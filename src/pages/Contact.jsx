// File: Contact.jsx

import React, { useState } from "react";
import { databases, account, ID } from "../appwriteConfig";

const Contact = () => {
  const DATABASE_ID = "687fd15100097e5ca692";      // Apna database ID yahan dalein
  const COLLECTION_ID = "687fd3d6001425bba936";    // Apni collection ID yahan dalein

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // User login check karna
      const user = await account.get();
      const userId = user.$id;

      // Document create karte waqt permissions me double quotes ke sath userId dena zaruri hai
      await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        ID.unique(),
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        [`read("user:${userId}")`],    // Correct permission format
        [`write("user:${userId}")`]
      );

      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Submission error:", error);
      if (error.code === 401) {
        alert("Aap login nahi hain. Kripya login karen.");
        // Optional: yahan login page par redirect kar sakte hain
        // window.location.href = "/login";
      } else {
        alert("Message bhejne mein error aaya hai.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center py-10 px-4 bg-gray-100 min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white shadow-md rounded-2xl p-8 space-y-6"
      >
        <h2 className="text-2xl font-bold text-center">Contact Us</h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full p-3 border rounded-lg"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
