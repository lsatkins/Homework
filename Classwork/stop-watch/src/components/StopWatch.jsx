import React, {useState, useRef, useEffect} from "react";
import  './styles.css';

const StopWatch = () => {

  const [running, setRunning] = useState(false)
  const [lapse, setLapse] = useState(0)
  let intervalRef = useRef(null) //current

  useEffect(() => {
    
  
    return () => {
      // unmounting of our component
      // componentDidUnmount

      clearInterval(intervalRef) //making sure that the set interval has stopped
    }
  }, [])
  

  const handleRunClick = () => {

    // running
    // stop our clock

    //not running
    //start our clock

    if(running){

      clearInterval(intervalRef.current)

    }
    else{
      //start our clock

      let startTime = Date.now() - lapse; // 43 - 23

      intervalRef.current = setInterval(()=>{

        setLapse(Date.now() - startTime)

      }, 0)
    }

    setRunning(!running)
    
  }

  const handleClearClick = () => {
    
    // stop clock
    clearInterval(intervalRef.current)

    // reset the state back to the original values
    setLapse(0)
    setRunning(false)
  }
  
  
  return (
    <div>
      <label> {lapse}ms </label> 

      <button onClick={handleRunClick}>{running ? 'Stop' : 'Start'}</button>

      <button onClick={handleClearClick}>Clear</button>
  </div>
  )
}

export default StopWatch
