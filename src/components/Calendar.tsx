"use client"
import React, { useState } from 'react'; 
import Calendar from 'react-calendar'; 
import 'react-calendar/dist/Calendar.css'; 
  
export default function CalendarGfg(): JSX.Element { 
    const [value, onChange] = useState<Date>(new Date()); 
  
    return ( 
        <div> 
            <Calendar 
                onClickDay={onChange} 
                value={value} 
            /> 
        </div> 
    ); 
}
