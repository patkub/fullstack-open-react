import Person from "./Person.jsx"

const Persons = ({persons}) => {
    return (
        <>
            {persons.map((person) => (
                <Person key={person.name} name={person.name} phoneNumber={person.number} />
            ))}
        </>
    )
}

export default Persons