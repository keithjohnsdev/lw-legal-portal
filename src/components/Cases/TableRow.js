const TableRow = (props) => {
    return (
      <div className="cases-table-row">
        <div className="cases-col"><h5>{props.col2}</h5></div>
        <div className="cases-col"><h5>{props.col3}</h5></div>
        <div className="cases-col"><h5>{props.col4}</h5></div>
        <div className="cases-col"><h5>{props.col5}</h5></div>
        <div className="cases-col"><h5>{props.col6}</h5></div>
        <div className="cases-col"><h5>{props.col7}</h5></div>
        <div className="cases-col"><h5>{props.col8}</h5></div>
        <div className="cases-col"><h5 className={(props.col9 === "Open") ? "open" : "closed"}>{props.col9}</h5></div>
      </div>
    );
  };
  
  export default TableRow;
  