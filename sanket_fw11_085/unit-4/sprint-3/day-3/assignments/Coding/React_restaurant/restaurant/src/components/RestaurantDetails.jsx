
import "./details.css"

import { useState } from "react";


const RestaurantDetails = ({ data }) => {

    const [list, setList] = useState(data);

    const handleAscending = () => {

        const low_to_high = [...data].sort((a, b) => {

            return a.price - b.price;

        })

        setList(low_to_high);
    }

    const handleDescending = () => {

        const high_to_low = [...data].sort((a, b) => {

            return b.price - a.price;

        })
        setList(high_to_low);
    }

    const handleBothMode = () => {
        const Both = [...data].filter((item) => item.both)
        console.log(Both);
        setList(Both);
    }
    const handleCashMode = () => {

        const cash = [...data].filter((item) => item.cash)
        console.log(cash);
        setList(cash);
    }
    const handleOnlineMode = () => {

        const online = [...data].filter((item) => item.online)
        console.log(online);
        setList(online);
    }


    const fourStar = () => {
        const four = [...data].filter((item) => item.rating >= 4)
        setList(four);
    }

    const threeStar = () => {
        const three = [...data].filter((item) => item.rating >= 3)
        setList(three);
    }

    const twoStar = () => {
        const two = [...data].filter((item) => item.rating >= 2)
        setList(two);
    }

    const oneStar = () => {
        const one = [...data].filter((item) => item.rating >= 1)
        setList(one);
    }




    return (
        <>

            <div className="heading">

                <h1>TASTINGO<sub>...A Food Delivery App </sub>     </h1>

            </div>

            <div className="links">

                <button onClick={handleAscending}> Price : Low to High</button>

                <button onClick={handleDescending}>Price : High to Low</button>

                <button onClick={handleCashMode}>Payment Mode : Cash</button>

                <button onClick={handleOnlineMode}>Payment Mode : Online</button>

                <button onClick={handleBothMode}>Payment Mode : Cash/Online</button>

            </div>

            <div className="links">


                <button onClick={fourStar} >4⭐</button>

                <button onClick={threeStar} >3⭐</button>

                <button onClick={twoStar} >2⭐</button>

                <button onClick={oneStar} >1⭐</button>


            </div>

            <div className="rest_container_div">
                {
                    list.map((item) => (

                        <div className="item_div">

                            <div className="item_first_div">

                                <div className="item_img" >

                                    <img src={item.image} alt="" />

                                </div>

                                <div className="item_details">

                                    <p>{item.name}</p>

                                    <p> Cost ₹{item.price} for two</p>

                                    <p>Accepts {item.payment} Payment Mode</p>

                                </div>

                                <div className="item_review">

                                    <p>{item.rating}</p>

                                    <p>{item.votes} votes</p>

                                    <p>{item.reviews} reviews</p>

                                </div>

                            </div>

                        </div>

                    ))

                }

            </div>

        </>

    )

}

export { RestaurantDetails };