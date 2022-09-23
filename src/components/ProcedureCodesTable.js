import { dummyProcedureCodesData as data } from "../graphql/dummyData";
import FlexTable from "./Shared/FlexTable";
import FlexTableRow from "./Shared/FlexTableRow";

const ProcedureCodesTable = (props) => {
  return (
    <FlexTable header1="Code" header2="Description" col2mod="double-long">
      {data.map((procedure, index) => {
        return (
          <FlexTableRow
            key={index}
            col1={procedure.code}
            col1mod="bold"
            col2={procedure.description}
            col2mod="double-long"
          />
        );
      })}
    </FlexTable>
  );
};

export default ProcedureCodesTable;
