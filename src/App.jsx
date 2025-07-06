import React from "react";
import Home from "./Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Page from "./affiliate/Page";
import Admin from "./affiliate/admin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./affiliate/Login";
import DeleteProducts from "./affiliate/DeleteProducts";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Define routes for the affiliate section */}
          <Route path="/affiliate" element={<Page />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/delete-products" element={<DeleteProducts />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default App;
