import FloatingInput from "./Shared/FloatingInput";
import DropdownInput from "./Shared/DropdownInput";
import { Header, Header2 } from "./Shared/Header";
import { useState } from "react";
import Container from "./Shared/Container";

const AddCaseForm = (props) => {
  const [caseInfoData, setCaseInfoData] = useState({});

  function handleChange(key, value) {
    setCaseInfoData((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <>
      <Header>
        <Header2 />
      </Header>
      <form className="add-case-form">
        <div className="case-info">
          <Container>
            <h3>Case Information</h3>
            <div className="form-row">
              <FloatingInput
                placeholder="Enter Case Title"
                onChange={(e) => handleChange("caseTitle", e.target.value)}
                value={caseInfoData.caseTitle}
              />
              <FloatingInput
                placeholder="Enter Defendant Name"
                onChange={handleChange}
                id="defendant"
              />
              <DropdownInput
                label="Select Lawsuit Type"
                placeholder="Select Value"
                onChange={handleChange}
                id="lawsuitType"
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
                onChange={handleChange}
                id="jurisdiction"
                options={[
                  { value: "Type 1", label: "Type 1" },
                  { value: "Type 2", label: "Type 2" },
                ]}
              />
              <FloatingInput
                placeholder="Enter Judge Name"
                onChange={handleChange}
                id="judge"
              />
              <DropdownInput
                label="Select Circuit"
                placeholder="Select Value"
                onChange={handleChange}
                id="circuit"
                options={[
                  { value: "Type 1", label: "Type 1" },
                  { value: "Type 2", label: "Type 2" },
                ]}
              />
            </div>
            <div className="form-row">
              <FloatingInput
                placeholder="Enter Case File Email"
                onChange={handleChange}
                id="caseFileEmail"
              />
            </div>
          </Container>
        </div>
      </form>
    </>
  );
};

export default AddCaseForm;
