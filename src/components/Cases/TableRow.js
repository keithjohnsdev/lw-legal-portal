const TableRow = (props) => {
  return (
    <div className="whole-row">
      <div className="title-column">{props.col1}</div>
      <div className="case-info-row">
        <div className="cases-col col2"><p className="cell-text">{props.col2}</p></div>
        <div className="cases-col col3"><p className="cell-text">{props.col3}</p></div>
        <div className="cases-col col4"><p className="cell-text">{props.col4}</p></div>
        <div className="cases-col col5"><p className="cell-text">{props.col5}</p></div>
        <div className="cases-col col6"><p className="cell-text">{props.col6}</p></div>
        <div className="cases-col col7"><p className="cell-text">{props.col7}</p></div>
        <div className="cases-col col8"><p className="cell-text">{props.col8}</p></div>
        <div
          className={
            props.col9 === "Open" ? "cases-col col9 open end" : "cases-col col9 closed end"
          }
        >
          <p className="cell-text">{props.col9}</p>
        </div>
      </div>
    </div>
  );
};

export default TableRow;
