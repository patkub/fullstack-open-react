import { useState } from 'react'

import Filter from "./Filter.jsx"
import PersonForm from "./PersonForm.jsx"
import Persons from "./Persons.jsx"

const App = () => {
  // const [persons, setPersons] = useState([
  //   { name: 'Arto Hellas', number: '040-123456' },
  //   { name: 'Ada Lovelace', number: '39-44-5323523' }
  // ])

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter></Filter>

      <h2>add a new</h2>
      <PersonForm persons={persons} setPersons={setPersons}></PersonForm>
      
      <h2>Numbers</h2>
      <Persons persons={persons}></Persons>
    </div>
  )
}

export default App