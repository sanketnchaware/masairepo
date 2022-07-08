import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';



const Div = styled.div`
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content: space-evenly;
    font-size: 1.5em;
`

export const UsersList = () => {

    const [users, setUsers] = useState([]);


    useEffect(() => {
        fetch('https://reqres.in/api/users')
            .then(res => res.json())
            .then(d => setUsers(d.data))
    }, [])

    return (
        <Div>
            <br /><br /><br /><br />
            {


                users.map((item) => {
                    return (
                        <div key={item.id}>
                            <Link to={`user/${item._id}`}>User {item.first_name}</Link>

                        </div>
                    )

                })
            }

        </Div>
    )
}

