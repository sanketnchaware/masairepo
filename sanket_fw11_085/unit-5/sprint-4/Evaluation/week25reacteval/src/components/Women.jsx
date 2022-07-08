import React from 'react'
import "./Electronics.css"
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Home } from "./Home"
export const Women = () => {

    const [list, setList] = useState([])


    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        const res = await axios.get("https://fakestoreapi.com/products/category/women's clothing")
        console.log('res:', res.data)
        setList(res.data)
    }

    return (
        <>
            {/* <Home /> */}
            <div className="electro">

                {
                    list.map((item) => {
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
        </>
    )
}
