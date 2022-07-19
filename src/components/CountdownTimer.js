import { useState, useEffect} from 'react';
import './CountdownTimer.css'
import {getRemainingUntilMsTimeStamp} from "./CountdownUtils"

const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
    }


const CountdownTimer = ({countdownTimestampMs}) => {
    const [remainingTime, setRemainingTime]= useState(defaultRemainingTime);

    useEffect(()=>{
       const intervalId = setInterval(()=>{
        updateRemainingTime(countdownTimestampMs);

       },1000)

        return () => clearTimeout(intervalId);
        
    },[countdownTimestampMs])

    function updateRemainingTime(countdown){
        setRemainingTime(getRemainingUntilMsTimeStamp(countdown));
        console.log("Time rundown");

    }

    return(
        <div className='countdown-timer'>
        <span>{remainingTime.days}</span> 
        <span>days</span>
        <span>{remainingTime.hours}</span>
        <span>hours</span>
        <span>{remainingTime.minutes}</span>
        <span>minutes</span>
        <span>{remainingTime.seconds}</span>
        <span>seconds</span>
        </div>        
    );






}

export default CountdownTimer;