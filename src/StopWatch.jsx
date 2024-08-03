import React, { useEffect } from 'react'
import { useState } from "react";


function StopWatch() {
  const [isRunning,setIsRunning] = useState(false);
  const [time,setTime] = useState(0);
  useEffect(()=>{
    let timer;
    if(isRunning){
        timer = setInterval(()=>{
            setTime((prev)=>prev + 1)
        },1000)
    }else{
        clearInterval(timer)
    }
    return () => {
        clearInterval(timer);
      };
  },[isRunning])
  function startStop (){
    setIsRunning((prev) => !prev);
  }
  function reset (){
    setIsRunning(false);
    setTime(0);
  }
  function formatTime(seconds){
    const minutes = Math.floor(seconds / 60);
    const secondsRemaining = seconds % 60;
    return `${minutes}:${secondsRemaining < 10 ?"0" : "" }${secondsRemaining}`;
  }
  return (
    <div>
      <h1>Stopwatch</h1>
      <p>Time: {formatTime(time)}</p>
      <div>
        <button onClick={startStop}>{isRunning ? "Stop":"Start"}</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

export default StopWatch
