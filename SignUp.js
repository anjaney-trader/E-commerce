import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        const auth = localStorage.getItem("user")
        if (auth) {
            navigate("/");
        
        }
    })
    const collectData = async () => {
        console.warn(name, email, password);
        
        let result = await fetch("http://localhost:5000/register", {
            method: 'post',
            body: JSON.stringify({ name, password, email }),
            header: {
                'Content-Type': 'application/json '
            }
        }



        );
        result = await result.json()
        console.warn(result);
        localStorage.setItem("user", JSON.stringify(result));
        if (result) {
            navigate('/');
        }
    }

    return (
        <div className="register">
            <h1>Register</h1>
            <input className="inputBox" type="text" value={name}
                onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
            <input className="inputBox" type="text" value={email}
                onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
            <input className="inputBox" type="password" value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password" />
            <button onClick={collectData} className="sop" type="button">signup</button>
        </div>
    )
}
export default SignUp;
