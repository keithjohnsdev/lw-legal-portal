import { useRef } from "react";

const GrayDropdown = (props) => {
  const ref = useRef();

  const focusDropdown = () => {
    ref.current.focus();
  };
  return (
    <div className="gray-dropdown" id="gray-dropdown" onClick={focusDropdown}>
      <label htmlFor="gray-dropdown">{""}</label>
      <select value={props.value || "0"} onChange={props.onChange} ref={ref}>
        <option value="0">{props.placeholder}</option>
      </select>
      <div className="caret-div">
        <svg
          width="9"
          height="5"
          viewBox="0 0 9 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0L4.5 5L9 0L0 0Z"
            fill="#313537"
          />
        </svg>
      </div>
    </div>
  );
};

export default GrayDropdown;
