import React, { useContext, useState } from 'react'
import { AuthContext } from '../Contexts/AuthContext'
import { useHistory } from 'react-router-dom'


export const Login = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const { handleToken } = useContext(AuthContext);

    const history = useHistory();



    return (
        <div>
            <form >
                <input type="text" placeholder="Name" onChange={e => setName(e.target.value)} />
                <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                <button onClick={(e) => {
                    e.preventDefault();
                    console.log(name, password);

                    fetch("https://reqres.in/api/login", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ name:name, password:password })
                    })
                        .then(res => res.json())
                        .then(token => {
                            handleToken(token)
                        })
                    history.push("/")

                }} >Submit
                </button>
            </form >
        </div >
    )
}
