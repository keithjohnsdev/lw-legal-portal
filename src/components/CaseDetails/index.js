import { Header, Header1 } from "../Shared/Headers";
import { CaseDetailsHeader1, CaseDetailsHeader2 } from "./CaseDetailsHeaders";
import {Container2} from "../Shared/Container";
import { dummyCasesData, dummyClaimMetricsData } from "../../graphql/dummyData";
import ClaimMetrics from "./ClaimMetrics";

const CaseDetails = () => {

  return (
    <div className="case-details-page fullscreen">
      <Header>
        <Header1 />
      </Header>
      <CaseDetailsHeader1 title={dummyCasesData[0].title}/>
      <CaseDetailsHeader2 />
      <div className="case-details">
        <Container2>
          <h3>Case Information</h3>
          <div className="form-row">
            <div className="info-div">
              <p>Case Title</p>
              <p className="info-p">{dummyCasesData[0].title}</p>
            </div>
            <div className="info-div">
              <p>Defendant Name</p>
              <p className="info-p">{dummyCasesData[0].defendant}</p>
            </div>
            <div className="info-div">
              <p>Lawsuit Type</p>
              <p className="info-p">{dummyCasesData[0].lawsuitType}</p>
            </div>
          </div>
          <div className="form-row">
            <div className="info-div">
              <p>Jurisdiction</p>
              <p className="info-p">{dummyCasesData[0].jurisdiction}</p>
            </div>
            <div className="info-div">
              <p>Judge</p>
              <p className="info-p">{dummyCasesData[0].judge}</p>
            </div>
            <div className="info-div">
              <p>Court</p>
              <p className="info-p">{dummyCasesData[0].court}</p>
            </div>
          </div>
          <div className="form-row">
            <div className="info-div">
              <p>Case File Email</p>
              <p className="info-p">info@abclawfirm.com</p>
            </div>
          </div>
        </Container2>
      </div>
      <ClaimMetrics />
    </div>
  );
};

export default CaseDetails;
