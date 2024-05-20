import React from 'react';
import { Link } from 'react-router-dom';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Broaden your horizons" />
      <h1 className="app__header-h1">A unique flavor experience that will amaze your senses.</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>We are obsessively detailed and selective about the food we serve. Our menu is diverse enough for you to discover something that perfectly suits your taste. </p>
      <Link to='/menu'><button type="button" className="custom__button">View Menu</button></Link>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
