import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
// import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';

const Calender = ({date , setDate}) => {
    const today = new Date();
    const [selectedDay, setSelectedDay] = useState(today);

    const footer = selectedDay ? <p>You selected .</p>
        : <p>Please pick a day.</p>
    return (
        <div className=''>
            <h1 className='text-5xl'>Hello!</h1>
            <div className='w-50 flex justify-center'>
                <DayPicker
                    mode="single"
                    required
                    selected={selectedDay}
                    onSelect={setSelectedDay}
                    footer={footer}
                />;
            </div>


        </div>
    );
};

export default Calender;