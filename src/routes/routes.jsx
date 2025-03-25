import React from "react";
import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Privacy from "../pages/Privacy";
import Layout from "../components/Layout";
import Login from "../pages/Login";

const Approutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/Login" element={<Login />} />
      </Route>
      <Route path="/page/login" element={<Login/>}/>
    </Routes>
  );
};

export default Approutes;
