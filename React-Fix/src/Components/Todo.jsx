import React, { useState } from 'react'

function Todo() {

    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

// Add or Update 
    const addTodo = () => {
        if (task.trim() === "") {
            alert("Please Enter a Task");
            return;
        }

        if (editIndex !== null) {
          const updatedTodos = [...todos];
          updatedTodos[editIndex] = task;
        

        setTodos(updatedTodos);
        setEditIndex(null)
        } else {
        setTodos([...todos, task]);
        }
        setTask("")
    };


    const editTodo = (index) => {
      setTask(todos[index]);
      setEditIndex(index);
    }

    const deleteTodo = (index) => {
        setTodos(todos.filter((item, i) => i !== index))
      
        if(editIndex === index) {
          setTask("");
          setEditIndex(null)
        }
      };  

  return (
    <div>
      <h2>TODO</h2>

      <input type="text"
             value={task}
             onChange={(e) => setTask(e.target.value)}/>

      <button onClick={addTodo}>
        Add
      </button>

      <ul>{todos.map((item,index) => (
        <li key={index}>
            {item}
            <button onClick={() => editTodo(index)}>
              Edit
            </button>
            <button onClick={() => deleteTodo(index)}>
                Delete
            </button>
        </li>
      ))}</ul>
    </div>
  )
}

export default Todo
