import Input from './Input'

const Filter = ({ newFilter, handleFilter}) => {
  return (<div>
    filter by name:
    <Input newValue={newFilter} handleInput={handleFilter} />
  </div>)
}

export default Filter