import FloatingInput from "./Shared/FloatingInput";
import DropdownInputSelectState from "./Shared/DropdownInputSelectState";
import { Header, Header2 } from "./Shared/Header";
import { useState } from "react";
import Container from "./Shared/Container";

const AddOpposingCounsel = (props) => {
  const [opposingCounselData, setOpposingCounselData] = useState({});

  function handlePhoneChange(key, value) {
    const input = value.replace(/\D/g,'').substring(0,10); // First ten digits of input only
    // const areaCode = input.substring(0,3);
    // const middle = input.substring(3,6);
    // const last = input.substring(6,10);

    // if(input.length > 6){value = `(${areaCode}) ${middle} - ${last}`;}
    // else if(input.length > 3){value = `(${areaCode}) ${middle}`;}
    // else if(input.length > 0){value = `(${areaCode}`;}
    setOpposingCounselData((prev) => ({ ...prev, [key]: input }));
  }

  function handleChange(key, value) {
    setOpposingCounselData((prev) => ({ ...prev, [key]: value }));
    console.log(opposingCounselData);
  }

  return (
    <>
      <Header>
        <Header2
          centerTitle="Add Opposing Counsel"
          leftLinkTo="/add-new-case"
        />
      </Header>
      <section className="form-section">
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
            />
          </div>
          <div className="form-row">
            <FloatingInput
              placeholder="Phone"
              onChange={(e) => handlePhoneChange("phone", e.target.value)}
              value={opposingCounselData.phone || ""}
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
              onChange={(e) => handleChange("zip", e.target.value)}
              value={opposingCounselData.zip || ""}
            />
          </div>
        </Container>
      </section>
    </>
  );
};

export default AddOpposingCounsel;
