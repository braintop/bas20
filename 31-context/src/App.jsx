import { useState } from 'react'
import A from './components/A'
import B from './components/B'
import C from './components/C'
import D from './components/D'
import E from './components/E'
import F from './components/F'
import G from './components/G'
import CounterContext from './contexts/CounterContext'
import UserContext from './contexts/UserContext'
function App() {
  const [counter, setCounter] = useState(0)
  const [user, setUser] = useState("")
  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <CounterContext.Provider value={{ counter, setCounter }}>
          <A />
          <B />
          <C />
          <D />
          <E />
          <F />
          <G />
        </CounterContext.Provider>
        <button onClick={() => setCounter(counter + 1)}>Click me</button>
      </UserContext.Provider>

    </>
  );
}

export default App;
