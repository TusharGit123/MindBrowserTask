// import React from "react";

// const InputComponent = () => {
//   return (
//     <>
//       <div>
//         <input
//           type="text"
//           vlaue="value"
//           placeholder="place"
//           className="custom-input"
//         />
//       </div>
//     </>
//   );
// };

// export default InputComponent;

import React from "react";

const InputComponent = ({
  name,
  type,
  value,
  place,
  inputclass,
  onChange,
  ref,
  //   inputlabelclass,
  //   labeltext,
}) => {
  return (
    <React.Fragment>
      {/* <label className={inputlabelclass} htmlFor={name}>
        {labeltext}
      </label> */}
      <div className="form-group">
        <input
          name={name}
          type={type}
          value={value}
          placeholder={place}
          className={inputclass}
          onChange={onChange}
          ref={ref}
        />
      </div>
    </React.Fragment>
  );
};

export default InputComponent;
