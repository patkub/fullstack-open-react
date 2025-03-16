import Person from "./Person.jsx"

const Persons = ({persons, handleDelete}) => {
    return (
        <>
            {persons.map((person) => (
                <Person key={person.name} id={person.id} name={person.name} phoneNumber={person.number} handleDelete={handleDelete} />
            ))}
        </>
    )
}

export default Persons