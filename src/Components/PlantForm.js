import React, { Component } from 'react';

class PlantForm extends Component {
  render() {
    const {
      handleChange,
      handleClick,
      plantName,
      plantLocation,
      plantSpecies,
    } = this.props;

    return (
      <section className='formContainer'>
        <div className='taskContainer'>
          <h1>Plant Parenthood</h1>
          <p>Let me help <span>you</span> become a better plant parent. I'll log and track all your tasks so you can build good care habits for your plant babies!</p>
          <h2>What's your plant's name?</h2>

          <form action='submit'>
          <div className='info'>
            <img className="plantLogo" src={require("../assets/book.png")} alt="icon of a hand pouring botanical plant seeds" />
            <input
              type='text'
              name='plantName'
              placeholder='i.e. tree diddy'
              onChange={handleChange}
              value={plantName}
            />
          </div>

            <h2>Where's your plant located?</h2>
            <div className='info'>
              <img className="plantLogo" src={require("../assets/location.png")} alt="icon of plant indoors" />
              <input
                type='text'
                name='plantLocation'
                placeholder='i.e. the kitchen'
                onChange={handleChange}
                value={plantLocation}
              />
          </div>

          <h2>What's your plant's species?</h2>
          <div className='info'>
            <img className="plantLogo" src={require("../assets/monstera.png")} alt="icon of a hand pouring botanical plant seeds" />
              <input
                type='text'
                name='plantSpecies'
                placeholder='i.e. monstera deliciosa'
                onChange={handleChange}
                value={plantSpecies}
              />
            </div>
            <button type='button' onClick={handleClick}>create my list!</button>
          </form>
        </div>
      </section>
    )
  }
}

export default PlantForm;