import React from 'react';
import '../styles/Dashboard.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Sidebar.css';
import '../styles/ProductList.css';
import '../styles/Sidebag.css';
import Sidebar from '../components/Sidebar';
import ProductList from '../components/ProductList';
import Sidebag from '../components/Sidebag';

const Dashboard = () => {
    return (
        <>
            <Sidebar />
            <ProductList />
            <Sidebag />
        
        </>
    );
};

export default Dashboard;