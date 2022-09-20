const DropdownInput = (props) => {

  const { onChange, label, value, options, placeholder, modifier } = props;

  let arr = placeholder
    ? [{ label: placeholder, value: "hint" }, ...options]
    : options;

  let isValid;
  props.isValid === undefined ? (isValid = true) : (isValid = props.isValid);
  return (
    <div
      className={`floating-input-view ${modifier}`}
      style={{ borderBottom: !isValid && "1px solid rgb(255, 145, 125)" }}
    >
      <div className="dropdown-label">{label}</div>

      <select value={value || "hint"} onChange={onChange} placeholder={placeholder}>
        {arr.map((o) => {
          let disabled = o.value === "hint";
          return (
            <option disabled={disabled} key={arr.indexOf(o)} value={o.value}>
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
      {!isValid && (
        <p
          style={{
            fontSize: "11px",
            position: "absolute",
            bottom: "-20px",
            color: "salmon",
          }}
        >
          {props.invalidMsg}
        </p>
      )}
    </div>
  );
};

export default DropdownInput;
