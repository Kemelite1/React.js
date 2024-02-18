
function Traveler(props) {
  return (
    <div className="traveler">
       <p>Name: {props.name}</p> 
       <p>Age: {props.age}</p>
       <p>Travelling: {props.isTravelling ? "Yes" : "No"}</p>
    </div>
  )
}

export default Traveler;
