import { Header, Header1 } from "../Shared/Headers";
import Table from "./Table";
import CasesTableToolbar from "./CasesTableToolbar";

const Cases = (props) => {
  return (
    <div className="cases-page fullscreen">
      <Header>
        <Header1 />
      </Header>
      <CasesTableToolbar />
      <Table />
    </div>
  );
};

export default Cases;