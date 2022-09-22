import FloatingInput from "./Shared/FloatingInput";
import DropdownInputSelectState from "./Shared/DropdownInputSelectState";
import { ModalHeader } from "./Shared/Header";
import { useState } from "react";
import Container from "./Shared/Container";

const AddOpposingCounsel = (props) => {
  const [opposingCounselData, setOpposingCounselData] = useState({});

  function handlePhoneChange(key, value) {
    const input = value.replace(/\D/g,'').substring(0,10); // First ten digits of input only
    setOpposingCounselData((prev) => ({ ...prev, [key]: input }));
  }

  function handleZipChange (key, value) {
    const input = value.replace(/\D/g,'').substring(0,5);
    setOpposingCounselData((prev) => ({ ...prev, [key]: input }));
  }

  function handleChange(key, value) {
    setOpposingCounselData((prev) => ({ ...prev, [key]: value }));
  }

  function checkValidity(type, value) {
    if (type === "email") {
      return !value || (value.includes("@") && value.includes("."));
    }
    if (type === "phone") {
      return !value || (value.length === 10);
    }
    if (type === "zip") {
      return !value || (value.length === 5);
    }
  }

  function handleSave () {
    console.log(opposingCounselData);
    props.closeModal();
  }

  return (
    <>
      <ModalHeader
        centerTitle="Add Opposing Counsel"
        onClickRight={handleSave}
        onClickLeft={() => {console.log(props)}}
      />
      <section className="form-section modal-form">
        <Container>
          <h3>Opposing Counsel Information</h3>
          <div className="form-row">
            <FloatingInput
              placeholder="First Name"
              onChange={(e) => handleChange("firstName", e.target.value)}
              value={opposingCounselData.firstName || ""}
            />
            <FloatingInput
              placeholder="Last Name"
              onChange={(e) => handleChange("lastName", e.target.value)}
              value={opposingCounselData.lastName || ""}
            />
            <FloatingInput
              placeholder="Email Address"
              onChange={(e) => handleChange("email", e.target.value)}
              value={opposingCounselData.email || ""}
              isValid={checkValidity("email", opposingCounselData.email)}
              invalidMsg="Please provide a valid email."
            />
          </div>
          <div className="form-row">
            <FloatingInput
              placeholder="Phone"
              onChange={(e) => handlePhoneChange("phone", e.target.value)}
              value={opposingCounselData.phone || ""}
              isValid={checkValidity("phone", opposingCounselData.phone)}
              invalidMsg="Please provide a valid phone number."
            />
            <FloatingInput
              placeholder="Street 1"
              onChange={(e) => handleChange("street1", e.target.value)}
              value={opposingCounselData.street1 || ""}
            />
            <FloatingInput
              placeholder="Street 2"
              onChange={(e) => handleChange("street2", e.target.value)}
              value={opposingCounselData.street2 || ""}
            />
          </div>
          <div className="form-row">
            <FloatingInput
              placeholder="City"
              onChange={(e) => handleChange("city", e.target.value)}
              value={opposingCounselData.city || ""}
            />
            <div className="floating-input-view">
            <DropdownInputSelectState
              label="State"
              placeholder="Select State"
              onChange={(e) => handleChange("state", e.target.value)}
              value={opposingCounselData.state || "Select State"}
            />
            </div>
            <FloatingInput
              placeholder="Zip Code"
              onChange={(e) => handleZipChange("zip", e.target.value)}
              value={opposingCounselData.zip || ""}
            />
          </div>
        </Container>
      </section>
    </>
  );
};

export default AddOpposingCounsel;
