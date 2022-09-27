import { dummyCasesData } from "../../graphql/dummyData";

const CasesTableGrid = (props) => {
  const titleArray = ["Defendant", "Lawsuit Type", "Jurisdiction", "Judge", "Court", "Docket No.", "Opposing Counsel", "Case Status"];

  return (
    <div className="cases-grid">
      <div className="header-row-div">
        <div className="header-row flex">
          {titleArray.map((title, index) => {
            return (<div className="header-col" key={index}>
              <h5>{title}</h5>
              <div className="vertical-dots-div">
                <svg
                  width="4"
                  height="12"
                  viewBox="0 0 4 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.00016 8.66667C1.26683 8.66667 0.66683 9.26667 0.666829 10C0.666829 10.7333 1.26683 11.3333 2.00016 11.3333C2.7335 11.3333 3.3335 10.7333 3.3335 10C3.3335 9.26667 2.7335 8.66667 2.00016 8.66667ZM2.00016 7.33333C2.7335 7.33333 3.3335 6.73333 3.3335 6C3.3335 5.26667 2.7335 4.66667 2.00016 4.66667C1.26683 4.66667 0.66683 5.26666 0.66683 6C0.66683 6.73333 1.26683 7.33333 2.00016 7.33333ZM2.00016 3.33333C2.7335 3.33333 3.3335 2.73333 3.3335 2C3.3335 1.26667 2.7335 0.666665 2.00016 0.666665C1.26683 0.666665 0.66683 1.26666 0.66683 2C0.66683 2.73333 1.26683 3.33333 2.00016 3.33333Z"
                    fill="#73787B"
                  />
                </svg>
              </div>
            </div>);
          })}
        </div>
      </div>
    </div>
  );
};

export default CasesTableGrid;
