import React from 'react';
import PropTypes from 'prop-types';
import './Layout.css';

const Layout = ({ header, footer, children }) => {
  return (
    <div className="layout">
      {header && <header className="layout-header">{header}</header>}
      <main className="layout-main">
        {children}
      </main>
      {footer && <footer className="layout-footer">{footer}</footer>}
    </div>
  );
};

Layout.propTypes = {
  header: PropTypes.node,
  footer: PropTypes.node,
  children: PropTypes.node.isRequired
};

export default Layout;
