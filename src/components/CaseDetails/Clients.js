import { Header, Header1 } from "../Shared/Headers";
import { CaseDetailsHeader1, CaseDetailsHeader2 } from "./CaseDetailsHeaders";
import { dummyCasesData, dummyClientsData } from "../../graphql/dummyData";
import ClientTable from "./ClientTable";
import ClientTableToolbar from "./ClientTableToolbar";
import {
  BlueButtonSmall,
  BlueBorderButton,
  RedBorderButton,
} from "../Shared/Buttons";
import { useState, useEffect } from "react";

const Clients = (props) => {
  const [allChecked, setAllChecked] = useState(false);
  const [checked, setChecked] = useState(false);
  const [checklist, setChecklist] = useState([]);
  const [effectTrigger, setEffectTrigger] = useState(true);

  function handleCheckAll (event) {
    setAllChecked(event.target.checked);
  }

  function getChecklist (checklist) {
    setChecklist(checklist);
    setEffectTrigger(!effectTrigger);
  }

  useEffect (() => {
    console.log("clients useeffect")
    let rowChecked;
    rowChecked = checklist.some(element => element === true);
    console.log(rowChecked);
    setChecked(allChecked || rowChecked);
  }, [allChecked, checklist, effectTrigger])

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
          <input type="checkbox" onChange={handleCheckAll}/>
        </div>
        <div className="button-wrapper">
          <BlueBorderButton>Message Group</BlueBorderButton>
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
        {!checked && <div className="button-inactive-overlay" />}
      </div>
      <ClientTable getChecklist={getChecklist} allChecked={allChecked}/>
    </div>
  );
};

export default Clients;
