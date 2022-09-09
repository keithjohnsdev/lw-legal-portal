import { useState } from "react";

const FloatingInput = props => {
    const [isFocused, setIsFocused] = useState(false);

    function handleFocus () {
        setIsFocused(true);
    }

    function handleBlur (e) {
        if (e.target.value.length === 0) {
            setIsFocused(false);
        }
    }

    return (
        <div className="floating-input-view">
            <p className={ isFocused ? "placeholder slide-up" : "placeholder"} >{props.placeholder}</p>
            <input className="floating-input" onFocus={handleFocus} onBlur={handleBlur} onChange={props.onChange} value={props.value}></input>
        </div>
    );
};

export default FloatingInput;