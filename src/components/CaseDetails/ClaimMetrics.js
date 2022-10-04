import { Container2 } from "../Shared/Container";
import { VictoryPie } from "victory";
import { dummyClaimMetricsData } from "../../graphql/dummyData";

const ClaimMetrics = (props) => {
    const data = dummyClaimMetricsData;
    const donutDataArray = [];
    donutDataArray.push(data.approvedClaims, data.deniedClaims, data.pendingClaims6mo);
  return (
    <div className="claim-metrics">
      <Container2>
        <h3>Claim Metrics</h3>
        <div className="claim-status-breakdown">
          <h4>CLAIM STATUS BREAKDOWN</h4>
          <div className="flex">
            <div className="donut-chart">
              <VictoryPie 
              data={donutDataArray}/>
            </div>
          </div>
        </div>
      </Container2>
    </div>
  );
};

export default ClaimMetrics;
