import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export const FetchApi = () => {

    const [users, setUsers] = useState([])

    const getUsers = async () => {
        const res = await fetch("https://api.github.com/users");
        const data = await res.json();
        setUsers(data);
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div>
            {
                users.map(item => {
                    return (
                        <div key={item.id}>
                            <img src={item.avatar_url} alt="" />
                        </div>
                    )
                })
            }
        </div>
    )
}
