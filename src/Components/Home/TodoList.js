import React, { useEffect, useState } from 'react';

const TodoList = () => {
    const [task, setTask] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/Todo')
            .then(res => res.json())
            .then(data => setTask(data))
    }, []);
    const handleDelete = _id => {
        const proceed = window.confirm('Delete tha product !!')
        if (proceed) {
            const url = `http://localhost:5000/Todo/${_id}`
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = task.filter(todo => todo._id !== _id)
                    setTask(remaining)
                })

        }
    }
    // const handleUpdate = _id =>{
    //     fetch(`http://localhost:5000/Todo/${_id}`, {
    //         method: "PUT"
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //         })
    // }
    return (
        <div class="todo-container">
            <div class="todo-list grid lg:grid-cols-3 lg:w-10/12 lg:gap-3 gap-3 justify-center mx-auto">
                {task.map(item => <div
                    key={item._id}
                    className='card w-92 bg-neutral text-neutral-content'
                >
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">{item.date}</h2>
                        <p>{item.text}</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary"><i className=' fa fa-check'></i></button>
                            <button onClick={() => handleDelete(item._id)} class="btn btn-ghost"><i className=' fa fa-trash'></i></button>
                            <label for="my-modal"  class="btn modal-button"><i className=' fa fa-edit'></i></label>
                            <input type="checkbox" id="my-modal" class="modal-toggle" />
                            <div class="modal">
                                <div class="modal-box">
                                    <input className='input input-bordered input-primary w-full max-w-xs my-5' type="text" />
                                  <input className='input input-bordered input-primary w-full max-w-xs my-5' value={item.date} type="text" />
                                    <div class="modal-action">
                                        <label for="my-modal" class="btn">Update</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default TodoList;