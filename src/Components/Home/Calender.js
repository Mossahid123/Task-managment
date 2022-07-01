import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
// import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';

const Calender = ({date , setDate}) => {
   
    return (
        <div className=''>
            <div className='w-50 flex justify-center mx-auto'>
                <DayPicker
                    mode="single"
                    required
                    selected={date}
                    onSelect={setDate}
                />;
            </div>


        </div>
    );
};

export default Calender;