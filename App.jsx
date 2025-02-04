import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(){
  <div> 
  <ToDoList taskOne= "Learn React" taskTwo= "Build a To-Do List" taskThree= "Master JavaScript" taskFour="Apply For Jobs" /> 
  </div>
    return(
      function ToDoList(props){
        <p>
          <div class="task">
            <input type="checkbox" class="status"></input> {props.taskOne}
          </div>
          <div class="task">
            <input type="checkbox" class="status"></input> {props.taskTwo}
          </div>
          <div class="task">
            <input type="checkbox" class="status"></input> {props.taskThree}
          </div>
          <div class="task">
            <input type="checkbox" class="status"></input> {props.taskFour}
          </div>
        </p>
      }
    );  
}
export default App
