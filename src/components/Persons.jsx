const Person = ({ person,remove }) => {
  return <div>
        <div> {person.name} {person.number}</div>
        <button onClick={() => remove(person.id)}>Delete</button>
    </div>
}

const Persons = ( {persons, newFilter, remove} ) => {
  return (
    <ul>
      {persons
        .filter((person) => person.name.includes(newFilter))
        .map((person) => 
            <Person key={person.id} person={person} remove={remove}></Person>

      )}
    </ul>
  )
}



export default Persons