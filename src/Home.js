import React from 'react';

import Product from './Product';

import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img 
          className="home_image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
          alt="Home banner"
        />

        <div className="home_row">
          <Product
            id='1'
            title='Kindle'
            price={89.99}
            image={'https://images-na.ssl-images-amazon.com/images/I/61Ww4abGclL._AC_SL1000_.jpg'}
            rating={5}
          />
          <Product 
            id='2'
            title='Echo Dot (4th Gen)'
            price={59.99}
            image={'https://images-na.ssl-images-amazon.com/images/I/612KpcXcFBL._AC_SL1000_.jpg'}
            rating={3}
          />
        </div>

        <div className="home_row">
          <Product 
            id='3'
            title='Fire TV Stick Lite'
            price={49.99}
            image={'https://images-na.ssl-images-amazon.com/images/I/51Da2Z%2BFTFL._AC_SL1000_.jpg'}
            rating={4}
          />
          <Product 
            id='4'
            title='Fire 7 tablet'
            price={49.99}
            image={'https://images-na.ssl-images-amazon.com/images/I/71POuqajw1L._AC_SL1500_.jpg'}
            rating={3}
          />
          <Product 
            id='5'
            title='Echo Show 5 | Smart display with Alexa'
            price={64.99}
            image={'https://images-na.ssl-images-amazon.com/images/I/716neMnDXXL._AC_SL1500_.jpg'}
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product 
            id='6'
            title='Echo Frames (2nd Gen) | Smart audio glasses with Alexa'
            price={249.99}
            image={'https://images-na.ssl-images-amazon.com/images/I/416Fv71ownL._AC_SL1000_.jpg'}
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
