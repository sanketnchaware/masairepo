import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"


const Div = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 40%;
    margin: 0 auto;
    border: 1px solid black;
    
    & *{
        margin: 0.5rem;
        padding: 0.5rem;
        border: 1px solid red;
        width: 100%;
    }
    
    
`

const Headers = styled.div`
display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 40%;
    margin: 0 auto;
    border: 1px solid black;
    & *{
        margin: 0.5rem;
        padding: 0.5rem;
        border: 1px solid red;
        width: 100%;
        font-weight: bold;
    }
    
`



export const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/Products")
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])




    return (
        <div>
            <h1>Products</h1>


            <Headers>
                <div>Id</div>
                <div>Product</div>
                <div>Price</div>
                <div>More Details</div>

            </Headers>



            {
                products.map((item) => {
                    return (
                        <Div key={item.id}>
                            <div>{item.id}.</div>
                            <div>{item.name}</div>
                            <div> {item.price}</div>

                            <Link to={`/product/${item.id}`} >More Details</Link>

                        </Div>

                    )
                })
            }
        </div>
    )
}
