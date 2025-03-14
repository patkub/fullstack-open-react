function getTotal(parts) {
    return parts.reduce(
        (acc, curr) => acc + curr.exercises,
        0,
    );
}

const Total = ({parts}) => {
    return(
        <>
            <p><b>total of {getTotal(parts)} exercises</b></p>
        </>
    )
}
  
export default Total