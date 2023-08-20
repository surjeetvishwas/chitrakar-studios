import React from "react";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Hero from './components/Hero';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <Footer/>
    </>
  );
};

const About = () => {
  return (
    <>
      <Navbar />
    </>
  );
};

const Service = () => {
  return (
    <>
      <Navbar />
    </>
  );
};

const Contact = () => {
  return (
    <>
      <Navbar />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/" element={<About/>} />
      <Route path="/" element={<Service/>} />
      <Route path="/" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
