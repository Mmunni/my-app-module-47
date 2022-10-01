import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect( () => {
        fetch ('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])


    const addToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
    }
    return (
        <div className='main-area'>
            <div className="container">
               <div className="main-content">
               <div className="product-container">
                    {
                       products.map(product => <Product 
                        key = {product.id}
                        product = {product}
                        addToCart = {addToCart}
                       ></Product>)
                    }
                </div>
                <div className="items-container">
                     <Cart cart={cart}></Cart>                   
                </div>
               </div>
            </div>
        </div>
    );
};

export default Shop;