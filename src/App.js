import React from "react";
import "./assets/styles.css";
import DrawerHeader from "./components/molecules/DrawerHeader";
import Footer from "./components/molecules/Footer";
import Accordion from "./components/atoms/Accordion";
import Slider from "./components/atoms/Slick";
import Lightbox from "./components/atoms/Lightbox";
import ScrollUp from "./components/atoms/ScrollUp";

export default function App() {
  return (
    <div className="App">
      <DrawerHeader />
      <div className="inner-container">
        <div className="layout">
          <h2 name="slider">■Slider</h2>
          <Slider />
        </div>
        <div className="layout">
          <h2 name="modal">■Modal Window</h2>
          <Lightbox />
        </div>
        <div className="layout">
          <h2 name="accordion">■Accordion Panel</h2>
          <Accordion />
        </div>
      </div>
      <ScrollUp />
      <Footer text="KentoNakano" />
    </div>
  );
}
