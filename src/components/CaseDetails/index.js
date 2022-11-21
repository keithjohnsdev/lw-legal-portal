import { Header, Header1 } from "../Shared/Headers";
import { CaseDetailsHeader1, CaseDetailsHeader2 } from "./CaseDetailsHeaders";
import { Container2 } from "../Shared/Container";
import { dummyCasesData } from "../../graphql/dummyData";
import ClaimMetrics from "./ClaimMetrics";
import ClientMetrics from "./ClientMetrics";

const CaseDetails = () => {
  const data = dummyCasesData;
  return (
    <div className="case-details-page">
      <Header>
        <Header1 />
      </Header>
      <CaseDetailsHeader1 title={data[0].title} backLinkTo="/"/>
      <CaseDetailsHeader2 />
      <div className="case-details">
        <Container2>
          <h3>Case Information</h3>
          <div className="margin-wrapper">
            <div className="form-row">
              <div className="info-div">
                <p>Case Title</p>
                <p className="info-p">{data[0].title}</p>
              </div>
              <div className="info-div">
                <p>Defendant Name</p>
                <p className="info-p">{data[0].defendant}</p>
              </div>
              <div className="info-div">
                <p>Lawsuit Type</p>
                <p className="info-p">{data[0].lawsuitType}</p>
              </div>
            </div>
            <div className="form-row">
              <div className="info-div">
                <p>Jurisdiction</p>
                <p className="info-p">{data[0].jurisdiction}</p>
              </div>
              <div className="info-div">
                <p>Judge</p>
                <p className="info-p">{data[0].judge}</p>
              </div>
              <div className="info-div">
                <p>Court</p>
                <p className="info-p">{data[0].court}</p>
              </div>
            </div>
            <div className="form-row">
              <div className="info-div">
                <p>Case File Email</p>
                <p className="info-p">info@abclawfirm.com</p>
              </div>
            </div>
          </div>
        </Container2>
        <ClaimMetrics />
        <ClientMetrics />
      </div>
    </div>
  );
};

export default CaseDetails;