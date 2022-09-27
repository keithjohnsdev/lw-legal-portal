import { dummyCasesData } from "../../graphql/dummyData";

const CasesTableTitleColumn = (props) => {

  return (
    <div className="cases-title-col">
      <div className="title-header">Title</div>
      <div className="titles-div">
        {dummyCasesData.map((c, index) => {
          return (
            <div className="title-row" key={index}>
              {c.title}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CasesTableTitleColumn;
