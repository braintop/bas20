import CounterContext from '../contexts/CounterContext'
import { useContext } from 'react'
export default function C() {
    const { counter }  = useContext(CounterContext)
    return (
        <div>
            <h1>C</h1>
            <p>Counter: {counter}</p>
        </div>
    )
}