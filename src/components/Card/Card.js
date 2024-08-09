import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ title, image, content, footer }) => {
  return (
    <div className="card">
      {image && <img src={image} alt={title} className="card-image" />}
      <div className="card-body">
        {title && <h2 className="card-title">{title}</h2>}
        <p className="card-content">{content}</p>
      </div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  content: PropTypes.string.isRequired,
  footer: PropTypes.node
};

export default Card;
