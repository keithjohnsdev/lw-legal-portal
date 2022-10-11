const BlueButton = props => {
    return <button className="lw-button" onClick={props.onClick}>{props.children}</button>
};

export const GrayButton = props => {
    return <button className="gray-button" onClick={props.onClick}>{props.children}</button>
}

export const BlueBorderButton = props => {
    return <button className="blue-border-button" onClick={props.onClick}>{props.children}</button>
}

export const RedBorderButton = props => {
    return <button className="red-border-button" onClick={props.onClick}>{props.children}</button>
}

export const BlueButtonSmall = props => {
    return <button disabled className="lw-button-small" onClick={props.onClick}>{props.children}</button>
}

export default BlueButton;