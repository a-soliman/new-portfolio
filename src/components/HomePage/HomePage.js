import React from "react";

/* COMPONENTS */
import Intro from "./HomeComponents/Intro";
import Navigation from "./HomeComponents/Navigation";
import About from "./HomeComponents/About";
import Resume from "./HomeComponents/Resume";
import Work from "./HomeComponents/Work";
import Contact from "./HomeComponents/Contact";
import Footer from "./HomeComponents/Footer";

class HomePage extends React.Component {
  render() {
    return (
      <div className="home-page-wrapper">
        <Intro />
        <Navigation />
        <About />
        <Resume />
        <Work />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
