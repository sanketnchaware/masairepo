
import { Link } from "react-router-dom"
import React from 'react';
import styled from "styled-components"
const Div = styled.div`
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content: space-evenly;
    font-size: 1.5em;
`

export const Navbar = () => {


    return (
        <Div>


            <Link to="/">Home</Link>



            <Link to="/About">About</Link>



            <Link to="/Contact">Contact</Link>


            <Link to="/Users">Users</Link>


        </Div>
    )
}
