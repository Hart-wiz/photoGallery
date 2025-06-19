import React from "react";
import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Gallery from "./components/Gallery/Gallery";
import Testimonial from "./components/Testimonial/Testimonial";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="app">
      <Nav />

      <Hero />
      <About />
      <Services />
      <Gallery />
      <Testimonial />
      <Form />
      <Footer />
    </div>
  );
};

export default App;
