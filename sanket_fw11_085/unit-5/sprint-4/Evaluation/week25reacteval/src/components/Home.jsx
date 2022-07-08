import React from 'react'
import { useEffect, useState } from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom'
import axios from 'axios'
import "./Home.css"





export const Home = () => {
    const [prod, setProd] = useState([])

    useEffect(() => {
        getElectronics()
    }, [])

    async function getElectronics() {
        const res = await axios.get('https://fakestoreapi.com/products/')
        console.log('res:', res.data)
        setProd(res.data)
    }



    return (
        <>
            <div className="navbar">
                <Link to="/">
                    Home
                </Link>
                <Link to="/Jewelary">Jewelary</Link>
                <Link to="/Electronics">Electronics</Link>
                <Link to="/Men">Men</Link>
                <Link to="/Women">Women</Link>
                <Link to="/Cart">Cart</Link>
                <Link to="/Login">Login</Link>


            </div>


            <div className="home">
                {
                    prod.map((item) => {
                        return (
                            <div key={item.id}>
                                <div className="hi8">
                                    <img src={item.image} alt="" />
                                </div>
                                <div>
                                    <p>{item.title}</p>

                                    <p> Rs.{item.price}</p>
                                    <button>Add to cart</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>)
}
