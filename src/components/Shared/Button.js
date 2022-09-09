const Button = props => {
    return <button className="lw-button" onClick={props.onClick}>{props.children}</button>
};

export default Button;