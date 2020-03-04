import React, { Component } from 'react';
import firebase from './firebase.js';
import PlantForm from './Components/PlantForm.js';
import PlantTasks from './Components/PlantTasks.js';
import PlantTaskList from './Components/PlantTaskList.js'
import { animateScroll as scroller } from 'react-scroll';
import Swal from 'sweetalert2';
import './App.css';

const Scroll = require('react-scroll');
const Element = Scroll.Element;

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

  handleClick = () => {
    scroller.scrollTo(685, {
      smooth: true,
      duration: 500
    })
  }

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

    scroller.scrollToBottom();
  }

  scrollToBottom = () => {
    scroller.scrollToBottom();
  };

  removeList = (taskKey) => {
    Swal.fire({
      title: 'Are you finished all your tasks?',
      confirmButtonColor: '#b7a6b5',
      cancelButtonColor: '#decfdd',
      showCancelButton: true,
      confirmButtonText: 'yes i am now a good plant parent'
    }).then(result => {
      if (result.value) {
        const dbRef = firebase.database().ref();
        dbRef.child(taskKey).remove();
        Swal.fire('removed!', 'your task list is gone');
      }
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

      <Element name='plantTasks'>
        <PlantTasks
          handleChange={this.handleChange}
          handleFormSubmit={this.handleFormSubmit}
          taskOne={this.state.taskOne}
          taskTwo={this.state.taskTwo}
          taskThree={this.state.taskThree}
          taskFour={this.state.taskFour}
          taskFive={this.state.taskFive}
        />
      </Element>

      <div name='taskList'>
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
                removeList={ () => this.removeList(task.key) }
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