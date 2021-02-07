import React from 'react';
import './card.css';

const Card = ({
  children
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, children);
};

export default Card;