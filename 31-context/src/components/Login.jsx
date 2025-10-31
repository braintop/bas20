import UserContext from '../contexts/UserContext'
import { useContext } from 'react'
export default function Login() {
    const { user, setUser } = useContext(UserContext)
    function handleLogin(e) {
        setUser(e.target.value)
    }
    return (
        <div>
            <h1>Login</h1>
            <input type="text" placeholder="Name"  onChange={handleLogin} />
        </div>
    )
}