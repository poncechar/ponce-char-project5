import React, { Component } from 'react';
import firebase from './firebase.js';
import PlantForm from './Components/PlantForm.js';
import PlantTasks from './Components/PlantTasks.js';
import PlantTaskList from './Components/PlantTaskList.js'
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      taskList: [],
      plantName: '',
      plantSpecies: '',
      plantLocation: '',
      taskOne: '',
      taskTwo: '',
      taskThree: '',
      taskFour: '',
      taskFive: '',
    }

  }

  componentDidMount() {
    const dbRef = firebase.database().ref();

    dbRef.on('value', (response) => {
      const dataFromDb = response.val();
      const stateToBeSet = [];
      for (let key in dataFromDb) {
        const plantInfo = {
          key: key,
          display: dataFromDb[key],
        }
        stateToBeSet.push(plantInfo);
      }

      this.setState({
        taskList: stateToBeSet,
      })
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  // scrollToTasks = () => {
  //   scroller.scrollTo('PlantTasks', {
  //     smooth: true,
  //     duration: 500,
  //   });
  // };

  // handleClick = () => {
  //   scrollToTasks();
  // }

  handleFormSubmit = (e) => {
    e.preventDefault();
    const dbRef = firebase.database().ref();
    dbRef.push({
      plantName: this.state.plantName,
      plantLocation: this.state.plantLocation,
      plantSpecies: this.state.plantSpecies,
      taskOne: this.state.taskOne,
      taskTwo: this.state.taskTwo,
      taskThree: this.state.taskThree,
      taskFour: this.state.taskFour,
      taskFive: this.state.taskFive
    });

    this.setState({
      plantName: '',
      plantLocation: '',
      plantSpecies: '',
      taskOne: '',
      taskTwo: '',
      taskThree: '',
      taskFour: '',
      taskFive: '',
    });

}

  render() {
    return (
      <main className='App'>
        <PlantForm
          handleChange={this.handleChange}
          handleClick={this.handleClick}
          plantName={this.state.plantName}
          plantLocation={this.state.plantLocation}
          plantSpecies={this.state.plantSpecies}
        />

      <div className='PlantTasks'>
        <PlantTasks
          handleChange={this.handleChange}
          handleFormSubmit={this.handleFormSubmit}
          taskOne={this.state.taskOne}
          taskTwo={this.state.taskTwo}
          taskThree={this.state.taskThree}
          taskFour={this.state.taskFour}
          taskFive={this.state.taskFive}
        />
      </div>

      <div className='taskList'>
        {
          this.state.taskList.map((task) => {
            return (
              <PlantTaskList
                key={task.key}
                plantName={task.display.plantName}
                plantLocation={task.display.plantLocation}
                plantSpecies={task.display.plantSpecies}
                taskOne={task.display.taskOne}
                taskTwo={task.display.taskTwo}
                taskThree={task.display.taskThree}
                taskFour={task.display.taskFour}
                taskFive={task.display.taskFive}
              />
            )
          })
        }
      </div>

      </main>
    );
  }
}

export default App;