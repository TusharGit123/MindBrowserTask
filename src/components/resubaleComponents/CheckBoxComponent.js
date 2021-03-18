import React from "react";

const CheckBoxComponent = ({ id, name, checkboxname, onClick, value }) => {
  return (
    <div>
      <input
        type="checkbox"
        id={id}
        name={name}
        value={value}
        onClick={onClick}
      />
      <label htmlFor={id}> {checkboxname}</label>
    </div>
  );
};

export default CheckBoxComponent;
