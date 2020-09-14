import React from "react";

import "./Input.scss";

export default function InputComponent({
  type,
  name,
  placeholder,
  changeHandler,
}) {
  return (
    <div className="input-component">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={(e) => changeHandler(e)}
      />
    </div>
  );
}
