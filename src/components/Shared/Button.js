const Button = props => {
    return <button className="lw-button" onClick={props.onClick}>{props.children}</button>
};

export const GrayButton = props => {
    return <button className="gray-button" onClick={props.onClick}>{props.children}</button>
}

export default Button;