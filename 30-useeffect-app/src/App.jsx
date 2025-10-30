import { useEffect } from 'react'
import { useState } from 'react'
import Clock from './Components/Clock'
import Posts from './Components/Posts'
function App() {

  const [count, setCount] = useState(0)
  console.log("zamari shalom")

  useEffect(() => {
    console.log('useEffect')
  },[])

  return (
    <>
      <h1>Hello World</h1>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>Count: {count}</p>
      <Clock />
      <Posts />
    </>
  )
}

export default App
