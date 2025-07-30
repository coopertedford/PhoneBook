import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personFound = persons.find((person) => person.name === newName)
    if (personFound === undefined) {
      setPersons(persons.concat(
        { 
          name: newName,
          number: newNumber 
        }
      ))
    }
    else {
      alert(`${newName} is already added to phonebook`)
    }

    setNewName('')
    setNewNumber('')
  }

  const handleName = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumber = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter by name:
        <input 
          value={newFilter}
          onChange={handleFilter}
          />
      </div>
      <h2>Add New Contact</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
                value={newName}
                onChange={handleName}
          />
        </div>
        <div>
          number: <input 
                value={newNumber}
                onChange={handleNumber}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        <ul>
          {persons.filter((person) => person.name.includes(newFilter))
            .map((person) => 
            <div key={person.name}> {person.name} {person.number}</div>
          )}
        </ul>
      ...
    </div>
  )
}

export default App