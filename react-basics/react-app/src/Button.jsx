function Button(){
    const styles = {
        backgroundColor: "green",
        color: "gray",
        padding: "10px 20px",
        border: "none",
        borderRadius: "10px",
        maxWidth: "200px",
        textAlign: "center"
    
    }
    // const handleClick = () => console.log('Hello');

    const handleClick = (name) => console.log(`${name} welcome`);

    return (
        <h1 onClick={() => handleClick('Bovi')} style={styles}>Subscribe</h1>
    );
}
export default Button;