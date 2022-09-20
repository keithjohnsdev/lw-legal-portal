import FloatingInput from "./Shared/FloatingInput";
import DropdownInput from "./Shared/DropdownInput";
import { Header, Header2 } from "./Shared/Header";
import { useEffect, useState } from "react";
import Container from "./Shared/Container";
import { Link, useNavigate } from "react-router-dom";
import OpposingCounselTable from "./OpposingCounselTable";
import moment from "moment";
import DateDropdownInput from "./Shared/DateDropdownInput";

const AddCase = (props) => {
  const [caseInfoData, setCaseInfoData] = useState({});
  const [formFilled, setFormFilled] = useState(true);
  const [internalCounsel, setInternalCounsel] = useState(null);
  const [opposingCounsel, setOpposingCounsel] = useState(null);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [procedureCodes, setProcedureCodes] = useState(null);
  const [diagnosisCodes, setDiagnosisCodes] = useState(null);
  const [NDCCodes, setNDCCodes] = useState(null);
  const navigate = useNavigate();

  function handleChange(key, value) {
    setCaseInfoData((prev) => ({ ...prev, [key]: value }));
    // console.log(caseInfoData);
  }

  // Check relevant inputs for validity
  function checkValidity(type, value) {
    if (type === "text") {
      if (!formFilled) {
        return value ? true : false;
      }
    } else if (type === "email") {
      if (!formFilled) {
        return (
          (value ? true : false) && value.includes("@") && value.includes(".")
        );
      }
      return !value || (value.includes("@") && value.includes("."));
    } else if (type === "date") {
      if (!formFilled) {
        return (value ? true : false) && startDate.isBefore(endDate);
      } else {
        return startDate && endDate
          ? startDate.isValid() &&
              endDate.isValid() &&
              startDate.isBefore(endDate)
          : true;
      }
    } else return false;
  }

  useEffect(() => {
    if (
      caseInfoData.caseTitle &&
      caseInfoData.defendant &&
      caseInfoData.lawsuitType &&
      caseInfoData.jurisdiction &&
      caseInfoData.judge &&
      caseInfoData.circuit &&
      caseInfoData.caseFileEmail &&
      caseInfoData.docStartMonth &&
      caseInfoData.docStartDay &&
      caseInfoData.docStartYear &&
      caseInfoData.docEndMonth &&
      caseInfoData.docEndDay &&
      caseInfoData.docEndYear
      // checkValidity("email", caseInfoData.caseFileEmail) &&
      // checkValidity("date", endDate)
    ) {
      console.log("form filled use effect triggered");
      console.log(
        caseInfoData.caseTitle &&
          caseInfoData.defendant &&
          caseInfoData.lawsuitType &&
          caseInfoData.jurisdiction &&
          caseInfoData.judge &&
          caseInfoData.circuit &&
          caseInfoData.caseFileEmail &&
          caseInfoData.docStartMonth &&
          caseInfoData.docStartDay &&
          caseInfoData.docStartYear &&
          caseInfoData.docEndMonth &&
          caseInfoData.docEndDay &&
          caseInfoData.docEndYear
      );
      setFormFilled(true);
    }
  }, [caseInfoData]);

  function handleSave() {
    if (
      caseInfoData.caseTitle &&
      caseInfoData.defendant &&
      caseInfoData.lawsuitType &&
      caseInfoData.jurisdiction &&
      caseInfoData.judge &&
      caseInfoData.circuit &&
      caseInfoData.caseFileEmail &&
      caseInfoData.docStartMonth &&
      caseInfoData.docStartDay &&
      caseInfoData.docStartYear &&
      caseInfoData.docEndMonth &&
      caseInfoData.docEndDay &&
      caseInfoData.docEndYear &&
      checkValidity("email", caseInfoData.caseFileEmail) &&
      checkValidity("date", endDate)
    ) {
      console.log(caseInfoData);
      console.log("save successful");
      // navigate("/");
    } else {
      setFormFilled(false);
    }
  }

  return (
    <>
      <Header>
        <Header2
          centerTitle="Add New Case"
          leftLinkTo="/"
          onClick={handleSave}
        />
        {!formFilled && (
          <p className="form-incomplete-msg">
            Please fill out the complete form.
          </p>
        )}
      </Header>
      <section className="form-section">
        <div className="case-info">
          <Container>
            <h3>Case Information</h3>
            <div className="form-row">
              <FloatingInput
                placeholder="Enter Case Title"
                onChange={(e) => handleChange("caseTitle", e.target.value)}
                value={caseInfoData.caseTitle || ""}
                isValid={checkValidity("text", caseInfoData.caseTitle)}
              />
              <FloatingInput
                placeholder="Enter Defendant Name"
                onChange={(e) => handleChange("defendant", e.target.value)}
                value={caseInfoData.defendant || ""}
                isValid={checkValidity("text", caseInfoData.defendant)}
              />
              <DropdownInput
                label="Select Lawsuit Type"
                placeholder="Select Value"
                onChange={(e) => handleChange("lawsuitType", e.target.value)}
                value={caseInfoData.lawsuitType}
                options={[
                  { value: "Type 1", label: "Type 1" },
                  { value: "Type 2", label: "Type 2" },
                ]}
                isValid={checkValidity("text", caseInfoData.lawsuitType)}
                modifier="right"
              />
            </div>
            <div className="form-row">
              <DropdownInput
                label="Select Jurisdiction"
                placeholder="Select Value"
                onChange={(e) => handleChange("jurisdiction", e.target.value)}
                value={caseInfoData.jurisdiction}
                options={[
                  { value: "Type 1", label: "Type 1" },
                  { value: "Type 2", label: "Type 2" },
                ]}
                isValid={checkValidity("text", caseInfoData.jurisdiction)}
              />
              <FloatingInput
                placeholder="Enter Judge Name"
                onChange={(e) => handleChange("judge", e.target.value)}
                value={caseInfoData.judge || ""}
                isValid={checkValidity("text", caseInfoData.judge)}
              />
              <DropdownInput
                label="Select Circuit"
                placeholder="Select Value"
                onChange={(e) => handleChange("circuit", e.target.value)}
                value={caseInfoData.circuit}
                options={[
                  { value: "Type 1", label: "Type 1" },
                  { value: "Type 2", label: "Type 2" },
                ]}
                isValid={checkValidity("text", caseInfoData.circuit)}
                modifier="right"
              />
            </div>
            <div className="form-row">
              <FloatingInput
                placeholder="Enter Case File Email"
                onChange={(e) => handleChange("caseFileEmail", e.target.value)}
                value={caseInfoData.caseFileEmail || ""}
                isValid={checkValidity("email", caseInfoData.caseFileEmail)}
                invalidMsg="Please provide a valid email."
              />
            </div>
          </Container>
        </div>
      </section>
      <section id="internal-counsel" className="general-external-form">
        <Container>
          <div className="section-title">
            <h3>Internal Counsel</h3>
            <Link to="/add-internal-counsel" className="external-form-link">
              Select Internal Counsel
            </Link>
          </div>
          {internalCounsel ? (
            ""
          ) : (
            <p className="no-entry">
              No internal counsel members currently listed.
            </p>
          )}
        </Container>
      </section>
      <section id="opposing-counsel" className="general-external-form">
        <Container>
          <div className="section-title">
            <h3>Opposing Counsel</h3>
            <Link to="/add-opposing-counsel" className="external-form-link">
              + Add Opposing Counsel
            </Link>
          </div>
          {opposingCounsel ? (
            <OpposingCounselTable />
          ) : (
            <p className="no-entry">
              No opposing counsel members currently listed.
            </p>
          )}
        </Container>
      </section>
      <section id="document-dates" className="general-external-form">
        <Container>
          <h3 style={{ padding: "5px 0 33px 0" }}>Document Dates</h3>
          <div className="date-dropdown-div">
            <DateDropdownInput
              label="Start Date"
              handleChange={d => handleChange("startDate", d)}
              isValid={checkValidity("date", startDate)}
            />
            <div style={{ width: "70px" }}></div>
            <DateDropdownInput
              label="End Date"
              handleChange={d => handleChange("endDate", d)}
              isValid={checkValidity("date", endDate)}
            />
            {checkValidity("date", endDate) !== true && (
              <p className="date-invalid-msg">
                {startDate && endDate && !startDate.isBefore(endDate)
                  ? "End date must be after start date."
                  : ""}
              </p>
            )}
          </div>
        </Container>
      </section>
      <section id="procedure-codes" className="general-external-form">
        <Container>
          <div className="section-title">
            <h3>Procedure Codes</h3>
            <Link to="/" className="external-form-link">
              + Add Procedure Code(s)
            </Link>
          </div>
          {procedureCodes ? (
            ""
          ) : (
            <p className="no-entry">No procedure codes currently listed.</p>
          )}
        </Container>
      </section>
      <section id="diagnosis-codes" className="general-external-form">
        <Container>
          <div className="section-title">
            <h3>Diagnosis Codes</h3>
            <Link to="/" className="external-form-link">
              + Add Diagnosis Code(s)
            </Link>
          </div>
          {diagnosisCodes ? (
            ""
          ) : (
            <p className="no-entry">No diagnosis codes currently listed.</p>
          )}
        </Container>
      </section>
      <section id="NDC-codes" className="general-external-form">
        <Container>
          <div className="section-title">
            <h3>NDC Codes</h3>
            <Link to="/" className="external-form-link">
              + Add NDC Code(s)
            </Link>
          </div>
          {NDCCodes ? (
            ""
          ) : (
            <p className="no-entry">No NDC codes currently listed.</p>
          )}
        </Container>
      </section>
    </>
  );
};

export default AddCase;
