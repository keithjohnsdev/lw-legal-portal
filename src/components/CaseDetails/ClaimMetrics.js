import { Container2 } from "../Shared/Container";
import BarGraphs from "./BarGraphs";
import { VictoryPie, VictoryContainer } from "victory";
import { dummyClaimMetricsData } from "../../graphql/dummyData";
import { useEffect, useState } from "react";
const defaultDonutData = [0, 0, 0];

const ClaimMetrics = (props) => {
    const data = dummyClaimMetricsData;
    const [donutData, setDonutData] = useState(defaultDonutData)
    const [endAngle, setEndAngle] = useState(0);
    
    useEffect(() => {
        setDonutData([data.approvedClaims, data.deniedClaims, data.pendingClaims6mo]);
        setEndAngle(360);
    }, []);


  return (
    <div className="claim-metrics">
      <Container2>
        <h3>Claim Metrics</h3>
        <div className="claim-status-breakdown">
          <h4>CLAIM STATUS BREAKDOWN</h4>
          <div className="flex">
            <div className="donut-chart">
              <VictoryPie 
              data={donutData}
              endAngle={endAngle}
              colorScale={["#3BC86B", "#FB3156", "#E8ECEE"]}
              innerRadius={110}
              padAngle={2}
              width={380}
              labels={["", "", ""]}
              containerComponent={<VictoryContainer responsive={false}/>}
              animate={{onLoad: { delay: 0, duration: 1 }, duration: 1000}}/>
              <div className="donut-hole-text">
                <p>TOTAL CLAIMS SUBMITTED</p>
                <h2>{data.totalClaims.toLocaleString("EN-US")}</h2>
              </div>
            </div>
            <div className="donut-stats">
              <div className="donut-stats-row">
                <div>
                <h5 style={{color: "#3BC86B", fontSize: "18px", fontWeight: "600", marginBottom: "2px"}}>Approved</h5>
                <p style={{color: "#313537", fontSize: "14px", fontWeight: "600"}}>{`${((data.approvedClaims / data.totalClaims) * 100).toFixed(1)}%`}</p>
                </div>
                <h2>{data.approvedClaims.toLocaleString("EN-US")}</h2>
              </div>
              <div className="donut-stats-row">
                <div>
                <h5 style={{color: "#FB3156", fontSize: "18px", fontWeight: "600", marginBottom: "2px"}}>Denied</h5>
                <p style={{color: "#313537", fontSize: "14px", fontWeight: "600"}}>{`${((data.deniedClaims / data.totalClaims) * 100).toFixed(1)}%`}</p>
                </div>
                <h2>{data.deniedClaims.toLocaleString("EN-US")}</h2>
              </div>
              <div className="donut-stats-row">
                <div>
                <h5 style={{color: "#73787B", fontSize: "18px", fontWeight: "600", marginBottom: "2px"}}>Pending Over 6 Months</h5>
                <p style={{color: "#313537", fontSize: "14px", fontWeight: "600"}}>{`${((data.pendingClaims6mo / data.totalClaims) * 100).toFixed(1)}%`}</p>
                </div>
                <h2>{data.pendingClaims6mo.toLocaleString("EN-US")}</h2>
              </div>
            </div>
          </div>
          <div className="more-stats flex">
            <div className="more-stats-div">
              <h4>TOTAL LAWSUITS FILED</h4>
              <h1>{data.totalLawsuitsFiled.toLocaleString("EN-US")}</h1>
            </div>
            <div className="more-stats-div">
              <h4>MEDICAL RECORDS MISSING</h4>
              <h1>{data.medRecordsMissing.toLocaleString("EN-US")}</h1>
            </div>
            <div className="more-stats-div">
              <h4>MILITARY SERVICE RECORDS MISSING</h4>
              <h1>{data.milRecordsMissing.toLocaleString("EN-US")}</h1>
            </div>
          </div>
          <div className="more-stats flex">
          <div className="more-stats-div">
              <h4>TOTAL DAMAGES</h4>
              <h1>{`$${data.totalDamagesBil.toLocaleString("EN-US")} `}<span style={{fontSize: "22px"}}>BILLION</span></h1>
            </div>
          </div>
          <div className="percentage-bars-section flex">
            <BarGraphs title="MOST COMMON CLAIMS SUBMITTED"/>
          </div>
        </div>
      </Container2>
    </div>
  );
};

export default ClaimMetrics;
