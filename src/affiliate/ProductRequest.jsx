import React, { useState } from "react";
import { db } from "./firebase"; // your Firebase config
import { collection, addDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Navbar";

const ProductRequest = () => {
  const [formData, setFormData] = useState({
    productUrl: "",
    userEmail: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Save to Firebase
      await addDoc(collection(db, "affiliate_requests"), formData);

      // Send Email via backend
      const res = await fetch("https://nemweb-server.onrender.com/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });


      const result = await res.json();
      if (!result.success) throw new Error("Email failed");

      toast.success("✅ Request submitted & email sent!");
      setFormData({ productUrl: "", userEmail: "" });
    } catch (error) {
      console.error("Error:", error);
      toast.error("❌ Submission failed.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white shadow-xl rounded-2xl w-full max-w-xl p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Request Affiliate Link
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Product Link
              </label>
              <input
                name="productUrl"
                value={formData.productUrl}
                onChange={handleChange}
                type="url"
                placeholder="Paste the product URL"
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Your Email
              </label>
              <input
                name="userEmail"
                value={formData.userEmail}
                onChange={handleChange}
                type="email"
                placeholder="Enter your email"
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProductRequest;
