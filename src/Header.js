import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import { useStateValue } from './StateProvider';

import './Header.css';

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to='/'>
        <img 
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
          alt="Amazon logo"
        />
      </Link>
      <strong>Clone</strong>

      <div className="header_search">
        <input type="text" className="header_searchInput"/>
        <SearchIcon className="header_searchIcon"/>
      </div>

      <div className="header_nav">

        <Link to='/login'>
          <div className="header_option">
            <span className="header_optionLineOne">Hello Guest</span>
            <span className="header_optionLineTwo">Sign In</span>
          </div>
        </Link>

        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">& Orders</span>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>

        <Link to='/checkout'>
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionLineTwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
        
      </div>
    </div>
  );
}

export default Header;
