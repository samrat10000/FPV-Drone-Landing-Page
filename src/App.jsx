import React, { useState, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Features from "./components/Features";
import Price from "./components/Price";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

const App = () => {
  const [theme, setTheme] = useState("light");
  const priceRef = useRef(null);
  const aboutRef = useRef(null);
  const homeRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className={`container ${theme}`}>
      <Navbar
        theme={theme}
        setTheme={setTheme}
        priceRef={priceRef}
        aboutRef={aboutRef}
        homeRef={homeRef}
        contactRef={contactRef}
      />
      <div ref={homeRef}>
        <Hero theme={theme} setTheme={setTheme} />
      </div>
      <div ref={aboutRef}>
        <Info theme={theme} setTheme={setTheme} />
      </div>
      <Features theme={theme} setTheme={setTheme} />
      <div ref={priceRef}>
        <Price theme={theme} setTheme={setTheme} />
      </div>
      <Testimonial theme={theme} setTheme={setTheme} />
      <div ref={contactRef}>
        <Footer theme={theme} setTheme={setTheme} />
      </div>
    </div>
  );
};

export default App;
