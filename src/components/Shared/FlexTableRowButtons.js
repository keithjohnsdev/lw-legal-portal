import { BlueBorderButton } from "../Shared/Buttons";

const FlexTableRowButtons = (props) => {
    return (
      <div className="table-row">
        <div className={`col ${props.col1mod}`}>
          {props.col1}
        </div>
        <div className={`col ${props.col2mod}`}>{props.col2}</div>
        {props.col3 && <div className={`col ${props.col3mod}`}>{props.col3}</div>}
        {props.col4 && <div className={`col ${props.col4mod}`}>{props.col4}</div>}
        {props.col5 && <div className={`col ${props.col5mod}`}>{props.col5}</div>}
        <div className="dots-div">
          <BlueBorderButton>View Results</BlueBorderButton>
        </div>
      </div>
    );
  };
  
  export default FlexTableRowButtons;
  