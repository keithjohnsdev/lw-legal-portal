const FlexTableRowProfile = (props) => {
  return (
    <div className="table-row">
      <div className={`col flex ${props.col1mod}`}>
        {" "}
        <div className="profile-div">
          <svg
            className="profile-circle"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="16" cy="16" r="16" fill="#B4D8D8" />
          </svg>
          <h4 className="profile-letters">{props.profile}</h4>
        </div>
        {props.col1}
      </div>
      <div className={`col ${props.col2mod}`}>{props.col2}</div>
      <div className={`col ${props.col3mod}`}>{props.col3}</div>
      <div className={`col ${props.col4mod}`}>{props.col4}</div>
      <div className="dots-div">
        <svg
          width="16"
          height="5"
          viewBox="0 0 16 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2.5C12 3.6 12.9 4.5 14 4.5C15.1 4.5 16 3.6 16 2.5C16 1.4 15.1 0.5 14 0.5C12.9 0.5 12 1.4 12 2.5ZM10 2.5C10 1.4 9.1 0.5 8 0.5C6.9 0.5 6 1.4 6 2.5C6 3.6 6.9 4.5 8 4.5C9.1 4.5 10 3.6 10 2.5ZM4 2.5C4 1.4 3.1 0.499999 2 0.499999C0.9 0.499999 -3.1668e-08 1.4 -7.03734e-08 2.5C-1.09079e-07 3.6 0.899999 4.5 2 4.5C3.1 4.5 4 3.6 4 2.5Z"
            fill="#73787B"
          />
        </svg>
      </div>
    </div>
  );
};

export default FlexTableRowProfile;
