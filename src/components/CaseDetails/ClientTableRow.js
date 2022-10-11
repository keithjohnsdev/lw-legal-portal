import { useNavigate } from "react-router-dom";

const ClientTableRow = (props) => {
  const navigate = useNavigate();

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
    console.log(nameArray);
    return initials;
  }

  return (
    <div className="whole-row" onClick={() => navigate("/case-details")}>
      <div className="client-title-column">
        <input type="checkbox" />
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
        <div className="clients-col col2">
          <p className="cell-text">{props.col2}</p>
        </div>
        <div className="clients-col col3">
          <p className="cell-text">{props.col3}</p>
        </div>
        <div className="clients-col col4">
          <p className="cell-text">{props.col4}</p>
        </div>
        <div className="clients-col col5">
          <p className="cell-text">{props.col5}</p>
        </div>
        <div className="clients-col col6">
          <p className="cell-text">{props.col6}</p>
        </div>
        <div className="clients-col col7">
          <p className="cell-text">{props.col7}</p>
        </div>
        <div
          className={
            props.col8 === "Satisfied"
              ? "clients-col col8 open"
              : "clients-col col8 closed"
          }
        >
          <p className="cell-text">{props.col8}</p>
        </div>
        <div
          className={
            props.col9 === "Not Submitted"
              ? "clients-col col9 gray end"
              : props.col9 === "Awaiting Response" || props.col9 === "Submitted"
              ? "clients-col col9 open end"
              : "clients-col col9 closed end"
          }
        >
          <p className="cell-text">{props.col9}</p>
        </div>
      </div>
    </div>
  );
};

export default ClientTableRow;
