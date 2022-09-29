import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart, faStar} from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css';
const Product = (props) => {
    const {img, name, price, seller, ratings} = props.product;
    const {product, handelAddToCart} = props;
    return (
        <div className='product'>
            {
                <div>
                    <img src={img} alt="" />
                 <div className='product-info'>
                 <p className='product-name'>{name} </p>
                 <p>$ {price}</p>
                 <p>{seller}</p>
                 <p>Rating: {ratings} <FontAwesomeIcon icon={faStar}></FontAwesomeIcon></p>
                 </div>
                 <button onClick={()=> handelAddToCart(product)} className='btn-cart'>
                    <p className='btn-text'>Add to cart</p>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                 </button>
                </div>   
            }
        </div>
    );
};

export default Product;