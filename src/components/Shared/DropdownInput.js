const DropdownInput = ({
  onChange,
  id,
  label,
  value,
  options,
  placeholder,
}) => {
  let arr = placeholder
    ? [{ label: placeholder, value: "hint" }, ...options]
    : options;
  return (
    <>
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
    </>
  );
};

export default DropdownInput;
