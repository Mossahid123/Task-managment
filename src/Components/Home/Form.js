import React from 'react';
import { format } from 'date-fns';
import { useForm } from 'react-hook-form';

const Form = ({date }) => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>{
        console.log(data);
        const url ="http://localhost:5000/Todo";
        fetch(url,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
            console.log(result);
            reset()
        })
    }
    return (
        <div className='card w-96 bg-base-100 shadow-xl my-4 flex justify-center mx-50 pt-10'>
            <h1 className='text-center text-primary font-bold'>Available Services on {format(date, "PP")}</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className='input input-bordered input-primary w-full max-w-xs ' placeholder='Write your Task' {...register("text", { required: true})} />
                <input className='input input-bordered input-primary w-full max-w-xs my-5' placeholder='Price' value={format(date, "PP")} type="text" {...register("date")} />
                <input type="submit" value='Save' className='btn btn-outline btn-primary text-center' />
            </form>
        </div>
    );
};

export default Form;