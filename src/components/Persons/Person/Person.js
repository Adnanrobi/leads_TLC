import React from 'react'

const person = (props) => {
  return (
    <div>
        <p onClick={props.click}> I'm {props.name} and i am {props.age} years old</p>
        <input type="text" onChange={props.nameChanged} />
    </div>
  )
}

export default person;
