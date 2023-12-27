import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();
    useEffect(() => {
        const auth = localStorage.getItem("user")
        if (auth) {
            navigate("/");
        }
    })
    const handleLogin = async () => {
        console.warn("email,password", email, password)
        let result = await fetch("http://localhost:5000/register", {
            method: 'post',
            body: JSON.stringify({ password, email }),
            header: {
                'Content-Type': 'application/json '
            }
        });
        result = await result.json();
        console.warn(result);
        if (result.name) {
            localStorage.setItem("user", JSON.stringify(result));
            navigate("/");
        }
        else {
            alert("user not found");
        }

    } 
    
    return (
        <div className="login">
            <input type='text' className="inputBox" placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)} value={email} />
            <input type='text' className="inputBox" placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)} value={Password} />

            <button onClick={handleLogin} className="appbutton" type="button"  >  LOGIN</button>
        </div>
    )
}

export default Login