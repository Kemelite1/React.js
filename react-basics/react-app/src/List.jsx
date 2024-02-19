
function List() {
  const states = [{name: 'Lagos', capital: 'Ikeja'},
   {name: 'Imo', capital: 'Owerri'},
    {name: 'Bayelsa', capital: 'Yenagoa'},
     {name: 'Rivers', capital: 'Port Harcourt'},
      {name: 'Cross River', capital: 'Calabar'}];

  const items = states.map(state => <li key={state.name}> {state.name}</li>)
  return (
    <ul>
    {items}
    </ul>
  )
}
export default List;
