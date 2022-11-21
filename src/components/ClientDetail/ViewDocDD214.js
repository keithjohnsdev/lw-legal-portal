import Container from "../Shared/Container";
import { dummyMedicalDiagnosisData } from "../../graphql/dummyData";
import { useNavigate } from "react-router-dom";

const ViewDocCLJA = (props) => {
  const navigate = useNavigate();
  const data = dummyMedicalDiagnosisData;
  return (
    <div className="view-doc-page fullscreen">
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
            <h6 className="cd-title">DD214</h6>
          </div>
          <div className="cd-header1-line1-right flex">
            <h6 className="blue-link thin padding-adjust-left">Print</h6>
          </div>
        </div>
        <div className="cd-header1-line2">
          <p className="cd-header1-line2-text">Complete</p>
        </div>
      </div>
      <div className="view-doc">
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
        <div className="document-section">
          <Container>
            <h3>Document</h3>
            <div className="doc-title">
              <h6>DD214</h6>
              <p>
                <svg
                  width="18"
                  height="12"
                  viewBox="0 0 18 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.5888 4.32343C13.3224 2.70067 12.2982 1.30184 10.8313 0.558045C9.36456 -0.186015 7.63088 -0.186015 6.16419 0.558045C4.69722 1.30184 3.67306 2.70067 3.4066 4.32343C2.46876 4.43221 1.6035 4.8816 0.975365 5.5866C0.347226 6.29132 0.000272444 7.20247 2.07376e-06 8.14667C-0.00105406 9.16503 0.401333 10.1422 1.11947 10.8644C1.83737 11.5868 2.81219 11.995 3.83055 12H13.1644C14.1862 12 15.1658 11.5939 15.8879 10.8713C16.6098 10.1484 17.0151 9.16827 17.014 8.14667C17.0132 7.19957 16.6634 6.28605 16.0316 5.58079C15.3995 4.87553 14.5297 4.42773 13.5884 4.32343H13.5888ZM8.49775 10.0089L5.24621 6.75359H7.3622V3.25621H9.63345V6.75359H11.7494L8.49775 10.0089Z"
                    fill="#1B93C5"
                  />
                </svg>
                Download Image
              </p>
            </div>
            <div className="doc-div">
              <img
                className="doc-img"
                src={require("../../theme/assets/images/DD214.png")}
                alt=""
              />
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default ViewDocCLJA;
