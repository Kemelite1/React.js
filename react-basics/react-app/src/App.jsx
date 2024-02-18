import Traveler from './Traveler';

function App() {
  return (
    <div>
      <Traveler name="Becky Kelvin" age={25} isTravelling={true} />
      <Traveler name="Bovi Oke" age={30} isTravelling={false} />
      <Traveler />
      <Traveler name="Dozie Boniiface" />
    </div>
    
  );
}
export default App;
