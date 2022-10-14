import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ClientTableRow = (props) => {
  const navigate = useNavigate();
  const [rowChecked, setRowChecked] = useState(false);

  function generatePastelColor() {
    let R = Math.floor(Math.random() * 127 + 75);
    let G = Math.floor(Math.random() * 127 + 75);
    let B = Math.floor(Math.random() * 127 + 100);
    let rgb = (R << 16) + (G << 8) + B;
    return `#${rgb.toString(16)}92`;
  }

  function generateInitials() {
    let name = props.col1;
    let nameArray = name.split(" ");
    let initials = `${nameArray[0][0].toUpperCase()}${nameArray[1][0].toUpperCase()}`;
    return initials;
  }

  function handleCheck(e) {
    e.stopPropagation();
    setRowChecked(e.target.checked);
  }

  function handleClick() {
    navigate("/client-detail");
  }

  function handleTitleClick() {
    //Later, when backend is up, remap this with arg to fetch for client
    navigate("/client-detail");
  }

  useEffect(() => {
    setRowChecked(props.allChecked);
  }, [props.allChecked]);

  useEffect(() => {
    props.handleCheck(rowChecked, props.index);
  }, [rowChecked]);

  return (
    <div className="whole-row">
      <div
        className={
          rowChecked ? "client-title-column selected" : "client-title-column"
        }
        onClick={handleTitleClick}
      >
        <input
          type="checkbox"
          onChange={handleCheck}
          onClick={handleCheck}
          checked={rowChecked}
        />
        <div className="profile-div">
          <svg
            className="profile-circle"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="16" cy="16" r="16" fill={generatePastelColor()} />
          </svg>
          <h4 className="profile-letters">{generateInitials()}</h4>
        </div>
        {props.col1}
      </div>
      <div className="case-info-row">
        <div
          className={
            rowChecked ? "clients-col col2 selected" : "clients-col col2"
          }
          onClick={handleClick}
        >
          <p className="cell-text">{props.col2}</p>
        </div>
        <div
          className={
            rowChecked ? "clients-col col3 selected" : "clients-col col3"
          }
          onClick={handleClick}
        >
          <p className="cell-text">{props.col3}</p>
        </div>
        <div
          className={
            rowChecked ? "clients-col col4 selected" : "clients-col col4"
          }
          onClick={handleClick}
        >
          <p className="cell-text">{props.col4}</p>
        </div>
        <div
          className={
            rowChecked ? "clients-col col5 selected" : "clients-col col5"
          }
          onClick={handleClick}
        >
          <p className="cell-text">{props.col5}</p>
        </div>
        <div
          className={
            rowChecked ? "clients-col col6 selected" : "clients-col col6"
          }
          onClick={handleClick}
        >
          <p className="cell-text">{props.col6}</p>
        </div>
        <div
          className={
            rowChecked ? "clients-col col7 selected" : "clients-col col7"
          }
          onClick={handleClick}
        >
          <p className="cell-text">{props.col7}</p>
        </div>
        <div
          className={`clients-col col8 ${rowChecked && "selected"} ${
            props.col8 === "Satisfied" ? "open" : "closed"
          }`}
          onClick={handleClick}
        >
          <p className="cell-text">{props.col8}</p>
        </div>
        <div
          className={`clients-col col9 end ${rowChecked && "selected"} ${
            props.col9 === "Not Submitted"
              ? "gray"
              : props.col9 === "Awaiting Response" || props.col9 === "Submitted"
              ? "open"
              : "closed"
          }`}
          onClick={handleClick}
        >
          <p className="cell-text">{props.col9}</p>
        </div>
      </div>
    </div>
  );
};

export default ClientTableRow;
