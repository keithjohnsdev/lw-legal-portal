import { ModalHeader } from "../Shared/Headers";
import { useState } from "react";

const AddDiagnosisCode = (props) => {
    const [diagnosisCodesData, setDiagnosisCodesData] = useState({});


  function handleSave() {
    props.handleSave(diagnosisCodesData);
    props.closeModal();
  }

  return (
    <>
      <ModalHeader
        centerTitle="Add Diagnosis Code(s)"
        onClickRight={handleSave}
        onClickLeft={() => {
          props.closeModal();
        }}
      />
    </>
  );
};

export default AddDiagnosisCode;
