import React, { useState, useEffect } from 'react'
import { movies } from "../movies"
import { useParams } from 'react-router'





export const MovieDetails = () => {

    const { id } = useParams()
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const movie = movies.find(movie => movie.id === parseInt(id))
        setMovie(movie)
    }, [])


    console.log(movie)

    return (
        <div>

            <h1>Movie Details</h1>
            <h4>{movie.name}</h4>
            <h4>{movie.year}</h4>
            <h4>{movie.rating}</h4>
            <h4>{movie.director}</h4>

        </div>
    )
}
