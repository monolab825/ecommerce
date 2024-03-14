import React from 'react'
import './Card.css'
import { add } from './redux/features/cartSlice'
import { useDispatch, useSelector } from 'react-redux'

const Kard = ({ data }) => {
    const dispatch = useDispatch();
    const addToCart = (item) => {
        dispatch(add(item));
    }
        const CartItems = useSelector((state) => state.cart);
   
        const generateqty = (productid) => {
            const item = CartItems.find((i) =>
                i.id == productid);
            return item ? item.quantity : 0;
        }
   
    return (
        <div className="card kard" style={{}}>
            <img src={data.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.price}</p>
                <div className='item'>Selected:{generateqty(data.id)}</div>
                <a href="#" className="btn btn-primary" onClick={() => addToCart(data)}>Add to cart</a> <br />
                <a href="#" className="btn btn-primary " id='btn2'>remove from cart</a>
            </div>
        </div>

    )
}

export default Kard