import CounterContext from '../contexts/CounterContext'
import { useContext } from 'react'
export default function D( ) {
    const { counter, setCounter }  = useContext(CounterContext)
    return (
        <div>
            <h1>D</h1>
            <p>Counter: {counter}</p>
            <button onClick={() => setCounter(counter + 1)}>Click me</button>
        </div>
    )
}