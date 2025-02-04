
function App(){
  <div> 
  <Tasks taskOne= "Learn React" taskTwo= "Build a To-Do List" taskThree= "Master JavaScript" taskFour="Apply For Jobs" /> 
  </div>
      function Tasks(props){
        return(
          <>
          <div class="task">
            <input type="checkbox" class="status"></input> <p>{props.taskOne}</p>
          </div>
          <div class="task">
            <input type="checkbox" class="status"></input> <p>{props.taskTwo}</p>
          </div>
          <div class="task">
            <input type="checkbox" class="status"></input> <p>{props.taskThree}</p>
          </div>
          <div class="task">
            <input type="checkbox" class="status"></input> <p>{props.taskFour}</p>
          </div>
          </>
        );
      }  
}

export default App