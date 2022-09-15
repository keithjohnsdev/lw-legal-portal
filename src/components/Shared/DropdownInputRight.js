const DropdownInput = ({
  onChange,
  id,
  label,
  value,
  options,
  placeholder,
  ...props
}) => {
  let arr = placeholder
    ? [{ label: placeholder, value: "hint" }, ...options]
    : options;

    let isValid;
    props.isValid === undefined ? (isValid = true) : (isValid = props.isValid);
  return (
    <div className="floating-input-view right" style={{borderBottom: !isValid && "1px solid salmon"}}>
      <div className="dropdown-label">{label}</div>

      <select value={value} onChange={onChange} placeholder={placeholder}>
        {arr.map((o) => {
          let disabled = o.value === "hint";
          return (
            <option disabled={disabled} key={arr.indexOf(o)}>
              {o.label}
            </option>
          );
        })}
      </select>

      <img
        className="dropdown-caret"
        src={require("../../theme/assets/images/icon-caret.png")}
        alt=""
      />
    </div>
  );
};

export default DropdownInput;
