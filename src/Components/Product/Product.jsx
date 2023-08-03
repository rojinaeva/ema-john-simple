import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    console.log(props)
    const {img,name,price,seller,ratings}=props.product;
    
   const handleAddToCart=props.handleAddToCart;
    return (
        <div className='product'>
            <img src={img} alt="" />
           <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p className='product-price'>Price:${price}</p>
                <div className='product-rate'>
                    <p>Manufacturer:{seller}</p>
                    <p>Rating:{ratings}stars</p>
                </div>
           </div>
           <button onClick={()=>handleAddToCart(props.product)} className='btn-cart'>
            Add to Cart
            <FontAwesomeIcon icon={ faShoppingCart} />
           </button>
        </div>
    );
};

export default Product;