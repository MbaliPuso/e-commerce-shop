import React from 'react';
import Sidebar from '../components/Sidebar'
import CheckBagItems from '../components/CheckBagItems';
import Sidebag from '../components/Sidebag';

const Bag = () => {
    return (
        <>
            <Sidebar />
            <CheckBagItems />
            <Sidebag />
        </>
    );
};

export default Bag;