import React from 'react';
import Sidebar from '../components/Sidebar';
import ProductDetails from '../components/ProductDetails';
import Sidebag from '../components/Sidebag';

const ItemView = () => {
    return (
        <>
            <Sidebar />
            <ProductDetails />
            <Sidebag />
        </>
    );
};

export default ItemView;