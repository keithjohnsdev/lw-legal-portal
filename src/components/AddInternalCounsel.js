import FloatingInput from "./Shared/FloatingInput";
import DropdownInputSelectState from "./Shared/DropdownInputSelectState";
import { ModalHeader } from "./Shared/Header";
import { useState } from "react";
import Container from "./Shared/Container";

const AddInternalCounsel = (props) => {
  const [internalCounselData, setInternalCounselData] = useState({});

  function handlePhoneChange(key, value) {
    const input = value.replace(/\D/g, "").substring(0, 10); // First ten digits of input only
    setInternalCounselData((prev) => ({ ...prev, [key]: input }));
  }

  function handleZipChange(key, value) {
    const input = value.replace(/\D/g, "").substring(0, 5);
    setInternalCounselData((prev) => ({ ...prev, [key]: input }));
  }

  function handleChange(key, value) {
    setInternalCounselData((prev) => ({ ...prev, [key]: value }));
  }

  // Check relevant inputs for validity
  function checkValidity(type, value) {
    if (type === "email") {
      return !value || (value.includes("@") && value.includes("."));
    }
    if (type === "phone") {
      return !value || value.length === 10;
    }
    if (type === "zip") {
      return !value || value.length === 5;
    }
  }

  function handleSave() {
    props.handleSave(internalCounselData);
    props.closeModal();
  }

  return (
    <>
      <ModalHeader
        centerTitle="Add Internal Counsel"
        onClickRight={handleSave}
        onClickLeft={() => {console.log(props)}}
      />
      <section className="form-section modal-form">
        <Container>
          <h3>Internal Counsel Information</h3>
          <div className="form-row">
            <FloatingInput
              placeholder="First Name"
              onChange={(e) => handleChange("firstName", e.target.value)}
              value={internalCounselData.firstName}
              isValid={true}
            />
            <FloatingInput
              placeholder="Last Name"
              onChange={(e) => handleChange("lastName", e.target.value)}
              value={internalCounselData.lastName}
              isValid={true}
            />
            <FloatingInput
              placeholder="Email Address"
              onChange={(e) => handleChange("email", e.target.value)}
              value={internalCounselData.email}
              isValid={checkValidity("email", internalCounselData.email)}
              invalidMsg="Please provide a valid email."
            />
          </div>
          <div className="form-row">
            <FloatingInput
              placeholder="Phone"
              onChange={(e) => handlePhoneChange("phone", e.target.value)}
              value={internalCounselData.phone}
              isValid={checkValidity("phone", internalCounselData.phone)}
              invalidMsg="Please provide a valid phone number."
            />
            <FloatingInput
              placeholder="Street 1"
              onChange={(e) => handleChange("street1", e.target.value)}
              value={internalCounselData.street1}
              isValid={true}
            />
            <FloatingInput
              placeholder="Street 2"
              onChange={(e) => handleChange("street2", e.target.value)}
              value={internalCounselData.street2}
              isValid={true}
            />
          </div>
          <div className="form-row">
            <FloatingInput
              placeholder="City"
              onChange={(e) => handleChange("city", e.target.value)}
              value={internalCounselData.city}
              isValid={true}
            />
            <div className="floating-input-view">
              <DropdownInputSelectState
                label="State"
                placeholder="Select State"
                onChange={(e) => handleChange("state", e.target.value)}
                value={internalCounselData.state}
              />
            </div>
            <FloatingInput
              placeholder="Zip Code"
              onChange={(e) => handleZipChange("zip", e.target.value)}
              value={internalCounselData.zip}
              isValid={checkValidity("zip", internalCounselData.zip)}
              invalidMsg="Please provide a valid zip code."
            />
          </div>
        </Container>
      </section>
    </>
  );
};

export default AddInternalCounsel;
