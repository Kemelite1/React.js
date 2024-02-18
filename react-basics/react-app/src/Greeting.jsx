import PropTypes from 'prop-types'
function Greeting(props) {
    const loggedIn = <h2>Welcome {props.username}</h2>

    const notLoggedIn = <h2>Please log in</h2>

  return ( props.isLoggedIn ? loggedIn : notLoggedIn )
}
Greeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

Greeting.defaultprops = {
    isLoggedIn: false,
    username: "User",
}
export default Greeting;
