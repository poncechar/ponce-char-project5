import React from 'react';

const plantTaskList = ({
  plantName,
  plantLocation,
  plantSpecies,
  taskOne,
  taskTwo,
  taskThree,
  taskFour,
  taskFive,
  userKey
}) => {
  
  return (
    <section className='formContainer'>
      <div className='plantTaskContainer wrapper'>
        <div className='taskList'
          key={userKey}
        >
          <img className='plantTaskLogo' src={require('../assets/hanging-pot.png')} alt='icon of a watering can' />
          
          <h2><span className='title'>Your Plant Information</span></h2>
            <ul>
              <li><span className='plantInfo'>Name:</span> {plantName}</li>
              <li><span className='plantInfo'>Location:</span> {plantLocation}</li>
              <li><span className='plantInfo'>Species:</span> {plantSpecies}</li>
            </ul>
          <h2><span className='title'>Tasks to do:</span></h2>
            <ul>
              <li>{taskOne}</li>
              <li>{taskTwo}</li>
              <li>{taskThree}</li>
              <li>{taskFour}</li>
              <li>{taskFive}</li>
            </ul>
        </div>
      </div>
    </section>
  )
}

export default plantTaskList;