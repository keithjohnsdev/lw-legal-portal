const DropdownInput = ({ onChange, id, label, value, options, placeholder }) => {
 
  function handleChange (e) {
    console.log(e)
    onChange(id, e.target.value);
}
 
  let arr = placeholder
    ? [{ label: placeholder, value: "hint", selected: true }, ...options]
    : options;

  return (
    <div className="floating-input-view">
      <div className="dropdown-label">{label}</div>

      <select value={value} onChange={handleChange}>
        {arr.map((o) => {
          let disabled = o.value === "hint";
          let selected = o.selected;
          return (
            <option disabled={disabled} selected={selected} key={arr.indexOf(o)}>
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
