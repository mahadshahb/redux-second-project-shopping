import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { fetchProducts } from '../store/productSlice';
import { STATUS } from '../store/productSlice';

const Product = () => {
    const dispatch = useDispatch();
    // const [products, setProducts] = useState([]);
    const { data: products, status } = useSelector((state) => state.product);

    useEffect(() => {
        dispatch(fetchProducts());
        // const fetchData = async () => {
        //     const response = await fetch('http://fakestoreapi.com/products');
        //     const data = await response.json();
        //     // console.log(data);
        //     setProducts(data);
        // }
        // fetchData();
    }, []);
    const handleAdd = (pro) => {
        dispatch(add(pro));
    }
    if (status === STATUS.LOADING) {
        return <h2>Loading Data..... :)</h2>
    }
    return (
        <React.Fragment>
            <div className='productsWrapper'>
                {
                    products.map((pro) => {
                        return (
                            <div className='card' key={pro.id}>
                                <img src={pro.image} alt="image" />
                                <h4>{pro.title}</h4>
                                <h5>{pro.price}</h5>
                                <button className='btn' onClick={() => handleAdd(pro)}>Add to cart</button>
                            </div>
                        )
                    })
                }
            </div>
        </React.Fragment>
    )
}

export default Product;