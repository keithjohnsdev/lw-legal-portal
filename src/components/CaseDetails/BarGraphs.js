import { dummyBarGraphsData } from "../../graphql/dummyData";

const BarGraphs = (props) => {
  return (
    <div className="percentage-bars-div">
      <h4>{props.title}</h4>
      {dummyBarGraphsData.commonClaimsSubmitted.map((claim, index) => {
        return (
          <div className="bar-graph-div flex" key={index}>
            <p className="claim-name">{claim.name}</p>
            <p className="claim-numbers">{`${claim.numClaims} - ${claim.percentage}%`}</p>
          </div>
        );
      })}
    </div>
  );
};

export default BarGraphs;
