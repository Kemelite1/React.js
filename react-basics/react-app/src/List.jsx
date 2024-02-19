
function List() {
  const states = ['Lagos', 'Imo', 'Bayelsa', 'Port Harcourt', 'Calabar']

  const items = states.map(state => <li>{state}</li>)
  return (
    <ul>
    {items}
    </ul>
  )
}
export default List;
