import { Header, Header1 } from "../Shared/Headers";
import {
  default as ClientDetailHeader1,
  ClientDetailHeader2,
  ClientDetailHeader3,
} from "./ClientDetailHeaders";
import { dummyClientViewData } from "../../graphql/dummyData";
import { default as Container } from "../Shared/Container";
import { Reorder, motion } from "framer-motion";
import { useState, useMemo } from "react";

const DataToShare = (props) => {
  const clientViewData = dummyClientViewData;
  const [fieldsList, setFieldsList] = useState([
    { field: "Submitting Party", checked: false },
    { field: "Armed Forces", checked: false },
    { field: "Diagnosis", checked: false },
    { field: "Procedures", checked: false },
    { field: "NDCs", checked: false },
    { field: "Disability Rating", checked: false },
    { field: "Elements", checked: false },
    { field: "Claim Status", checked: false },
    { field: "Lien Due", checked: false },
    { field: "Settlement Value", checked: false },
    { field: "Client Date of Birth", checked: false },
    { field: "Email", checked: false },
    { field: "Phone", checked: false },
  ]);

  const FieldRow = (props) => {

    function handleCheck(field) {
      var newArr = fieldsList;
    }

    return (
      <div className="field-row">
        <div className="order-icon-div">
          <svg
            width="16"
            height="13"
            viewBox="0 0 16 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line y1="0.5" x2="16" y2="0.5" stroke="#9AA0A3" />
            <line y1="4.5" x2="16" y2="4.5" stroke="#9AA0A3" />
            <line y1="8.5" x2="16" y2="8.5" stroke="#9AA0A3" />
            <line y1="12.5" x2="16" y2="12.5" stroke="#9AA0A3" />
          </svg>
        </div>
        <div className="checkbox-div">
          <input type="checkbox" checked={props.checked} onChange={handleCheck(props.field)} />
          <p>{props.field}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="client-detail-page fullscreen">
      <Header>
        <Header1 />
      </Header>
      <ClientDetailHeader1 title={clientViewData.name} />
      <ClientDetailHeader2 data={clientViewData} />
      <ClientDetailHeader3 data={clientViewData} />
      <motion.div className="client-detail" layoutScroll>
        <Container>
          <div className="data-to-share">
            <h3>Select items to share as part of claim</h3>
            <div className="select-all-fields">
              <input name="Checkbox1" type="checkbox" />
              <p>Select All Fields</p>
            </div>
            <Reorder.Group
              axis="y"
              values={fieldsList}
              onReorder={setFieldsList}
              className="fields"
            >
              {fieldsList.map((field, index) => {
                return (
                  <Reorder.Item key={field.field} value={field}>
                    <FieldRow field={field.field} />
                  </Reorder.Item>
                );
              })}
            </Reorder.Group>
          </div>
        </Container>
      </motion.div>
    </div>
  );
};

export default DataToShare;
