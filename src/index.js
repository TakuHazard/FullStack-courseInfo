import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) =>{
  console.log("Header props is " + props)
  return(
    <div>
      <p>{props.course}</p>
    </div>
  )
}
const Part = (props) =>{
  return(
    <div>
      <p>
        {props.part} {props.exercise}
      </p>
    </div>
  )
}
const Content = (props) =>{
  console.log(props)
  console.log(props)
  return(
    <div>
      <Part part = {props.parts[0].name} exercise = {props.parts[0].exercises} />
      <Part part = {props.parts[1].name} exercise = {props.parts[1].exercises} />
      <Part part = {props.parts[2].name} exercise = {props.parts[2].exercises} />
    </div>
  )
}

const Total = (props) =>{
  return(
    <div>
      <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    </div>
  )


}

const square = p => p * p
const t = [1,2,3]
const tSquared = t.map(square)
console.log(tSquared.toString())

const App = () =>{ 
  const course = {
    name : 'Half Stack application development',
   parts :[  
    {
      name : 'Fundementals of React',
      exercises : 10
    },
    {
      name : 'Using props to pass data',
      exercises : 7
    },
    {
      name: 'State of a component',
      exercises : 14
    }
  ]
  }
console.log("Inside app with" + course)
  return(
    <div>
      <Header course = {course.name} />
      <Content parts = {course.parts} />
      <Total parts = {course.parts} />
    </div>
  )
}
ReactDOM.render(<App />,document.getElementById('root')
);

