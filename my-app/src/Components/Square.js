import React from "react";
import PropTypes from "prop-types";
import "../App.css";

const Square = ({ name, user, changeSquare }) => {
  return (
    <div className="square" onClick={changeSquare}>
      <p>{user}</p>
      <p>{name}</p>
    </div>
  );
};

Square.propTypes = {
  name: PropTypes.string,
};

export default Square;
