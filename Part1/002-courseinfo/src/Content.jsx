
import Part from './Part.jsx'

const Content = ({props}) => {
    console.log(props)
    return(
        <>
            <Part part={props.part1} exercises={props.exercises1}></Part>
            <Part part={props.part2} exercises={props.exercises2}></Part>
            <Part part={props.part3} exercises={props.exercises3}></Part>
        </>
    )
}
  
export default Content