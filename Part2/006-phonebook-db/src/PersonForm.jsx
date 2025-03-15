import { useState } from 'react'

const PersonForm = ({persons, setPersons}) => {
    const [newName, setNewName] = useState('')
    const [newPhoneNumber, setNewPhoneNumber] = useState('')

    const addName = (event) => {
        // prevent page from reloading
        event.preventDefault();
    
        // alert the user and exit if name already exists
        const nameExists = persons.flatMap(person => person.name).includes(newName);
        if (nameExists) {
          alert(`${newName} is already added to phonebook`)
          return;
        }
    
        // create new name object
        const newNameObject = {
          name: newName,
          number: newPhoneNumber
        }
        // add to persons array
        setPersons(persons.concat(newNameObject))
        console.log(persons);
      }

    const handleNameChange = (event) => {
        setNewName(event.target.value);
    }
    
    const handlePhoneNumberChange = (event) => {
        setNewPhoneNumber(event.target.value);
    }

    return (
        <>
            <form>
                <div>
                    name: <input type="text" value={newName} onChange={handleNameChange} />
                    number: <input type="text" value={newPhoneNumber} onChange={handlePhoneNumberChange} />
                </div>
                <div>
                    <button type="submit" onClick={(e) => addName(e)}>add</button>
                </div>
            </form>
        </>
    )
}

export default PersonForm