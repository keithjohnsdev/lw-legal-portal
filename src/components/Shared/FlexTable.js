const FlexTable = (props) => {
  return (
    <div className="flex-table">
      <div className="table-header">
        <div className={`col ${props.col1mod}`}>
          {props.header1}{" "}
          <img
            className="caret"
            src={require("../../theme/assets/images/icon-caret.png")}
            alt=""
          />
        </div>
        <div className={`col ${props.col2mod}`}>{props.header2}</div>
        {props.header3 && <div className={`col ${props.col3mod}`}>{props.header3}</div>}
        {props.header4 && <div className={`col ${props.col4mod}`}>{props.header4}</div>}
        {props.header5 && <div className={`col ${props.col5mod}`}>{props.header5}</div>}
      </div>
      {props.children}
    </div>
  );
};

export default FlexTable;
