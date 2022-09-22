const FlexTable = (props) => {
  const data = props.data;
  console.log(data);
  return (
    <div className="flex-table">
      <div className="table-header">
        <div className="col">
          Name{" "}
          <img
            className="caret"
            src={require("../../theme/assets/images/icon-caret.png")}
            alt=""
          />
        </div>
        <div className="col short">Role</div>
        <div className="col">Email</div>
        <div className="col">Phone</div>
      </div>
      {data.map((counsel, index) => {
        return (
          <div className="table-row" key={index}>
            <div className="col bold">{`${counsel.firstName} ${counsel.lastName}`}</div>
            <div className="col short">Role</div>
            <div className="col">Email</div>
            <div className="col">Phone</div>
          </div>
        );
      })}
    </div>
  );
};

export default FlexTable;
