import { useState } from 'react'
import A from './components/A'
import B from './components/B'
import C from './components/C'
import D from './components/D'
import E from './components/E'
import F from './components/F'
import G from './components/G'
import CounterContext from './contexts/CounterContext'
function App() {
  const [counter, setCounter] = useState(0)
  return (
    <>
      <CounterContext.Provider value={{counter}}>
        <A />
        <B />
        <C />
        <D />
        <E />
        <F />
        <G />
      </CounterContext.Provider>
      <button onClick={() => setCounter(counter + 1)}>Click me</button>

    </>
  );
}

export default App;
