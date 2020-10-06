import React from "react";
import "./assets/styles.css";
import Header from "./components/molecules/Header";
import Footer from "./components/molecules/Footer";
import Accordion from "./components/atoms/Accordion";
import Slider from "./components/atoms/Slick";

export default function App() {
  return (
    <div className="App">
      <Header text="MYTASK" />
      <Slider />
      <Accordion />
      <Footer text="KentoNakano" />
    </div>
  );
}
