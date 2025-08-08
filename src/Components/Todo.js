import React, { use, useState } from 'react'

function Todo() {

    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    let addTask = () => {

        if (task === "") {
            alert("Please enter a task");
            return;
        }


        setTasks([...tasks, task]);
        setTask("");

    }

    let deleteTask = (indexToDelete) => {
        const newTasks = tasks.filter((task, index) => index !== indexToDelete);
        setTasks(newTasks);
    };


    return (

        <>

            <div className='container my-3'>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label"><strong>ENTER YOUR TASKS</strong></label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="1" value={task} onChange={(e) => setTask(e.target.value)}></textarea>
                </div>

                <button onClick={addTask} type="button" className="btn btn-primary my-1">Add Task</button>
            </div>

            <div className='container'>
                <div className="container mt-4">
                    <div className="row ">
                        <div className="col-md-6">
                            <ul className="list-group">
                                {tasks.map((task, index) => (
                                    <li key={index} className="list-group-item bg-success bg-opacity-10 d-flex justify-content-between align-items-center my-2 ">
                                        <span>{task}</span>
                                        <button
                                            onClick={() => deleteTask(index)}
                                            type="button"
                                            className="btn btn-sm btn-danger"
                                        >
                                            &times;
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>



        </>
    )
}

export default Todo
