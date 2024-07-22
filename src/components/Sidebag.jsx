import React from 'react';
import '../styles/Sidebag.css';
import Card from 'react-bootstrap/Card';




const Sidebag = () => {
    return (
        <div className='sidebag'>
            Bag

            <div className='items'>

            <Card>
                <Card.Body className='card'> <img src="" alt="" /> </Card.Body>
            </Card>


            </div>

            <div className='view-bag'>

            <button type='button'> View Bag </button>
            </div>


        </div>
    );
};

export default Sidebag;