import React from 'react';
import '../styles/Dashboard.css';
import { Row, Col, Container } from 'react-bootstrap';
import Sidebar from '../components/Sidebar';
import ProductList from '../components/ProductList';
import Sidebag from '../components/Sidebag';



const Dashboard = () => {
    return (
        <>
            <Sidebar />
            
            <Container className='dashboard'>   
                <Row>
      
                    <Col md={8}>
                    <ProductList/>
                    </Col>

                    <Col md={4} className='hi'> 
                    <Sidebag/>
                    </Col>

                </Row>        


            </Container>
        
        </>
    );
};

export default Dashboard;