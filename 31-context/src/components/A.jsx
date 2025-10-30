import CounterContext from '../contexts/CounterContext'
import { useContext } from 'react'
export default function A() {
    const { counter }  = useContext(CounterContext)
    return (
        <div>
            <h1>A</h1>
            <p>Counter: {counter}</p>
        </div>
    )
}