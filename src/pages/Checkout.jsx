import React from 'react';
import ShippingAddress from '../components/ShippingAddress';
import PaymentMethod from '../components/PaymentMethod';
import ReviewBag from '../components/ReviewItemsBag';
import OrderSummary from '../components/OrderSummary';

const Checkout = () => {
    return (
        <>
            <ShippingAddress />
            <PaymentMethod />
            <ReviewBag />
            <OrderSummary />
        </>
    );
};

export default Checkout;