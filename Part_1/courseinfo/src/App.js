const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <p>{props.part}: {props.exercise}</p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} exercise={props.exercises1} />
      <Part part={props.part2} exercise={props.exercises2} />
      <Part part={props.part3} exercise={props.exercises3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.total}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const content = {
    part1 : 'Fundamentals of React',
    exercises1 : 10,
    part2 : 'Using props to pass data',
    exercises2 : 7,
    part3 : 'State of a component',
    exercises3 : 14
  }

  return (
    <div>
      <Header course={course} />
      <Content {...content} />
      <Total total={content.exercises1 + content.exercises2 + content.exercises3} />
    </div>
  )
}

export default App