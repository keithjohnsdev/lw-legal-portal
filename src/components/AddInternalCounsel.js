import FloatingInput from "./Shared/FloatingInput";
import DropdownInputSelectState from "./Shared/DropdownInputSelectState";
import { Header, Header2 } from "./Shared/Header";
import { useState } from "react";
import Container from "./Shared/Container";

const AddInternalCounsel = (props) => {
  const [internalCounselData, setInternalCounselData] = useState({});

  function handlePhoneChange(key, value) {
    const input = value.replace(/\D/g,'').substring(0,10); // First ten digits of input only
    // const areaCode = input.substring(0,3);
    // const middle = input.substring(3,6);
    // const last = input.substring(6,10);

    // if(input.length > 6){value = `(${areaCode}) ${middle} - ${last}`;}
    // else if(input.length > 3){value = `(${areaCode}) ${middle}`;}
    // else if(input.length > 0){value = `(${areaCode}`;}
    setInternalCounselData((prev) => ({ ...prev, [key]: input }));
  }

  function handleChange(key, value) {
    setInternalCounselData((prev) => ({ ...prev, [key]: value }));
    console.log(internalCounselData);
  }

  return (
    <>
      <Header>
        <Header2
          centerTitle="Add Internal Counsel"
          leftLinkTo="/add-new-case"
        />
      </Header>
      <section className="form-section">
        <Container>
          <h3>Internal Counsel Information</h3>
          <div className="form-row">
            <FloatingInput
              placeholder="First Name"
              onChange={(e) => handleChange("firstName", e.target.value)}
              value={internalCounselData.firstName || ""}
            />
            <FloatingInput
              placeholder="Last Name"
              onChange={(e) => handleChange("lastName", e.target.value)}
              value={internalCounselData.lastName || ""}
            />
            <FloatingInput
              placeholder="Email Address"
              onChange={(e) => handleChange("email", e.target.value)}
              value={internalCounselData.email || ""}
            />
          </div>
          <div className="form-row">
            <FloatingInput
              placeholder="Phone"
              onChange={(e) => handlePhoneChange("phone", e.target.value)}
              value={internalCounselData.phone || ""}
            />
            <FloatingInput
              placeholder="Street 1"
              onChange={(e) => handleChange("street1", e.target.value)}
              value={internalCounselData.street1 || ""}
            />
            <FloatingInput
              placeholder="Street 2"
              onChange={(e) => handleChange("street2", e.target.value)}
              value={internalCounselData.street2 || ""}
            />
          </div>
          <div className="form-row">
            <FloatingInput
              placeholder="City"
              onChange={(e) => handleChange("city", e.target.value)}
              value={internalCounselData.city || ""}
            />
            <div className="floating-input-view">
            <DropdownInputSelectState
              label="State"
              placeholder="Select State"
              onChange={(e) => handleChange("state", e.target.value)}
              value={internalCounselData.state || "Select State"}
            />
            </div>
            <FloatingInput
              placeholder="Zip Code"
              onChange={(e) => handleChange("zip", e.target.value)}
              value={internalCounselData.zip || ""}
            />
          </div>
        </Container>
      </section>
    </>
  );
};

export default AddInternalCounsel;
