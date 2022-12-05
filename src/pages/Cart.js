import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  const handleRemove = (productID) => {
    dispatch(remove(productID));
  }
  return (
    <div>
      <h3>Cart</h3>
      <div className='cartWrapper'>
        {
          products.length < 1 ? <>Your Cart is Empty</> :
            products.map((product) => {
              return (
                <div className='cartCard'>
                  <img src={product.image} alt="image" />
                  <h5>{product.title}</h5>
                  <h5>{product.price}</h5>
                  <button className='btn' onClick={() => handleRemove(product.id)}>Remove</button>
                </div>
              )
            })
        }
      </div>
    </div>
  )
}

export default Cart