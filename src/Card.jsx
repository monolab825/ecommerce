import React from 'react'
import './Card.css'

const Kard = ({ img, price, title }) => {
    return (
        <div className="card kard" style={{}}>
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{price}</p>
                <a href="#" className="btn btn-primary">Add to cart</a> <br />
                <a href="#" className="btn btn-primary">remove from cart</a>
            </div>
        </div>

    )
}

export default Kard