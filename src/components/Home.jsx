import React from "react";
import "../styles/Project.css";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Work from "./Work";
import Navbar from "./Navbar";
import Hero from "./Hero";

class Home extends React.Component {
    
  render() {

    return (
      <div>
        <Navbar />
        <Hero />
        <About />
        <Work />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Home;
