import { useState, useEffect } from 'react'

import Filter from "./Filter.jsx"
import PersonForm from "./PersonForm.jsx"
import Persons from "./Persons.jsx"
import Notification from './Notification.jsx'

import personsService from './services/persons.js'

const App = () => {
  // const [persons, setPersons] = useState([
  //   { name: 'Arto Hellas', number: '040-123456' },
  //   { name: 'Ada Lovelace', number: '39-44-5323523' }
  // ])

  // const [persons, setPersons] = useState([
  //   { name: 'Arto Hellas', number: '040-123456' },
  //   { name: 'Ada Lovelace', number: '39-44-5323523' },
  //   { name: 'Dan Abramov', number: '12-43-234345' },
  //   { name: 'Mary Poppendieck', number: '39-23-6423122' }
  // ])

  const [persons, setPersons] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    console.log('effect')
    personsService.getAll().then((persons) => {
      console.log('promise fulfilled')
      setPersons(persons);
    })
  }, [])
  console.log('render', persons.length, 'persons')

  const [filterName, setFilterName] = useState('');

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(filterName.toLowerCase())
  );

  function handleDelete(e, id) {
    e.preventDefault();
    console.log(`deleting by id: ${id}`)

    personsService.deleteById(id).then((deleteResult) => {
      console.log(`delete result: ${JSON.stringify(deleteResult)}`)
      personsService.getAll().then((persons) => {
        console.log('getAll after delete promise fulfilled')
        setPersons(persons);
      })
    }).catch(error => {
      const alreadyDeletedPerson = persons.filter(n => n.id === id);
      if (alreadyDeletedPerson && alreadyDeletedPerson.length >= 1) {
        setErrorMessage(
          `Information of '${alreadyDeletedPerson[0].name}' has already been removed from server`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      }
      setPersons(persons.filter(n => n.id !== id))
    })
  }

  function handleAddPerson(newPersonObject) {
    // update the database
    personsService
      .create(newPersonObject)
      .then(returnedPerson => {
        console.log(`adding ${JSON.stringify(returnedPerson)} to list of people`)
        setPersons(persons.concat(returnedPerson));
      })
      .catch(error => {
        alert(
          `Error adding new person: ${error}`
        )
      })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} />
      <Filter filterName={filterName} setFilterName={setFilterName}></Filter>

      <h2>add a new</h2>
      <PersonForm persons={persons} addPerson={handleAddPerson}></PersonForm>
      
      <h2>Numbers</h2>
      <Persons persons={filteredPersons} handleDelete={handleDelete}></Persons>
    </div>
  )
}

export default App