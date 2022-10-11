import { Header, Header1 } from "../Shared/Headers";
import { CaseDetailsHeader1, CaseDetailsHeader2 } from "./CaseDetailsHeaders";
import { dummyCasesData } from "../../graphql/dummyData";
import ClientTable from "./ClientTable";
import ClientTableToolbar from "./ClientTableToolbar";
import {
  BlueButtonSmall,
  BlueBorderButton,
  RedBorderButton,
} from "../Shared/Buttons";
import { useState } from "react";

const Clients = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheck (event) {
    setIsChecked(event.target.checked);
    console.log(isChecked);
  }

  return (
    <div className="case-details-page fullscreen">
      <Header>
        <Header1 />
      </Header>
      <CaseDetailsHeader1 title={dummyCasesData[0].title} />
      <CaseDetailsHeader2 />
      <ClientTableToolbar />
      <div className="client-actions-toolbar">
        <div className="checkbox-wrapper">
          <input type="checkbox" onChange={handleCheck}/>
        </div>
        <div className="button-wrapper">
          <BlueBorderButton style={{backgroundColor: isChecked && "red !important"}}>Message Group</BlueBorderButton>
        </div>
        <div className="button-wrapper">
          <BlueBorderButton>Export to Excel</BlueBorderButton>
        </div>
        <div className="button-wrapper">
          <RedBorderButton>Appeal Rejection</RedBorderButton>
        </div>
        <div className="button-wrapper">
          <BlueButtonSmall>Submit Claims</BlueButtonSmall>
        </div>
        {!isChecked && <div className="button-inactive-overlay" />}
      </div>

      <ClientTable />
    </div>
  );
};

export default Clients;
