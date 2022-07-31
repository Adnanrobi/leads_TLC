import React, { useState } from "react";
// import classes from "./App.module.css";
import Person from "../Persons/Person/Person";

const App = (props) => {
  const [PersonsState, setPersonsState] = useState({
    persons: [
      { name: "robi", age: 24 },
      { name: "faria", age: 25 },
    ],
    otherState: "random",
    showPerson: false,
  });

  const switchNameHandler = (newName) => {
    setPersonsState({
      persons: [
        { name: newName, age: 1 },
        { name: "FariaFarooq", age: 2 },
      ],
    });
  };

  const nameChangedHandler = (event) => {
    setPersonsState({
      persons: [
        { name: event.target.value, age: 1 },
        { name: "FariaFarooq", age: 2 },
      ],
    });
  };

  const toggleHandler = () => {
    const doesShow = PersonsState.showPerson;
    setPersonsState({showPerson: !doesShow})
  };

  return (
    <div>
      <h1>Its the react app</h1>
      <button onClick={toggleHandler}>Click</button>
      {console.log('here')}
      {
        PersonsState.showPerson===true?
      <div>
        <Person
          name={PersonsState.persons[0].name} 
          age={PersonsState.persons[0].age}
        />
        <Person
          name={PersonsState.persons[1].name}
          age={PersonsState.persons[1].age}
        />
      </div> : null
      }
    </div>
  );
};

export default App;
