import React, { Component } from 'react';

class PlantSpecies extends Component {
  render() {
    return (
      <section className="homepageContainer">
        <div className="headerContainer">
          <h1></h1>
        </div>

        <div className="homepageDescription">
          <img className="plantLogo" src={require("../assets/seed.png")} alt="icon of a hand pouring botanical plant seeds" />
          <h2><span>3.</span> What's your plant's species?</h2>

          <form action="submit">
            <input
              onChange={this.handleChange}
              type="text"
              placeholder="i.e. monstera deliciosa" // this value is continually updating
            />

            <button type="submit">submit!</button>
          </form>
        </div>
      </section>
    )
  }
}

export default PlantSpecies;