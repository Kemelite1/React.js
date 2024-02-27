import  { useState } from 'react'
import './index.css'
function TodoList() {
    const [tasks, setTasks] = useState(['Take a shower', 'Eat breakfast', 'Write code']);
    const [newtask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);

    }
    function addTask(){
        if(newtask.trim() !== ""){
            setTasks(t => [...t, newtask]);
            setNewTask("")
        }
    }
    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);

    }
    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks)
        }

    }
    function moveTaskDown(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks)
    }
}

  return (
    <div className='todo'>
        <h1>To do List</h1>
        <div>
            <input type="text"
            placeholder='Enter a task.....'
            value={newtask}
            onChange={handleInputChange} />
            <button className='add-btn' onClick={addTask}>Add</button>
        </div>
        <ol>
            {tasks.map((task, index) => 
            <li key={index}>
                <span className='text'>{task}</span>
                <button className='delete-btn' onClick={() => deleteTask(index)}>Delete</button>
                <button className='move-btn' onClick={() => moveTaskUp(index)}>Up</button>
                <button className='move-btn' onClick={() => moveTaskDown(index)}>Down</button>
            </li>
            )}
        </ol>
    </div>
  )
}

export default TodoList