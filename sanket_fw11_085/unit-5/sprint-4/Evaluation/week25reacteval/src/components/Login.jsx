import React, { useState } from 'react'
import { Home } from './Home'
import axios from "axios"
export const Login = () => {
    const [name, setName] = useState("");
    console.log('name:', name)
    const [password, setPassword] = useState("");
    console.log('password:', password)
    const [token, setToken] = useState("");

    async function handleClick() {
        console.log("Logged in")

        axios.post("https://fakestoreapi.com/auth/login", {
            username: name,
            password: password

        }).then(res => {
            setToken(res.data.token);
        })
            .catch(err => {
                console.log("error:")
            })





    }

    return (
        <>
            {
                token ? <Home /> : <div>
                    <h1>Login</h1>
                    <input type="text" placeholder="Enter Username"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />
                    <button onClick={handleClick} >Login</button>
                </div>
            }
        </>
    )
}
