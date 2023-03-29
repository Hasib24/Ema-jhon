import React from 'react';
import './Product.css'

const Product = ({product, addToCardHander}) => {
    // let {id, category, name, seller, price, stock, ratings, ratingsCount, img, shipping, quantity} = product;
    let { name, price, ratings, img} = product;
    // console.log(Object.keys(product));
    // console.log(addToCardHander);
    
    const clichHandlr = (product) =>{
        addToCardHander(product)
    }
    return (
        <div className='product'>
            <img className='img_product' src={img} alt="" />
            <p className=''>{name}</p>
            <p>Price : ${price}</p>
            <p>Rating : {ratings}</p>
            <button className='btn_product' onClick={()=>{clichHandlr(product)}}>Add to card</button>
        </div>
    );
};

export default Product;