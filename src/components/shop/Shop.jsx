import React, { useEffect, useState } from 'react';
import Card from './Poducts and Card/Card';
import Products from './Poducts and Card/Products';
import './Shop.css';


const Shop = () => {

    let [products, setProducts] = useState([]);
    let [card, setCard] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const addToCardHander = (product) =>{
        setCard([...card, product])
    }
        // console.log(card);

    return (
        <div className='shop'>
            <Products products={products} addToCardHander={addToCardHander}></Products>
            <Card card={card}></Card>
        </div>
    );
};

export default Shop;