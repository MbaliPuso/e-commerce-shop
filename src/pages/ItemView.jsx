import React from 'react';
import Sidebar from '../components/Sidebar';
import ProductDetails from '../components/ProductDetails';
import Sidebag from '../components/Sidebag';
import '../styles/ItemView.css';
import { Row, Col, Container } from 'react-bootstrap';
// import { useState } from 'react';

const ItemView = () => {
    



    return (
        <>
            {/* Joshua's section */}
            <Sidebar/>   
            
            <Container className='ItemView'>   
                <Row>
      
                    <Col md={8}>
                    <ProductDetails/>
                    </Col>

                    <Col md={4} className='hi'> 
                    <Sidebag/>
                    </Col>

                </Row>        


            </Container>

        </>
    );
};

export default ItemView;