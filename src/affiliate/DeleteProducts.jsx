import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import DeleteProductCard from "./DeleteProductCard";
import Navbar from "./Navbar";

const DeleteProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // add loading state

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

  const handleDelete = (deletedId) => {
    setProducts((prev) => prev.filter((p) => p.id !== deletedId));
  };

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
              <DeleteProductCard
                key={product.id}
                product={product}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default DeleteProductsPage;
