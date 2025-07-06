import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";
import { db } from "./firebase.js";
import { collection, getDocs } from "firebase/firestore";

const Page = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // optional: to handle loading state

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const snapshot = await getDocs(collection(db, "products"));
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 mt-2 flex justify-center">
        {loading ? (
          <p className="text-lg text-gray-600">Loading...</p>
        ) : products.length === 0 ? (
          <p className="text-lg text-gray-600">No products available</p>
        ) : (
          <div className="flex flex-wrap gap-4 justify-center">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Page;
