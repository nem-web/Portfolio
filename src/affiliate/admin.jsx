import React, { useState } from "react";
import { db } from "./firebase.js"; // adjust path as needed
import { collection, addDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import Navbar from "./Navbar";

const GOOGLE_FORM_LINK = "https://forms.gle/BF16w4dMtwGKJknYA"; // Replace with your form link

const Admin = () => {
  const [formData, setFormData] = useState({
    requestedBy: "",
    name: "",
    price: "",
    image: "",
    category: "",
    url: "",
    platform: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { requestedBy, ...productData } = formData;

    try {
      // Store product data in Firestore (excluding requestedBy)
      await addDoc(collection(db, "products"), productData);
      toast.success("✅ Product added successfully!");

      // If requestedBy is a valid email, send email
      if (requestedBy && /\S+@\S+\.\S+/.test(requestedBy)) {
        await fetch(
          "https://nemweb-server.onrender.com/send-product-notification",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              to: requestedBy,
              productName: formData.name,
              formLink: GOOGLE_FORM_LINK,
            }),
          }
        );
      }

      // Reset form
      setFormData({
        requestedBy: "",
        name: "",
        price: "",
        image: "",
        category: "",
        url: "",
        platform: "",
      });
    } catch (error) {
      console.error("Error adding product:", error);
      toast.error("❌ Failed to add product.");
    }
  };

  return (
    <>
      <Navbar />
      

      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white shadow-xl rounded-2xl w-full max-w-xl p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Add New Product
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Requested By Email (Optional) */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Requested By (Email)
              </label>
              <input
                name="requestedBy"
                value={formData.requestedBy}
                onChange={handleChange}
                type="email"
                placeholder="Optional"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Product Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Product Name
              </label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                placeholder="e.g., Bluetooth Speaker"
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Price */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Price (₹)
              </label>
              <input
                name="price"
                value={formData.price}
                onChange={handleChange}
                type="number"
                placeholder="e.g., 1999"
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Image URL */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Image URL
              </label>
              <input
                name="image"
                value={formData.image}
                onChange={handleChange}
                type="url"
                placeholder="Enter the product image URL"
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select</option>
                <option>Electronics</option>
                <option>Fashion</option>
                <option>Books</option>
                <option>Home</option>
                <option>Other</option>
              </select>
            </div>

            {/* Product URL */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Product URL
              </label>
              <input
                name="url"
                value={formData.url}
                onChange={handleChange}
                type="url"
                placeholder="Enter the product affiliate link"
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Platform */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Platform
              </label>
              <select
                name="platform"
                value={formData.platform}
                onChange={handleChange}
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select</option>
                <option>Amazon</option>
                <option>Flipkart</option>
                <option>Myntra</option>
                <option>Meeso</option>
                <option>Other</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
            >
              Add Product
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Admin;
