// import React from 'react';

// const Todo = ({ item , setTask}) => {

//     const handleDelete = _id => {
//         const proceed = window.confirm('Delete tha product !!')
//         if (proceed) {
//             const url = `http://localhost:5000/Todo/${_id}`
//             fetch(url, {
//                 method: "DELETE"
//             })
//                 .then(res => res.json())
//                 .then(data => {
//                     console.log(data);
//                     const remaining = item.filter(task => task._id !== _id)
//                     setTask(remaining)
//                 })

//         }
//     }
//     return (
//             <div class="card w-96 bg-neutral text-neutral-content">
                
//             </div>
//     );
// };

// export default Todo;