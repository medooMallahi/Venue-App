import React, { Component } from "react";
import { Element } from "react-scroll";
import Header from "./components/header_footer/Header";
import Featured from "./components/featured/index";
import VunueNfo from "./components/VenueNfo/index";
import Highlights from "./components/Highlights/index";
import Pricing from "./components/pricing/index";
import Location from "./components/location/index";
import Footer from "./components/header_footer/Footer";
import "./resources/styles.css";

export default class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "1500px" }}>
        <Header />

        <Element name="featured">
          <Featured />
        </Element>
        <Element name="venuefo">
          <VunueNfo />
        </Element>

        <Element name="highights">
          <Highlights scrollto="highlights" />
        </Element>

        <Element name="pricing">
          <Pricing />
        </Element>

        <Element name="location">
          <Location />
        </Element>

        <Footer />
      </div>
    );
  }
}
