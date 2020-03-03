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
      <div className='plantTaskContainer'>
        <div className='taskList'
          key={userKey}
        >
          <h2><span className='title'>Your Plant Information</span></h2>
            <li><span className='plantInfo'>Name:</span> {plantName}</li>
            <li><span className='plantInfo'>Location:</span> {plantLocation}</li>
            <li><span className='plantInfo'>Species:</span> {plantSpecies}</li>
          <h2><span className='title'>Task to do:</span></h2>
            <li>{taskOne}</li>
            <li>{taskTwo}</li>
            <li>{taskThree}</li>
            <li>{taskFour}</li>
            <li>{taskFive}</li>
        </div>
      </div>
    </section>
  )
}

export default plantTaskList;