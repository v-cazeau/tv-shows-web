import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login({setUser}) {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate(); 

    const handleLogin = (e) => {
        e.preventDefault()

            fetch('https://tv-shows-api-vc.web.app/login', {
                method: "POST",
                header: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            })
                .then(resp => resp.json)
                .then(data => {
                    if(data.message) {
                        alert(data.message)
                        return
                    }
                    setUser(data);
                    navigate("/")
                })
                .catch(alert)
    }

    return (
        <>
        <form onSubmit={handleLogin}>
            <h2>Login</h2>
            <label> email
                <input
                    type="email"
                    value={email}
                    onChange={(e) => {setEmail=(e.target.value)}}
                    />
            </label>
            <br />
            <label>password
                <input 
                    type="password"
                    value={password}
                    onCharge={(e) => {setPassword=(e.target.value)}} 
                    />
            </label>
            <br />
            <input type="submit" value="Log in" />
        </form>
        </>
    )
}