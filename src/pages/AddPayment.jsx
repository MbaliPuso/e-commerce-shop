import React, { useState } from 'react';
import '../styles/AddPayment.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const AddPayment = () => {
    const [formData, setFormData] = useState({
        cardHolderName: '',
        cardNumber: '',
        expiryDate: '',
        cvc: '',
        defaultPayment: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Card Added!");
    };

    return (
        <>
            <div className="container">
                <div className="container select-card">
                    <div className="select-card-heading">
                        SELECT A CARD
                    </div>
                    
                </div>
                <div className="container add-card">
                    <div className="new-card-heading">
                        ADD NEW CARD
                    </div>
                    <form className='add-card-form' onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Cardholder Name</label>
                            <input type="text" name='cardHolderName' placeholder='John Maker' value={formData.cardHolderName} onChange={handleChange} className='form-control' required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="number">Card Number</label>
                            <input type="number" name='cardNumber' placeholder='5126-5987-2214-7621' value={formData.cardNumber} onChange={handleChange} className='form-control' required />
                        </div>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-4">
                                    <label htmlFor="date">Expiry Date</label>
                                    <input type="text" name='expiryDate' placeholder='MM/YYYY' value={formData.expiryDate} onChange={handleChange} className='form-control' required />
                                </div>
                                <div className="col-3">
                                <label htmlFor="cvc">CVC</label>
                                <input type="number" name='cvc' placeholder='123' value={formData.cvc} onChange={handleChange} className='form-control' required />
                                </div>
                            </div>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" name="defaultPayment" value={formData.defaultPayment} onChange={handleChange} className='form-check-input' />
                            <label htmlFor="defaultPayment">Save this as your default payment method</label>
                        </div>
                        <button type="submit" className='btn btn-dark'>Add Payment Method</button>
                        <div className="row">
                            <div className="col-6"><Link to='/checkout'>Back</Link></div>
                            <div className="col-6">Secure Connection</div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddPayment;