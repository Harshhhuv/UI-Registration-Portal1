import React from "react";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-3xl w-full">
        <p className="text-gray-700 mb-4">
          Your privacy is important to us. This privacy policy outlines how we collect, use, and protect your personal information.
        </p>
        <h2 className="text-2xl font-semibold mt-4 mb-2">Information We Collect</h2>
        <p className="text-gray-700 mb-4">
          We collect personal data such as your name, email address, and any other information you provide when using our services.
        </p>
        <h2 className="text-2xl font-semibold mt-4 mb-2">How We Use Your Information</h2>
        <p className="text-gray-700 mb-4">
          Your information is used to improve our services, respond to inquiries, and provide updates.
        </p>
        <h2 className="text-2xl font-semibold mt-4 mb-2">Data Protection</h2>
        <p className="text-gray-700 mb-4">
          We implement security measures to ensure the safety of your personal data.
        </p>
        <h2 className="text-2xl font-semibold mt-4 mb-2">Contact Us</h2>
        <p className="text-gray-700 mb-4">
          If you have any questions about this privacy policy, please contact us at privacy@example.com.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
