import CounterContext from '../contexts/CounterContext'
import { useContext } from 'react'
import UserContext from '../contexts/UserContext'
export default function C() {
    const { counter }  = useContext(CounterContext)
    const { user }  = useContext(UserContext)
    return (
        <div>
            <h1>C</h1>
            <p>Counter: {counter}</p>
            <p>User: {user}</p>
        </div>
    )
}