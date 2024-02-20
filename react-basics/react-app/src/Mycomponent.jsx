import React, {useState} from "react";

function Mycomponent() {
  
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    const reset = () => {
        setCount(0)
    }


    return (
        <div className="counter">
            <p className="counter-display"> {count}</p>
            <button className="btn" onClick={increment}>Add</button>
            <button className="btn" onClick={reset}>Reset</button>
            <button className="btn" onClick={decrement}>Subtract</button>
        </div>
    )
}
export default Mycomponent;
