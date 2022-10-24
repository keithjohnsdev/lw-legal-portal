import Container from "../Shared/Container";
import { dummyMedicalDiagnosisData } from "../../graphql/dummyData";
import { useNavigate } from "react-router-dom";
import FlexTable from "../Shared/FlexTable";
import FlexTableRow from "../Shared/FlexTableRow";

const ViewMedicalDiagnosis = (props) => {
  const navigate = useNavigate();
  const data = dummyMedicalDiagnosisData;
  return (
    <div className="view-medical-diagnosis-page fullscreen">
      <div className="client-detail-header1">
        <div className="cd-header1-line1">
          <div className="cd-header1-line1-left flex">
            <h6
              className="gray-link"
              onClick={() => navigate("/claim-details")}
            >
              Back
            </h6>
          </div>
          <div className="client-header1-line1-middle flex">
            <h6 className="cd-title">Medical Diagnosis</h6>
          </div>
          <div className="cd-header1-line1-right flex">
            <h6 className="blue-link thin padding-adjust-left">Print</h6>
          </div>
        </div>
        <div className="cd-header1-line2">
          <p className="cd-header1-line2-text">Complete</p>
        </div>
      </div>
      <div className="view-medical-diagnosis">
        <Container>
          <div className="requirement-banner">
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.9845 64C49.5234 64 64 49.5234 64 32.0155C64 14.4766 49.4925 0 31.9536 0C14.4456 0 0 14.4766 0 32.0155C0 49.5234 14.4766 64 31.9845 64ZM27.7777 48.1624C26.6022 48.1624 25.6742 47.6365 24.7772 46.5848L15.8685 35.7274C15.3117 35.0469 15.0333 34.2736 15.0333 33.5312C15.0333 31.8608 16.3325 30.5926 17.9101 30.5926C18.869 30.5926 19.6733 30.9947 20.4466 31.9227L27.6849 41.0479L41.6356 18.7762C42.3161 17.6626 43.2131 17.1368 44.1721 17.1368C45.7187 17.1368 47.2035 18.2194 47.2035 19.8589C47.2035 20.6013 46.8323 21.3746 46.3992 22.0551L30.6854 46.492C29.943 47.6056 28.9531 48.1624 27.7777 48.1624Z"
                fill="#3BC86B"
              />
            </svg>
            <h3>Requirements of this claim section have been satisfied.</h3>
          </div>
        </Container>
        <div className="treatment-info">
          <Container>
            <h3>Treatment Information</h3>
            <div className="form-row">
              <div className="info-div">
                <p>Insurance Provider</p>
                <p className="info-p">{data.insuranceProvider}</p>
              </div>
              <div className="info-div">
                <p>Facility</p>
                <p className="info-p">{data.facility}</p>
              </div>
              <div className="info-div">
                <p>Provider</p>
                <p className="info-p">{data.provider}</p>
              </div>
            </div>
            <div className="form-row">
              <div className="info-div">
                <p>Claim Date</p>
                <p className="info-p">{data.claimDate}</p>
              </div>
              <div className="info-div">
                <p>Total Amount</p>
                <p className="info-p">${data.totalAmount.toFixed(2)}</p>
              </div>
              <div className="info-div"></div>
            </div>
          </Container>
        </div>
        <div className="codes-section">
          <Container>
            <h3>Procedure Codes (1)</h3>
            <FlexTable
              header1="Code"
              header2="Description"
              col2mod="double-long"
              header3=" "
              col3mod="spacer"
            >
              <FlexTableRow
                col1="CPT 52235"
                col1mod="bold"
                col2="Under Urethra and Bladder Transurethral Surgical Procedures"
                col2mod="double-long"
                col3=" "
                col3mod="spacer"
              />
            </FlexTable>
          </Container>
        </div>
        <div className="codes-section">
          <Container>
            <h3>Diagnosis Codes (1)</h3>
            <FlexTable
              header1="Code"
              header2="Description"
              col2mod="double-long"
              header3=" "
              col3mod="spacer"
            >
              <FlexTableRow
                col1="C67.2 Malignant neoplasm of lateral wall of bladder"
                col1mod="bold"
                col2="Bladder Cancer"
                col2mod="double-long"
                col3=" "
                col3mod="spacer"
              />
            </FlexTable>
          </Container>
        </div>
        <div className="codes-section">
          <Container>
            <h3>Prescription Codes (1)</h3>
            <FlexTable
              header1="Code"
              header2="Description"
              col2mod="double-long"
              header3=" "
              col3mod="spacer"
            >
              <FlexTableRow
                col1="63323-103-51"
                col1mod="bold"
                col2="Cisplatin"
                col2mod="double-long"
                col3=" "
                col3mod="spacer"
              />
            </FlexTable>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default ViewMedicalDiagnosis;
