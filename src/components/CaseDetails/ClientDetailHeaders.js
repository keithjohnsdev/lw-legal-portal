import { Container2 } from "../Shared/Container";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const ClientDetailHeader1 = (props) => {
  return (
    <div className="client-detail-header1">
      <div className="cd-header1-line1">
        <div className="cd-header1-line1-left flex">
          <h6 className="gray-link">Back</h6>
        </div>
        <div className="client-header1-line1-middle flex">
          <h6 className="cd-title">{props.title}</h6>
        </div>
        <div className="cd-header1-line1-right flex">
          <h6 className="blue-link thin padding-adjust-right">
            Export to Excel
          </h6>
          <h6 className="blue-link thin padding-adjust-left padding-adjust-right">
            Message Client
          </h6>
          <h6 className="blue-link thin padding-adjust-left">Submit Claim</h6>
        </div>
      </div>
      <div className="cd-header1-line2">
        <p className="cd-header1-line2-text">Claim Status: Not Submitted</p>
      </div>
    </div>
  );
};

export const ClientDetailHeader2 = (props) => {
  const data = props.data;
  const [collapsed, setCollapsed] = useState(false);

  function toggleCollapse() {
    setCollapsed(!collapsed);
  }

  return (
    <div className={`client-detail-header2 ${collapsed && "collapsed"}`}>
      <Container2>
        <div className={`main-info ${collapsed && "collapsed"}`}>
          <div className="client-img">
            <img src={require("../../theme/assets/images/edwin.png")} alt="" />
          </div>
          <div className={`main-info-middle ${collapsed && "collapsed"}`}>
            <div className="top">
              <h1>{data.name}</h1>
              <div
                className={`arrow-div ${collapsed && "rotate"}`}
                onClick={toggleCollapse}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.41 15.4099L12 10.8299L16.59 15.4099L18 13.9999L12 7.99991L6 13.9999L7.41 15.4099Z"
                    fill="#313537"
                  />
                </svg>
              </div>
            </div>
            <div className="bottom">
              <div className="info-div left">
                <p>{`${data.gender} | ${data.age} yrs old`}</p>
                <p>{`D.O.B: ${data.dobStr}`}</p>
              </div>
              <div className="info-div">
                <p>{`SSN No: ${data.SSN}`}</p>
                <p>{`VA ID No: ${data.VAID}`}</p>
              </div>
              <div className="info-div">
                <p>{`${data.address1}`}</p>
                <p>{`${data.address2}`}</p>
              </div>
              <div className="info-div right">
                <p>{`${data.phone}`}</p>
                <p
                  className="email"
                  onClick={() =>
                    (window.location.href = `mailto:${data.email}`)
                  }
                >{`${data.email}`}</p>
              </div>
            </div>
          </div>
        </div>
      </Container2>
    </div>
  );
};

export const ClientDetailHeader3 = (props) => {
  return (
    <div className="case-details-header2">
      <div className="cd-header2-middle">
        <NavLink to="/client-detail" className="cd-header2-tab">
          Client Profile
        </NavLink>
        <NavLink to="/claim-details" className="cd-header2-tab">
          Claim Details
        </NavLink>
        <NavLink to="/claim-log" className="cd-header2-tab">
          Claim Log
        </NavLink>
        <NavLink to="/data-to-share" className="cd-header2-tab">
          Data to Share
        </NavLink>
      </div>
    </div>
  );
};

export default ClientDetailHeader1;
