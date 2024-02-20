import React, {useState} from "react";

function Mycomponent() {
  
    const [name, setName] = useState();

    const updateName = () =>{
        setName('Bovi')
    }

    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>set Name</button>
        </div>
    )
}
export default Mycomponent;
