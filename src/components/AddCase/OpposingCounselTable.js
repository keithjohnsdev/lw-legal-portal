import FlexTable from "../Shared/FlexTable";
import FlexTableRow from "../Shared/FlexTableRow";
import { dummyOpposingCounselData as data } from "../../graphql/dummyData";

const OpposingCounselTable = (props) => {
  return (
    <FlexTable header1="Name" header2="Email" header3="Phone" header4="Address" col3mod="short" col4mod="long" header5=" " col5mod="spacer">
      {data.map((counsel, index) => {
        return (
          <FlexTableRow
            key={index}
            col1={`${counsel.firstName} ${counsel.lastName}`}
            col1mod="bold"
            col2={counsel.email}
            col3={counsel.phone}
            col3mod="short"
            col4={`${counsel.street}, ${counsel.city}, ${counsel.state} ${counsel.zip}`}
            col4mod="long"
            profile={`${counsel.firstName[0].toUpperCase()}${counsel.lastName[0].toUpperCase()}`}
            col5=" "
            col5mod="spacer"
          />
        );
      })}
    </FlexTable>
  );
};

export default OpposingCounselTable;
