import React, { useState } from 'react';
import Form from './Form';
import TodoList from './TodoList';
import Calender from './Calender';

const Home = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div >

            <div className='hero min-h-screen bg-base-200'>
            <div className='hero-content flex-col lg:flex-row-reverse'>
                <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
                    <Form date={date}></Form>
                </div>
                <div className='text-center lg:text-left'>
                    <Calender date={date} setDate={setDate}></Calender>
                </div>
            </div>
            </div>
            <TodoList ></TodoList>
        </div>
    );
};

export default Home;