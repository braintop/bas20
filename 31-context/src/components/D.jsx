import CounterContext from '../contexts/CounterContext'
import { useContext } from 'react'
export default function D( ) {
    const { counter }  = useContext(CounterContext)
    return (
        <div>
            <h1>D</h1>
            <p>Counter: {counter}</p>
        </div>
    )
}