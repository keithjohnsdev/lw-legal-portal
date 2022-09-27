import CasesTableTitleColumn from "./CasesTableTitleColumn";
import CasesTableGrid from "./CasesTableGrid";

const CasesTable = (props) => {
  return <div className="cases-table">
    <CasesTableTitleColumn />
    <CasesTableGrid />
  </div>
};

export default CasesTable;
