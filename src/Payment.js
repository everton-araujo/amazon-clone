import React from 'react';
import { Link } from 'react-router-dom';

import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

import './Payment.css';

function Payment() {
  const [{ basket, user }, dispatch ] = useStateValue();

  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          Checkout (
          <Link to='/checkout'>
            { basket?.length === 1 
              ? `${basket?.length} item` 
              : `${basket?.length} items` 
            }
          </Link>
          )
        </h1>

        {/* Payment section - Delivery Address */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>Rua React, 123</p>
            <p>São Paulo - SP</p>
          </div>
        </div>

        {/* Payment section - Review Items */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment_items">
            { basket.map(item => (
              <CheckoutProduct 
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>

        </div>

        {/* Payment section - Payment method */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_details">
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
