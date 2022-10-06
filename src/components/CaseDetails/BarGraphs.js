import { BlueBorderButton } from "../Shared/Buttons";

const BarGraphs = (props) => {
  const data = props.data;
  return (
    <div className={`percentage-bars-div ${props.mod}`}>
      <h4>{props.title}</h4>
      {data.map((claim, index) => {
        return (
          <div className="bar-graph-div" key={index}>
            <div className="bar-graph-info flex">
              <p className="claim-name">{claim.name}</p>
              <p className="claim-numbers">{`${claim.num} - ${claim.percentage}%`}</p>
            </div>
            <div className="bar-graph-bg">
              <div className="bar-graph" style={{width: `${claim.percentage}%`, backgroundColor: index === 0 ? "#1B93C5" : "#CFD4D7"}}></div>
            </div>
          </div>
        );
      })}
    <BlueBorderButton>View All</BlueBorderButton>
    </div>
  );
};

export default BarGraphs;
