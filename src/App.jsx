import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Notification from './components/Notification'
import axios from 'axios'
import './index.css'

const baseUrl = 'http://localhost:3001/api/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [message, setMessage] = useState(null)

  useEffect(()=> {
    console.log('effect')
    axios
      .get(baseUrl)
      .then(response => {
        console.log('fulfilled')
        setPersons(response.data)
        console.log(response.data)
      })
      .catch(error => {
        console.error("Error fetching persons:", error)
      })
  },[])

  const removePerson = (id) => {
    console.log(`${id}`)
    axios.delete(`${baseUrl}/${id}`)
    .then(response => 
      console.log('Deletd:', response.data),
      setPersons(persons.filter((person) => person.id !== id))
    )
    .catch(error => (
      console.error("Error fetching persons:", error)
    ))
  }

  const addPerson = (event) => {
    event.preventDefault()
    const personFound = persons.find((person) => person.name === newName)
    if (personFound === undefined) {
      axios
        .post(baseUrl, { 
          name: newName,
          number: newNumber 
        })
        .then(response => 
          setPersons(persons.concat(response.data)),
          setMessage(newName, `was added successfully`)
        )
        .catch(error => {
        console.error("Error sending persons:", error)
      })
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
      <Notification message={message} /> 
      <Filter newFilter={newFilter} handleFilter={handleFilter} />
      <h2>Add New Contact</h2>
      <PersonForm handleSubmit={addPerson} 
        valueOne={newName} handleValueOne={handleName}
        valueTwo={newNumber} handleValueTwo={handleNumber} 
        />
      <h2>Numbers</h2>
      <Persons persons={persons} newFilter={newFilter} remove={removePerson}/>
      
    </div>
  )
}

export default App