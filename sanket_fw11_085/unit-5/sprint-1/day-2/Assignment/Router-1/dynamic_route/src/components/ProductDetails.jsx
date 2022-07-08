import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const ProductDetails = () => {
    const [user, setUser] = useState("")

    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3000/Products/${id}`)
            .then((res) => res.json())
            .then((d) => setUser(d))
    }, [])


    return (
        <div>
            <h1>ProductDetails</h1>
            <h5>Product :- {user.name}</h5>
            <h5>Price :-{user.price}</h5>
            <h5>Company :- {user.company}</h5>
            <img width="300px" src={user.image} alt="" />

        </div>
    )
}
