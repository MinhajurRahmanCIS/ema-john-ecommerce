import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart} = props

    let total = 0;
    let shipping = 0
    for(const product of cart){
       total+= product.price;
       shipping+= product.shipping;
    }
    const tax = total * 0.5; 
    const grandTotal = total + shipping + parseFloat(tax);
    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>Selected item: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: {shipping}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <h5>Grand Total: {grandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;