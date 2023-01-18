const Header = ( { name } ) => {
  return (
    <>
      <h1>{name}</h1>
    </>
  )
}

const Part = ( { part, exercise } ) => {
  return (
    <p>{part}: {exercise}</p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props[0].name} exercise={props[0].exercise} />
      <Part part={props[1].name} exercise={props[1].exercise} />
      <Part part={props[2].name} exercise={props[2].exercise} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props[0].exercise + props[1].exercise + props[2].exercise}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: "Fundamentals of React",
        exercise: 10,
      },
      {
        name: "Using props to pass data",
        exercise: 7,
      },
      {
        name: "State of a component",
        exercise: 14,
      },
    ]  
  }

  return (
    <div>
      <Header {...course} />
      <Content {...course.parts} />
      <Total {...course.parts} />
    </div>
  )
}

export default App