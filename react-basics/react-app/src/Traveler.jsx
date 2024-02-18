import PropTypes from 'prop-types';

function Traveler(props) {
  return (
    <div className="traveler">
       <p>Name: {props.name}</p> 
       <p>Age: {props.age}</p>
       <p>Travelling: {props.isTravelling ? "Yes" : "No"}</p>
    </div>
  )
}
Traveler.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isTravelling: PropTypes.bool,
}

export default Traveler;
