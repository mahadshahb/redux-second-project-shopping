import React from 'react';
import Product from '../components/Product';

const Home = () => {
    return (
        <div>
            <h2 className='heading'>Welcome to redux toolkit store</h2>
            <section>
                <Product />
            </section>
        </div>
    )
}

export default Home