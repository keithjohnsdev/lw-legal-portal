import FlexTable from "./Shared/FlexTable";
import { default as data } from "../graphql/dummyInternalCounselData";

const InternalCounselTable = (props) => {

  return <FlexTable data={data} />;
};

export default InternalCounselTable;
