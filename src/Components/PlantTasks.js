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
        <div className='plantTaskContainer'>
          <h2>Plant Tasks</h2>
          <p>Create your plant task list here:</p>

        <form action='submit' onSubmit={handleFormSubmit}>
          <div className='task'>
            <label htmlFor='taskOne'>
              <img className='plantTaskLogo' src={require('../assets/watering-can.png')} alt='icon of a watering can' />
            </label>
            <input
              type='text'
              name='taskOne'
              placeholder='i.e. water plant'
              onChange={handleChange}
              value={taskOne}
            />
          </div>

          <div className='task'>
            <label htmlFor='taskTwo'>
              <img className='plantTaskLogo' src={require('../assets/pots.png')} alt='icon of two planter pots' />
            </label>
            <input
              type='text'
              name='taskTwo'
              placeholder='i.e. repot'
              onChange={handleChange}
              value={taskTwo}
            />
          </div>

          <div className='task'>
            <label htmlFor='taskThree'>
              <img className='plantTaskLogo' src={require('../assets/mist.png')} alt='icon of a plant spray bottle mister' />
            </label>
            <input
              type='text'
              name='taskThree'
              placeholder='i.e. mist her tender leafs'
              onChange={handleChange}
              value={taskThree}
            />
          </div>

          <div className='task'>
            <label htmlFor='taskFour'>
              <img className='plantTaskLogo' src={require('../assets/chlorophytum.png')} alt='icon of a spider plant' />
            </label>
            <input
              type='text'
              name='taskFour'
              placeholder='i.e. buy more plants'
              onChange={handleChange}
              value={taskFour}
            />
          </div>

          <div className='task'>
            <label htmlFor='taskFive'>
              <img className='plantTaskLogo' src={require('../assets/fertilizer.png')} alt='icon of plant fertilizer' />
            </label>
            <input
              type='text'
              name='taskFive'
              placeholder='i.e. fertilize my sweet baby'
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