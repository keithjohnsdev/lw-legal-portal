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

const ClaimDetails = (props) => {
  const data = dummyClaimSectionsData;
  return (
    <div className="client-detail-page fullscreen">
      <Header>
        <Header1 />
      </Header>
      <ClientDetailHeader1 title={dummyClientViewData.name} />
      <ClientDetailHeader2 data={dummyClientViewData} />
      <ClientDetailHeader3 data={dummyClientViewData} />
      <Container>
        <div className="claim-sections">
          <h3>{`Claim Sections (${data.length})`}</h3>
          <FlexTable header1="Section title" col1mod="long" col2mod="short" header2="Status">
            {data.map((section, index) => {
              return (
                <FlexTableRowButtons
                  key={index}
                  col1={section.title}
                  col1mod="long"
                  col2={section.status}
                  col2mod={`short ${(section.status === "Complete") && "green"}`}
                />
              );
            })}
          </FlexTable>
        </div>
      </Container>
    </div>
  );
};

export default ClaimDetails;
