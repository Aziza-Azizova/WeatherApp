import React, { useContext } from 'react'
import Day from './Day'
import { Context } from '../context/Context'

function Week() {
    const {weather} =useContext(Context);
    let daily = weather?.daily.filter((day, index) => index !== 0);
    return (
        <div className='week container'>
            {
                daily?.map((day, i) => <Day key={i} day={day}/>)
            }
        </div>
    )
}

export default Week