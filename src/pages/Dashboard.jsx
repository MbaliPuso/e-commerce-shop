import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../components/Sidebar';
import ProductList from '../components/ProductList';
import Sidebag from '../components/Sidebag';

const Dashboard = () => {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-1'>
                        <Sidebar />
                    </div>
                    <div className='col-9'>
                        <ProductList />
                    </div>
                    <div className='col-2'>
                        <Sidebag />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;