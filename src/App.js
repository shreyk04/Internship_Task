import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import CardWithText from "./Components/CardWithText";
import PageHeader from "./Components/PageHeader";
import Gallery from "./Components/Gallery";
import Events from "./Components/EventsPage";
import EventsPage from "./Components/EventsPage";
import DonorsPage from "./Components/DonorsPage";
import { Route, Routes } from "react-router-dom";
import ContactPage from "./Components/ContactPage";
import HelpUsPage from "./Components/HelpUsPage";
import StatsSection from "./Components/StatsSection";
import ContactUs from "./Components/ContactUs";
import TeamProfiles from "./Components/TeamProfiles";
import TestimonialPage from "./Components/TestimonialPage";
import Collaboration from "./Components/Collaboration";
import TestimonialReviews from "./Components/TestimonialReviews";
import Services from "./Components/Services";
import ApplyHere from "./Components/ApplyHere";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/donors" element={<DonorsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/helpus" element={<HelpUsPage />} />
      </Routes>

      {/* <CardWithText
        src={"images/gallery/AnimalFeeding.jpg"}
        text={"Free Workshops"}
      />
      <Footer /> */}
      {/* <PageHeader /> */}
      {/* <Gallery /> */}
      {/* <EventsPage /> */}
      {/* <DonorsPage /> */}
      <Footer />
    </div>
  );
}

export default App;
