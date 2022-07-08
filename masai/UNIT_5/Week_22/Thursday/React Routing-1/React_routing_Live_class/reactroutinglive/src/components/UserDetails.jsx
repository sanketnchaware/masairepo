import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'


export const UserDetails = () => {
    const { id } = useParams();
    const [user, setUser] = useState([]);
    console.log(user)
    useEffect(() => {
        fetch(`https://reqres.in/api/users/${id}`)
            .then(res => res.json())
            .then(d => setUser(d.data))
    }, [id])

    return (
        <div>
            <br /><br /><br/>
            <button>
                <Link to="/Users">⬅️ Go back </Link>
            </button>
            <h1>Details of :- {user.first_name} {user.last_name}</h1>
            <img src={user.avatar} alt="image" />
            <p>First Name:- {user.first_name}  </p>
            <p>Last Name:- {user.last_name}</p>
            <p> Email:- {user.email} </p>
        </div>
    )
}
