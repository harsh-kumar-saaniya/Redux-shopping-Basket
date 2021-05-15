import React from 'react';
import './Appbar.css'
import ShoppedProduct from './ShoppedProduct'

const BasketData = () => {
    return (
        <div className="Basketdata">
            <div className="basketdataContainer">
                <div className="listContainer">
                    <div>
                        <p>Items</p>
                    </div>
                    <div className="currentOperations">
                        <p>Quantity</p>
                        <p>Price</p>
                        <p>Remove</p>
                    </div>
                </div>
                <ShoppedProduct />
            </div>
        </div>
    )
}


export default BasketData;