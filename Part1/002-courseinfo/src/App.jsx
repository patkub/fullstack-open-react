import Header from './Header.jsx'
import Content from './Content.jsx'
import Total from './Total.jsx'

const App = () => {
  const course = 'Half Stack application development'

  const contentProps = {
    part1: 'Fundamentals of React',
    part2: 'Using props to pass data',
    part3: 'State of a component',

    exercises1: 10,
    exercises2: 7,
    exercises3: 14
  }

  return (
    <div>
      <Header name={course}></Header>
      <Content props={contentProps}></Content>
      <Total total={contentProps.exercises1 + contentProps.exercises2 + contentProps.exercises3}></Total>
    </div>
  )
}

export default App