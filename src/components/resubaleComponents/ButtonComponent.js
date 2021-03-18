import React from "react";

const ButtonComponent = ({ type, buttontext, buttonclass, onClick }) => {
  return (
    <React.Fragment>
      <button type={type} className={buttonclass} onClick={onClick}>
        {buttontext}
      </button>
    </React.Fragment>
  );
};

export default ButtonComponent;
