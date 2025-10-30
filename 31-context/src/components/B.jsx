import CounterContext from '../contexts/CounterContext'
import { useContext } from 'react'
export default function B() {
    const { counter }  = useContext(CounterContext)
    return (
        <div>
            <h1>B</h1>
            <p>Counter: {counter}</p>
        </div>
    )
}