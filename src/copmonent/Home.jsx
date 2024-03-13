import React, { useEffect, useState } from 'react'
import './Item.css'
import { Link } from 'react-router-dom';
import Header from './Header';
import { Card } from 'react-bootstrap';
import Kard from '../Card';
import Cart from './Cart';


const Home = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://fakestoreapi.com/products`);
            const newData = await response.json();
            setData(newData);
        };
        fetchData();
    }, []);
    return (
        <>
            <Header />
            <div className='items'>
                {data.map((item) => <Kard key={item.id} img={item.image} price={item.price} title={item.title} />)}
            </div>
            {/* <Cart /> */}

        </>
    )
}

export default Home