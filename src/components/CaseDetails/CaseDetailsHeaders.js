import { NavLink } from "react-router-dom";


export const CaseDetailsHeader1 = (props) => {
  return (
    <div className="case-details-header1">
      <div className="cd-header1-line1">
        <div className="cd-header1-line1-left flex">
          <h6 className="gray-link">Back</h6>
        </div>
        <div className="cd-header1-line1-middle flex">
          <h6 className="cd-title">{props.title}</h6>
        </div>
        <div className="cd-header1-line1-right flex">
          <h6 className="blue-link thin padding-adjust-right">Print</h6>
          <h6 className="blue-link thin padding-adjust-left">Edit Case</h6>
        </div>
      </div>
      <div className="cd-header1-line2">
        <p className="cd-header1-line2-text">ABC Law Firm vs Department of Justice</p>
      </div>
    </div>
  );
};

export const CaseDetailsHeader2 = (props) => {
  return <div className="case-details-header2">
    <div className="cd-header2-middle">
      <NavLink to="/case-details" className="cd-header2-tab">Case Details</NavLink>
      <NavLink to="/clients" className="cd-header2-tab">Clients</NavLink>
    </div>
  </div>;
};

export default CaseDetailsHeader1;
