import { ModalHeader } from "../Shared/Headers";
import { useState } from "react";

const AddProcedureCode = (props) => {
    const [procedureCodesData, setProcedureCodesData] = useState({});


  function handleSave() {
    props.handleSave(procedureCodesData);
    props.closeModal();
  }

  return (
    <>
      <ModalHeader
        centerTitle="Add Procedure Code(s)"
        onClickRight={handleSave}
        onClickLeft={() => {
          props.closeModal();
        }}
      />
    </>
  );
};

export default AddProcedureCode;
