import { useState } from "react";

const FloatingInput = (props) => {
  const [isFocused, setIsFocused] = useState(false);
  let isValid;
  props.isValid === undefined ? (isValid = true) : (isValid = props.isValid);

  function handleFocus() {
    setIsFocused(true);
  }

  function handleBlur(e) {
    if (e.target.value.length === 0) {
      setIsFocused(false);
    }
  }

  return (
    <div className="floating-input-view" style={{borderBottom: !isValid && "1px solid rgb(255, 145, 125)"}}>
      <p className={isFocused ? "placeholder slide-up" : "placeholder"}>
        {props.placeholder}
      </p>
      <input
        className="floating-input"
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={props.onChange}
        value={props.value}
        type={props.type || "text"}
      ></input>
      {!isValid && (
        <p
          style={{
            fontSize: "11px",
            position: "absolute",
            bottom: "-20px",
            color: "rgb(255, 145, 125)",
          }}
        >
          {props.invalidMsg}
        </p>
      )}
    </div>
  );
};

export default FloatingInput;
