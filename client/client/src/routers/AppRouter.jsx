import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </>
  );
};

export default AppRouter;
