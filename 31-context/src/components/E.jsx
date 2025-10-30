import CounterContext from '../contexts/CounterContext'
import { useContext } from 'react'
export default function E() {
    const { counter }  = useContext(CounterContext)
    return (
        <div>
            <h1>E</h1>
            <p>Counter: {counter}</p>
        </div>
    )
}