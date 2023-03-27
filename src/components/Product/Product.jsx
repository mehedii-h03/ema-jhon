import React from 'react';
import './Product.css'
const Product = ({ product }) => {
    const { name, price, seller, quantity, img, ratings } = product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h4 className='product-name'>{name}</h4>
                <p>Price: ${price}</p>
                <p>Manufacturer: ${seller}</p>
                <p>Ratings: {ratings} Star</p>
            </div>
            <button className='btn-cart'>Add To Cart</button>
        </div>
    );
};

export default Product;