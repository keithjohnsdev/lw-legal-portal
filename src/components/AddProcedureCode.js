import { ModalHeader } from "./Shared/Header";
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
        centerTitle="Add Opposing Counsel"
        onClickRight={handleSave}
        onClickLeft={() => {
          console.log(props);
        }}
      />
    </>
  );
};

export default AddProcedureCode;
