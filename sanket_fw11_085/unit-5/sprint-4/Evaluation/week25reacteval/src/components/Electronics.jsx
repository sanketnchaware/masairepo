import React from 'react'
import "./Electronics.css"
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Home } from "./Home"

export const Electronics = () => {

    const [list, setList] = useState([])
    console.log('list:', list)

    useEffect(() => {
        getElectronics()
    }, [])

    async function getElectronics() {
        const res = await axios.get('https://fakestoreapi.com/products/category/electronics')
        console.log('res:', res)
        setList(res.data)
    }


    return (
        <>

          {/* <Home/> */}

            <div className="electro" >

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
