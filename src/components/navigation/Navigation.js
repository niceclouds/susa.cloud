import React from 'react';
import PropTypes from 'prop-types';

const Navigation = ({ logo, menuItems, children }) => {
  return (
    <div className="nav-wrapper">
      <nav>
        {logo}
        <ul>
          {
            menuItems.map(item => {
              return (
                <li key={item.link}><a href={item.link}>{item.name}</a></li>
              )
            })
          }
        </ul>
        {children}
      </nav>
    </div>
  );
};

Navigation.propTypes = {
  logo: PropTypes.node,
  children: PropTypes.any,
  menuItems: PropTypes.array
};

Navigation.defaultProps = {
  logo: null,
  menuItems: []
};

export default Navigation;
