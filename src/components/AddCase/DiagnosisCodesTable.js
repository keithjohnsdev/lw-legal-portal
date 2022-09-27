import { dummyDiagnosisCodesData as data } from "../../graphql/dummyData";
import FlexTable from "../Shared/FlexTable";
import FlexTableRow from "../Shared/FlexTableRow";

const ProcedureCodesTable = (props) => {
  return (
    <FlexTable header1="Code" header2="Description" col2mod="double-long">
      {data.map((diagnosis, index) => {
        return (
          <FlexTableRow
            key={index}
            col1={diagnosis.code}
            col1mod="bold"
            col2={diagnosis.description}
            col2mod="double-long"
          />
        );
      })}
    </FlexTable>
  );
};

export default ProcedureCodesTable;
