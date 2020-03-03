import React, { Component } from 'react';

class PlantLocation extends Component {
  render() {
    const {
      handleChange,
      plantLocation,
      // taskInputError
    } = this.props;

    return (
      <section className="homepageContainer">
        <div className="headerContainer">
          <h1></h1>
        </div>

        <div className="homepageDescription">
          <img className="plantLogo" src={require("../assets/location.png")} alt="icon of plant indoors" />
          <h2><span>2.</span> Where's your plant located?</h2>

          <form action="submit">
            <input
              onChange={handleChange}
              type="text"
              placeholder="i.e. the kitchen"
              value={plantLocation}// this value is continually updating
            />

            <button type="submit">noice</button>
          </form>
        </div>
      </section>
    )
  }
}

export default PlantLocation;