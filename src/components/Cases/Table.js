import TableTitleColumn from "./TableTitleColumn";
import TableGrid from "./TableGrid";

const Table = (props) => {
  return <div className="cases-table">
    <TableTitleColumn />
    <TableGrid />
  </div>
};

export default Table;
