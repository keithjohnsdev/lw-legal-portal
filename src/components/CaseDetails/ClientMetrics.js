import { Container2 } from "../Shared/Container";
import { dummyClientMetricsData } from "../../graphql/dummyData";
import GrayDropdown from "../Shared/GrayDropdown";
import BarGraphs from "./BarGraphs";
import {
  dummyMilitaryBranchData,
  dummyClientAgeRangeData,
  dummyGenderBreakdownData,
} from "../../graphql/dummyData";
const ClientMetrics = (props) => {
  const data = dummyClientMetricsData;

  function handleChange() {
    console.log("changed");
  }
  return (
    <div className="client-metrics">
      <Container2>
        <div className="client-metrics-heading">
          <h3>Client Metrics</h3>
          <GrayDropdown
            placeholder="All / Submitted Claims / No Claims"
            onChange={handleChange}
          />
        </div>
        <div className="margin-wrapper" style={{ marginBottom: "-30px" }}>
          <div className="more-stats flex" style={{ marginTop: "3px" }}>
            <div className="more-stats-div">
              <h4>TOTAL CLIENTS</h4>
              <h1>{data.totalClients.toLocaleString("EN-US")}</h1>
            </div>
            <div className="more-stats-div">
              <h4>
                ACTIVE -{" "}
                <span className="extra-line" style={{ color: "#3BC86B" }}>
                  67% LifeWallet Accounts
                </span>
              </h4>
              <h1>{data.activeClients.toLocaleString("EN-US")}</h1>
            </div>
            <div className="more-stats-div right">
              <h4>
                INACTIVE -{" "}
                <span className="extra-line" style={{ color: "#73787B" }}>
                  33% Pending LifeWallet Accounts
                </span>
              </h4>
              <h1>{data.inactiveClients.toLocaleString("EN-US")}</h1>
            </div>
          </div>
        </div>
        <div className="percentage-bars-section flex">
          <BarGraphs title="MILITARY BRANCH" data={dummyMilitaryBranchData} />
          <BarGraphs
            title="AGE RANGE OF CLIENTS"
            data={dummyClientAgeRangeData}
          />
          <BarGraphs
            title="GENDER BREAKDOWN"
            data={dummyGenderBreakdownData}
            mod="right"
          />
        </div>
        <div className="map-div">
          <img src={require("../../theme/assets/images/map.png")} alt="" />
        </div>
      </Container2>
    </div>
  );
};

export default ClientMetrics;
