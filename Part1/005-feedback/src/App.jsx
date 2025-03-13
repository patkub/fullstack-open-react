import { useState } from 'react'
import './App.css'


const StatisticsLine = (props) => {
  return(
    <>
      <li>{props.text} {props.value}</li>
    </>
  )
}

const Button = (props) => {
  return(
    <>
      <button onClick={() => props.onClick()}>{props.text}</button>
    </>
  )
}

function sumAll(stats) {
  return stats.good + stats.neutral + stats.bad;
}
function calcAverage(stats) {
  return Math.abs(stats.good - stats.bad)/(sumAll(stats));
}
function positive(stats) {
  return (100*stats.good/(stats.good + stats.neutral + stats.bad)) + "%";
}

// a proper place to define a component
const Statistics = (props) => {
  // console.log(props);
  const stats = props.stats;
  // console.log(stats);
  return(
    <>
      <h2>statistics</h2>
      <ul>
        <StatisticsLine text="good" value={stats.good}></StatisticsLine>
        <StatisticsLine text="neutral" value={stats.neutral}></StatisticsLine>
        <StatisticsLine text="bad" value={stats.bad}></StatisticsLine>
        <StatisticsLine text="all" value={stats.good + stats.neutral + stats.bad}></StatisticsLine>
        <StatisticsLine text="average" value={calcAverage(stats)}></StatisticsLine>
        <StatisticsLine text="positive" value={positive(stats)}></StatisticsLine>
      </ul>
    </>
  )
}

function App() {
  // save clicks of each button on its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <h2>give feedback</h2>
      <div>
        <Button onClick={() => {setGood(good + 1)}} text="good"></Button>
        <Button onClick={() => {setNeutral(neutral + 1)}} text="neutral"></Button>
        <Button onClick={() => {setBad(bad + 1)}} text="bad"></Button>
      </div>
      <Statistics stats={{good, neutral, bad}}></Statistics>
    </>
  )
}

export default App
