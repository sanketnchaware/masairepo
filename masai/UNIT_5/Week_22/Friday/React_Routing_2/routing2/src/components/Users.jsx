import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export const Users = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://reqres.in/api/users')
            .then(res => res.json())
            .then(d => setUsers(d.data))
    }, [])


    return (
        <div>
            <h1>Users</h1>
            {
                users.map(item => {
                    return <div key={item.id}>
                        <Link to={`user/${item.id}`}>{item.id}. {item.first_name}</Link>

                    </div>
                })
            }
        </div>
    )
}


//

