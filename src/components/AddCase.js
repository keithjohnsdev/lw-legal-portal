import FloatingInput from "./Shared/FloatingInput";
import DropdownInput from "./Shared/DropdownInput";
import DropdownInputRight from "./Shared/DropdownInputRight";
import { Header, Header2 } from "./Shared/Header";
import { useState } from "react";
import Container from "./Shared/Container";
import { Link } from "react-router-dom";

const AddCaseForm = (props) => {
  const [caseInfoData, setCaseInfoData] = useState({});
  const [internalCounsel, setInternalCounsel] = useState(null);

  function handleChange(key, value) {
    setCaseInfoData((prev) => ({ ...prev, [key]: value }));
    console.log(caseInfoData);
  }

  return (
    <>
      <Header>
        <Header2 />
      </Header>
      <section className="add-case-form">
        <form>
          <div className="case-info">
            <Container>
              <h3 className="section-title">Case Information</h3>
              <div className="form-row">
                <FloatingInput
                  placeholder="Enter Case Title"
                  onChange={(e) => handleChange("caseTitle", e.target.value)}
                  value={caseInfoData.caseTitle}
                />
                <FloatingInput
                  placeholder="Enter Defendant Name"
                  onChange={(e) => handleChange("defendant", e.target.value)}
                  value={caseInfoData.defendant}
                />
                <DropdownInputRight
                  label="Select Lawsuit Type"
                  placeholder="Select Value"
                  onChange={(e) => handleChange("lawsuitType", e.target.value)}
                  value={caseInfoData.lawsuitType}
                  options={[
                    { value: "Type 1", label: "Type 1" },
                    { value: "Type 2", label: "Type 2" },
                  ]}
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
                />
                <FloatingInput
                  placeholder="Enter Judge Name"
                  onChange={(e) => handleChange("judge", e.target.value)}
                  value={caseInfoData.judge}
                />
                <DropdownInputRight
                  label="Select Circuit"
                  placeholder="Select Value"
                  onChange={(e) => handleChange("circuit", e.target.value)}
                  value={caseInfoData.circuit}
                  options={[
                    { value: "Type 1", label: "Type 1" },
                    { value: "Type 2", label: "Type 2" },
                  ]}
                />
              </div>
              <div className="form-row">
                <FloatingInput
                  placeholder="Enter Case File Email"
                  onChange={(e) => handleChange("caseFileEmail", e.target.value)}
                  value={caseInfoData.caseFileEmail}
                />
              </div>
            </Container>
          </div>
        </form>
      </section>
      <section className="general-external-form">
        <Container>
          <div className="section-title">
            <h3>Internal Counsel</h3>
            <Link to="/" className="external-form-link">
              Select Internal Counsel
            </Link>
          </div>
          {internalCounsel ? "" : <p className="no-entry">No opposing counsel members currently listed.</p>}
        </Container>
      </section>
      <section className="general-external-form">
        <Container>
          <div className="section-title">
            <h3>Internal Counsel</h3>
            <Link to="/" className="external-form-link">
              Select Internal Counsel
            </Link>
          </div>
          {internalCounsel ? "" : <p className="no-entry">No opposing counsel members currently listed.</p>}
        </Container>
      </section>
    </>
  );
};

export default AddCaseForm;
