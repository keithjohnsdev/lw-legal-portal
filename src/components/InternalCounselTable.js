import FlexTable from "./Shared/FlexTable";
import FlexTableRowProfile from "./Shared/FlexTableRowProfile";
import { dummyInternalCounselData as data } from "../graphql/dummyData";

const InternalCounselTable = (props) => {
  return (
    <FlexTable header1="Name" header2="Role" header3="Email" header4="Phone" col2mod="short">
      {data.map((counsel, index) => {
        return (
          <FlexTableRowProfile
            key={index}
            col1={`${counsel.firstName} ${counsel.lastName}`}
            col1mod="bold"
            col2={counsel.role}
            col2mod="short"
            col3={counsel.email}
            col4={counsel.phone}
            profile={`${counsel.firstName[0].toUpperCase()}${counsel.lastName[0].toUpperCase()}`}
          />
        );
      })}
    </FlexTable>
  );
};

export default InternalCounselTable;
