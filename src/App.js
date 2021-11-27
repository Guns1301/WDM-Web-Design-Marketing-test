import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
// import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";

import Home from "./components/Navigation/Home";
import AboutUs from "./components/Navigation/AboutUs";
import OurServices from "./components/Navigation/OurServices";
import ContactUs from "./components/Navigation/ContactUs";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Hero />
        <Footer style={{ background: "black" }} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<AboutUs />} />
          <Route exact path="/services" element={<OurServices />} />
          <Route exact path="/contact" element={<ContactUs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
