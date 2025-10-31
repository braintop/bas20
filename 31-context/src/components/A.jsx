import CounterContext from '../contexts/CounterContext'
import { useContext } from 'react'
import Login from './Login'
export default function A() {
    const { counter }  = useContext(CounterContext)
    return (
        <div>
            <h1>A</h1>
            <p>Counter: {counter}</p>
            <Login />
        </div>
    )
}