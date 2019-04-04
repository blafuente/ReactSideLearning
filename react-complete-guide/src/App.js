import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

// class App extends Component {
const app = props => {
  const [ personsState, setPersonsState] = useState({
    persons: [
      { name: "Brian", age: 30 },
      { name: "Khanh", age: 28 },
      { name: "Brandon", age: 23 }
    ],
    otherState: 'some other value'
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState); 

  const switchNameHandler = () => {
    // console.log('hello');
    // this.state.persons[0].name = "B-raw"; *DON'T DO THIS 
    setPersonsState({
      persons: [
        { name: "B-raw", age: 30 },
        { name: "Khanh", age: 27 },
        { name: "Brando", age: 23 }
      ] 
    })
  }

  // render() {
    return (
      <div className="App">
       <h1>Hello, I'm a React App</h1>
       <p>This is really working.</p>
       <button onClick={switchNameHandler}>Switch Name</button>
       <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
       <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Racing</Person>
       <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
      </div>
    
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Does this work now?'));
  }
// }

export default app;
  

