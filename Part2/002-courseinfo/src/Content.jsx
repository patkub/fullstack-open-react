
import Part from './Part'

const Content = ({parts}) => {
    return (
        <>
            {parts.map((part, i) =>
                <Part key={i} name={part.name} exercises={part.exercises}></Part>
            )}
        </>
    )
}

export default Content