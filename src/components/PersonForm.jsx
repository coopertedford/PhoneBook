import Input from './Input'

const PersonForm = ({ handleSubmit, valueOne, handleValueOne, valueTwo, handleValueTwo }) => {
  return (<form onSubmit={handleSubmit}>
    <div>
      name: <Input newValue={valueOne} handleInput={handleValueOne} />
     </div>
     <div>
      number: <Input newValue={valueTwo} handleInput={handleValueTwo} />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>)
}

export default PersonForm
