import { Header, Header1 } from "../Shared/Headers";
import { CaseDetailsHeader1, CaseDetailsHeader2 } from "./CaseDetailsHeaders";
import { dummyCasesData } from "../../graphql/dummyData";


const Clients = props => {

    return (
        <div className="case-details-page fullscreen">
        <Header>
          <Header1 />
        </Header>
        <CaseDetailsHeader1 title={dummyCasesData[0].title}/>
        <CaseDetailsHeader2 />
        </div>
    
      );
}

export default Clients;