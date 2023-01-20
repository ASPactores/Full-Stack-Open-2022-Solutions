import { useState } from 'react'

const PopularAnecdote = ( {voteCount, anecdotes} ) => {
  const popularAnecdote = () => {
    let highest = voteCount[0];
    let highestIndex = 0;
    for (let i = 1; i < anecdotes.length; i++) {
      if (voteCount[i] > highest) {
        highest = voteCount[i];
        highestIndex = i;
      }
    }
    return highestIndex;
  }
  return (
    <>
      <h1>Anecdote with the most votes</h1>
      <p>{anecdotes[popularAnecdote()]}</p>
      <p>Has {voteCount[popularAnecdote()]} votes.</p>   
    </>
  )
}

const Button = ( {handleCLick, text} ) => {
  return (
    <button onClick={handleCLick}>{text}</button>
  );
}

const Anecdote = ( {vote, anecdotes, selected} ) => {
  return (
    <>
      <h1>Anecdote of the Day</h1>
      <p>{anecdotes[selected]}</p>
      <p>Has {vote[selected]} votes.</p>
    </>
  );
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(Array(anecdotes.length).fill(0));

  const handleVoteClick = () => {
    var updateVote = [...vote];
    updateVote[selected]++;
    setVote(updateVote);
  }

  return (
    <div>
      <Anecdote vote={vote} anecdotes={anecdotes} selected={selected}/>
      <Button handleCLick={handleVoteClick} text="Vote" />
      <Button handleCLick={() => setSelected(Math.floor(Math.random() * anecdotes.length))} text="Next Anecdote" />
      <PopularAnecdote voteCount={vote} anecdotes={anecdotes}/>
    </div>
  )
}

export default App;