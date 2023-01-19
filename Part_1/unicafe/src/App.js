import { useState } from 'react'

const StatisticLine = ( {text, value} ) => {
  if (text === 'Positive') {
    return (
      <tr>
        <td>{text}</td>
        <td>{value} %</td>
      </tr>
    )
  }
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Button = ( {onClick, text} ) => {
  return (
    <button onClick={onClick}>{text}</button>
  );
}

const Statistics = ( {good, neutral, bad} ) => {
  let all = good + neutral + bad;
  let average = ((good * 1) + (neutral * 0) + (bad * (-1))) / all;
  if (all === 0) {
    return (
      <>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </>
    );
  }
  return (
    <>
      <h1>Statistics</h1>
      <table>
        <thead>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="All" value={all} />
          <StatisticLine text="Average" value={average.toFixed(1)} />
          <StatisticLine text="Positive" value={((good * 100) / all).toFixed(1)} />
        </thead>
      </table>
    </>
  );
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={() => {setGood(good + 1)}} text="Good" />
      <Button onClick={() => {setNeutral(neutral + 1)}} text="Neutral" />
      <Button onClick={() => {setBad(bad + 1)}} text="Bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App