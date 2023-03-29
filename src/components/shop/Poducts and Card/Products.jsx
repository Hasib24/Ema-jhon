import React from 'react';
import Product from './Product/Product';
import './Products.css'
const Products = (props) => {
    let products = props.products;
    let addToCardHander = props.addToCardHander;
    // console.log(products);
    return (
        <div className='products'>
            {products.map(product => <Product key={product.id} product={product} addToCardHander={addToCardHander} ></Product>)}  
        </div>
    );
};

export default Products;