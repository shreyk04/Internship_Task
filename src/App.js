import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Gallery from "./Components/Gallery";
import EventsPage from "./Components/EventsPage";
import DonorsPage from "./Components/DonorsPage";
import ContactPage from "./Components/ContactPage";
import HelpUsPage from "./Components/HelpUsPage";
import ScrollToTop from "./Components/ScrollToTop";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/events" element={<EventsPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/donors" element={<DonorsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/helpus" element={<HelpUsPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
