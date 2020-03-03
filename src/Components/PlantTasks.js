import React, { Component } from 'react';

class PlantTasks extends Component {
  render() {
    const {
      handleChange,
      handleFormSubmit,
      taskOne,
      taskTwo,
      taskThree,
      taskFour,
      taskFive,
    } = this.props;

    return (
      <section className='formContainer'>
        <div className='taskContainer'>
          <h2>Plant Tasks</h2>
          <p>Create your plant task list here:</p>

        <form action='submit' onSubmit={handleFormSubmit}>
        <div className='task'>
              <img className='plantTaskLogo' src={require('../assets/watering-can.png')} alt='icon of a watering can' />
            <input
              type='text'
              name='taskOne'
              placeholder='i.e. water plant'
              onChange={handleChange}
              value={taskOne} // this value is continually updating
            />
        </div>

            <div className='task'>
              <img className='plantTaskLogo' src={require('../assets/pots.png')} alt='icon of two planter pots' />
              <input
                type='text'
                name='taskTwo'
                placeholder='i.e. repot'
                onChange={handleChange}
                value={taskTwo}
              />
            </div>

            <div className='task'>
              <img className='plantTaskLogo' src={require('../assets/mist.png')} alt='icon of a plant spray bottle mister' />
              <input
                type='text'
                name='taskThree'
                placeholder='i.e. mist her tender leafs'
                onChange={handleChange}
                value={taskThree}
              />
            </div>

            <div className='task'>
              <img className='plantTaskLogo' src={require('../assets/chlorophytum.png')} alt='icon of a spider plant' />
              <input
                type='text'
                name='taskFour'
                placeholder='i.e. buy more plants'
                onChange={handleChange}
                value={taskFour}
              />
            </div>

            <div className='task'>
              <img className='plantTaskLogo' src={require('../assets/fertilizer.png')} alt='icon of plant fertilizer' />
              <input
                type='text'
                name='taskFive'
                placeholder='i.e. fertilze my sweet baby'
                onChange={handleChange}
                value={taskFive}
              />
            </div>
            <button type='submit'>submit</button>
        </form>
        </div>
      </section>  
    )
  }
}

export default PlantTasks;