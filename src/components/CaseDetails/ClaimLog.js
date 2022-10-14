import { Header, Header1 } from "../Shared/Headers";
import {
  default as ClientDetailHeader1,
  ClientDetailHeader2,
  ClientDetailHeader3,
} from "./ClientDetailHeaders";
import {
  dummyClientViewData,
  dummyClaimLogData
} from "../../graphql/dummyData";
import { default as Container } from "../Shared/Container";
import FlexTable from "../Shared/FlexTable";
import FlexTableRow from "../Shared/FlexTableRow";

const ClaimLog = (props) => {
  const data = dummyClaimLogData;
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
          <h3>{`Items (${data.length})`}</h3>
          <FlexTable header1="Title" col2mod="double-long" header2="By" header3="Date" col3mod="short">
            {data.map((claim, index) => {
              return (
                <FlexTableRow
                  key={index}
                  col1={claim.title}
                  col1mod={`${(claim.title === "Claim Submitted") && "blue"}`}
                  col2={claim.by}
                  col2mod="double-long"
                  col3={claim.date}
                  col3mod="short"
                />
              );
            })}
          </FlexTable>
        </div>
      </Container>
    </div>
  );
};

export default ClaimLog;
