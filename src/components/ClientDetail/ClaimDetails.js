import { Header, Header1 } from "../Shared/Headers";
import {
  default as ClientDetailHeader1,
  ClientDetailHeader2,
  ClientDetailHeader3,
} from "./ClientDetailHeaders";
import {
  dummyClientViewData,
  dummyClaimSectionsData,
} from "../../graphql/dummyData";
import { default as Container } from "../Shared/Container";
import FlexTable from "../Shared/FlexTable";
import FlexTableRowButtons from "../Shared/FlexTableRowButtons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ClaimDetails = (props) => {
  const navigate = useNavigate();
  const clientViewData = dummyClientViewData;
  const data = dummyClaimSectionsData;

  function handleButtonClick (title) {
    if (title === "Medical Diagnosis") {
      navigate("/view-medical-diagnosis");
    } else if (title === "DD214") {
      navigate("/view-document-DD214");
    } else if (title === "CLJA Claims Form") {
      navigate("/view-document-CLJA");
    }
  }
  return (
    <div className="client-detail-page fullscreen">
      <Header>
        <Header1 />
      </Header>
      <ClientDetailHeader1 title={clientViewData.name} />
      <ClientDetailHeader2 data={clientViewData} />
      <ClientDetailHeader3 data={clientViewData} />
      <div className="client-detail">
        <Container>
          <div className="claim-sections">
            <h3>{`Claim Sections (${data.length})`}</h3>
            <FlexTable
              header1="Section title"
              col1mod="long"
              col2mod="short"
              header2="Status"
            >
              {data.map((section, index) => {
                return (
                  <FlexTableRowButtons
                    key={index}
                    col1={section.title}
                    col1mod="long"
                    col2={section.status}
                    col2mod={`short ${
                      section.status === "Complete" && "green"
                    }`}
                    title={section.title}
                    onButtonClick={handleButtonClick}
                  />
                );
              })}
            </FlexTable>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ClaimDetails;
