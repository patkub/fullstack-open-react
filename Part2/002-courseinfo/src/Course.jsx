
import Header from './Header.jsx'
import Content from './Content.jsx'
import Total from './Total.jsx'

const Course = ({courses}) => {
    return (
        <>
            {
                courses.map((item, i) =>
                    <div key={item.id}>
                        <Header name={item.name}></Header>
                        <Content parts={item.parts}></Content>
                        <Total parts={item.parts}></Total>
                    </div>
                )
            }
        </>
    )
}

export default Course