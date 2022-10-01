import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = (props) => {
     const {addToCart} = props
    const {name, img, seller, price, ratings} = props.product
    
    return (
        <div className='product'>
            <img src={img ? img : 'Not Found'} alt="" />
           <div className="product-details">
           <h3>{name}</h3>
            <h4>Price: ${price}</h4>
            <div className="details">
            <p>Seller: {seller}</p>
            <p><small>Ratting: {ratings}</small></p>
           </div>
            </div>
            <button onClick={() => addToCart(props.product)} className='btn'>
                <p> Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
        </div>
    );
};

export default Product;