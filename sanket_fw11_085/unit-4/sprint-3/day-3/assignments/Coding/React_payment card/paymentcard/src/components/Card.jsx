import "./card.css"

const Card = ({ date, heading1, heading2, screen, logo, color }) => {
    return (
        <>
            <div className="card" style={{ backgroundColor: `${color}` }}>


                <div className="left_part">

                    <p>{date}</p>

                    <button>Case Study</button>

                    <h1>{heading1}</h1>

                    <h1>{heading2}</h1>

                    <p>{screen}</p>


                </div>

                <div className="right_part">

                    <img src={logo} alt="" />
                    <img src="https://cdn-icons-png.flaticon.com/512/57/57116.png" alt="" />

                </div>

            </div>




        </>

    )




}
export { Card }