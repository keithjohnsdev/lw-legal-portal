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
import { useState, useEffect } from "react";
import React from "react";

const Clients = (props) => {
  const [allChecked, setAllChecked] = useState(false);
  const [checked, setChecked] = useState(false);
  const [checklist, setChecklist] = useState([]);
  const [effectTrigger, setEffectTrigger] = useState(true);
  const data = dummyCasesData;

  function handleCheckAll(event) {
    setAllChecked(event.target.checked);
  }

  function getChecklist(checklist) {
    setChecklist(checklist);
    setEffectTrigger(!effectTrigger);
  }

  useEffect(() => {
    let rowChecked;
    rowChecked = checklist.some((element) => element === true);
    setChecked(allChecked || rowChecked);
  }, [allChecked, checklist, effectTrigger]);

  return (
    <div className="case-details-page fullscreen">
      <Header>
        <Header1 />
      </Header>
      <CaseDetailsHeader1 title={data[0].title} backLinkTo="/" />
      <CaseDetailsHeader2 />
      <ClientTableToolbar />
      <div className="client-actions-toolbar">
        <div className="checkbox-wrapper">
          <input type="checkbox" onChange={handleCheckAll} />
        </div>
        <div className="button-wrapper">
          <BlueBorderButton>
            <svg
              width="18"
              height="15"
              viewBox="0 0 18 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.11735 10.7778C10.1209 10.7778 12.5556 8.58935 12.5556 5.8889C12.5556 3.18845 10.1209 1 7.11735 1C4.11467 1 1.68 3.18845 1.68 5.8889C1.68 6.61601 1.856 7.30579 2.17245 7.92624L1 10.7778L4.39912 10.1236C5.19912 10.5396 6.12712 10.7778 7.11735 10.7778Z"
                stroke="#1B93C5"
                strokeLinejoin="round"
              />
              <path
                d="M7.9375 13.5546C8.8336 14.0693 9.84988 14.338 10.8833 14.3333C11.8291 14.3368 12.7617 14.1124 13.6024 13.679L17.0006 14.3333L15.8273 11.4817C16.1512 10.8514 16.3203 10.153 16.3206 9.44436C16.3206 8.33769 15.9117 7.31724 15.2229 6.49769C14.5571 5.70657 13.63 5.10302 12.5562 4.79102"
                stroke="#1B93C5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.88845 6.77778C9.39753 6.77778 8.99956 6.37981 8.99956 5.88889C8.99956 5.39797 9.39753 5 9.88845 5C10.3794 5 10.7773 5.39797 10.7773 5.88889C10.7773 6.37981 10.3794 6.77778 9.88845 6.77778Z"
                fill="#1B93C5"
              />
              <path
                d="M7.22219 6.77778C6.73127 6.77778 6.3333 6.37981 6.3333 5.88889C6.3333 5.39797 6.73127 5 7.22219 5C7.71311 5 8.11108 5.39797 8.11108 5.88889C8.11108 6.37981 7.71311 6.77778 7.22219 6.77778Z"
                fill="#1B93C5"
              />
              <path
                d="M4.55642 6.77778C4.0655 6.77778 3.66753 6.37981 3.66753 5.88889C3.66753 5.39797 4.0655 5 4.55642 5C5.04734 5 5.44531 5.39797 5.44531 5.88889C5.44531 6.37981 5.04734 6.77778 4.55642 6.77778Z"
                fill="#1B93C5"
              />
            </svg>
            Message Group
          </BlueBorderButton>
        </div>
        <div className="button-wrapper">
          <BlueBorderButton>
            <svg
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.33333 13H13C13.7364 13 14.3333 12.4031 14.3333 11.6667V4.33333C14.3333 3.59695 13.7364 3 13 3H7L5.86458 1.29687C5.74093 1.1114 5.53278 1 5.30988 1H2.33333C1.59695 1 1 1.59695 1 2.33333V11.6667C1 12.4031 1.59695 13 2.33333 13Z"
                stroke="#1B93C5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.66675 5.6665V9.6665M5.66675 7.6665H9.66675"
                stroke="#1B93C5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Export to Excel
          </BlueBorderButton>
        </div>
        <div className="button-wrapper red">
          <RedBorderButton>
            <img
              src={require("../../theme/assets/images/icon-appeal.png")}
              alt=""
            />
            Appeal Rejection
          </RedBorderButton>
        </div>
        <div className="button-wrapper blue">
          <BlueButtonSmall>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.3135 7.31346L1.22884 0.771156L4.09107 7.31346M14.3135 7.31346L1.22883 13.8558L4.09107 7.31346M14.3135 7.31346H4.09107"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Submit Claims
          </BlueButtonSmall>
        </div>
        {!checked && <div className="button-inactive-overlay" />}
      </div>
      <ClientTable getChecklist={getChecklist} allChecked={allChecked} />
    </div>
  );
};

export default Clients;
