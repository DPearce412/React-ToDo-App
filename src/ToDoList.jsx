import React, { useState } from 'react'


function ToDoList() {

    const [tasks, setTasks] = useState([    
    ]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => 
            // _ = ignore 'element'
            i !== index);
        setTasks(updatedTasks);

    }

    function moveTaskUp(index) {
        if (index < tasks.length - 1) {
            // if task is at top, don't want to move up further
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];
            // swaps two elements within an array
            setTasks(); 
        }
    }

    function moveTaskDown(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];
            // swaps two elements within an array
            setTasks(); 
        }

    }

    return (
        <div className="to-do-list">

            <h1>To-Do List</h1>

            <div>
                <input
                    type="text"
                    placeHolder="Enter a task. . ."
                    value={newTask}
                    onChange={handleInputChange} />
                <button
                    className="add-button"
                    onClick={addTask}>

                    Add
                </button>
            </div>

            <ol>
                {tasks.map((task, index) =>
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button
                            className="delete-button"
                            onClick={() => deleteTask(index)}>
                            Delete
                        </button>
                        <button
                            className="move-button"
                            onClick={() => moveTaskUp(index)}>
                            Up
                        </button>
                        <button
                            className="move-button"
                            onClick={() => moveTaskDown(index)}>
                            Down
                        </button>
                    </li>
                )}
            </ol>

        </div>
    );

}

export default ToDoList