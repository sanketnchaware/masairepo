import React from 'react';
import styled from 'styled-components';

// export const Button = ({ children }) => {
//     return (
//         <button>{children}</button>
//     )
// }

const Button = styled.button`
background:${(props) => props.theme === "light" ? "red" : "yellow"};
color:white;
font-size:1.2rem;
border:2px solid yellow;
`


const Div = styled.div`
border:2px solid blue;
margin:auto;
width:50%;
background:${(props) => props.theme === "light" ? "red" : "teal"};
height:100vh;
padding:2rem;

& input{
        background-color:lightgrey;
        border:2px solid black;
        padding:0.5rem;
        border:2px solid black;
 }
`



export { Button, Div }