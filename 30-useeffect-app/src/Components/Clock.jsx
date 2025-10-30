import { useState, useEffect } from 'react';
export default  function Clock() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
        console.log("timer")
      setCounter(counter=>counter+1);
    }, 1000);
    
    
    return () => clearInterval(timer);
  },[]);


  return (
    <div>
      <h2>השעה כעת:</h2>
      <h1>{counter}</h1>
    </div>
  );
}
