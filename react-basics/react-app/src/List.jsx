
function List() {
  const states = [{name: 'Lagos', capital: 'Ikeja'},
   {id: 1, name: 'Imo', capital: 'Owerri'},
    {id: 2, name: 'Bayelsa', capital: 'Yenagoa'},
     {id: 3, name: 'Rivers', capital: 'Port Harcourt'},
      {id: 4, name: 'Cross River', capital: 'Calabar'}];

      // sorting alphabetically
      states.sort((a, b) => a.name.localeCompare(b.name));
      
  const items = states.map(state => <li key={state.id}> {state.name}: &nbsp; <b>{state.capital}</b></li>)
  return (
    <ul>
    {items}
    </ul>
  )
}
export default List;
