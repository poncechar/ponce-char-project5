import React, { Component } from 'react';

class Homepage extends Component {
  render() {
    return (
      <div className="homepageContainer">
        <div className="headerContainer">
          <h1>Plant Parenthood</h1>
        </div>

        <div className="homepageDescription">
          <img className="plantLogo" src={require("../assets/monstera.png")} alt="icon of a monstera plant" />
          <p>Let me help <span>you</span> become a better plant parent. I'll log and track all your tasks so you can build good care habits for your plant babies!</p>
          <h2><span>1.</span> What's your plant's name?</h2>

          <form action="submit" onSubmit={this.handleFormSubmit}>
            <input
              onChange={this.handleChange}
              type="text"
              placeholder="i.e. tree diddy" // this value is continually updating
            />
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
      </div>
    </div>
    )
  }
}

export default Homepage;