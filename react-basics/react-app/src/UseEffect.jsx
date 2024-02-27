import { useState, useEffect} from 'react';

function UseEffect() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`
    });
    
    function addCount(){
        setCount(c => c + 1);
    }
  return (
    <div>
        <p>Count: {count}</p>
        <button onClick={addCount}>Add</button>
    </div>
  )
}

export default UseEffect