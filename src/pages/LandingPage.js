import React, { Component } from "react";

import Header from "part/Header";
import Hero from "part/Hero";
import MostPicked from "part/MostPicked";
import Categories from 'part/Categories'

import landingPage from "json/landingPage.json";
export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }

  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Hero refMostPicked={this.refMostPicked} data={landingPage.hero} />
        <MostPicked
          refMostPicked={this.refMostPicked}
          data={landingPage.mostPicked}
        />
        <Categories data={landingPage.categories}/>
      </>
    );
  }
}
