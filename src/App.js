import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'kanu', age: 10 },
      { name: 'Stephanie', age: 56 },
    ],
    otherState: 'some other value'
  });

  const switchNameJandler = () => {
    // console.log('Was sclicked!');
    setPersonsState({
      persons: [
        { name: 'nananana', age: 28 },
        { name: 'kanu', age: 10 },
        { name: 'Stephanie', age: 100 },
      ]
     })
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameJandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}  />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} >My Hobbies: Racing</Person>
      <Person name={personsState.persons[2].name}  age={personsState.persons[2].age}/>
    </div>
  );
}

export default app;

