import "./MenuCard.css"

function MenuCard({ img_url, heading, details, energy, temp, date, price, discount }) {
    return (
        <div id="card">
            <div>
                <img src={img_url} />
            </div>
            
            <div><p>{heading}</p></div>
            <div><p>{details}</p></div>

            <div className="flex">
                <p>{energy}Cal</p>
                <p>P/F/C{date}</p>
                <p>{temp}C</p>
            </div>

            <div className="flex">
                <p>${price}</p>
                <p>${discount}</p>
                <button>ORDER</button>
            </div>
            
        </div>
    )
}
export { MenuCard };