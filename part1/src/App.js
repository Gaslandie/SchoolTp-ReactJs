import React from "react";

const Header=({course})=><p>{course}</p>
const Part1=({part1,exercices1})=><p>{part1} {exercices1}</p>
const Part2=({part2,exercices2})=><p>{part2} {exercices2}</p>
const Part3=({part3,exercices3})=><p>{part3} {exercices3}</p>
const Content=()=>{
  const part1='Creating Components'
  const exercices1=10
  const part2='Using props to pass data'
  const exercices2=7
  const part3='State of a component'
  const exercices3=14
  return (
    <div>
      <Part1 part1={part1} exercices1={exercices1} />
      <Part2 part2={part2} exercices2={exercices2}  />
      <Part3 part3={part3} exercices3={exercices3}  />
    </div>
  )
}
const Total=({exercices1,exercices2,exercices3})=><p>
  Number of exercices {exercices1 + exercices2 + exercices3}
</p>


const App=()=>{
  const course='Front-end development with React'
  const exercices1=10
  const exercices2=7
  const exercices3=14

  return(
    <div>
      <Header course={course}/>
      <Content  />
      <Total exercices1={exercices1} 
              exercices2={exercices2}
              exercices3={exercices3} />
    </div>
  )
}
  
  
export default App;
