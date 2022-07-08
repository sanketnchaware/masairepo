import React from 'react'
import { movies } from "../movies"
import styled from "styled-components"

import { Link } from "react-router-dom"

const Div = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
grid-gap: 1rem;
margin-top: 1rem;
border: 1px solid black;
`
const Movies = styled.div`
border: 1px solid red;
margin: 1rem;
padding: 1rem;
`


export const Dashboard = () => {


    return (
        <Div>
            <Movies>
                <h1>Upcoming Movies</h1>
                {
                    movies.map(movie => {
                        return <div>
                            <h4>  Movie:- {movie.name}</h4>
                            <Link to={`movie/${movie.id}`} >Details</Link>
                        </div>
                    })
                }
            </Movies>
            <Movies>
                <h1>Drama </h1>
                {
                    movies.map(movie => {
                        return <div>
                            <h4>  Movie:- {movie.name}</h4>
                            <Link to={`movie/${movie.id}`} >Details</Link>
                        </div>


                    })
                }
            </Movies>
            <Movies>
                <h1>Web Series</h1>
                {
                    movies.map(movie => {
                        return <div>
                            <h4>  Movie:- {movie.name}</h4>
                            <Link to={`movie/${movie.id}`} >Details</Link>
                        </div>
                    })
                }
            </Movies>
        </Div>
    )
}
