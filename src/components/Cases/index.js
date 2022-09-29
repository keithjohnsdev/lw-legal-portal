import { default as Button, GrayButton } from "../Shared/Button";
import { Header, Header1 } from "../Shared/Header";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import Table from "./Table";

const Cases = (props) => {
  const navigate = useNavigate();
  const ref = useRef(null);

  const focusSearchInput = () => {
    ref.current.focus();
  };

  return (
    <div className="cases-page">
      <Header>
        <Header1 />
      </Header>
      <div className="cases-toolbar flex">
        <div className="cases-toolbar-left flex">
          <div className="search-div" onClick={focusSearchInput}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_219_903)">
                <path
                  d="M10.3333 9.33333H9.80667L9.62 9.15333C10.2733 8.39333 10.6667 7.40667 10.6667 6.33333C10.6667 3.94 8.72667 2 6.33333 2C3.94 2 2 3.94 2 6.33333C2 8.72667 3.94 10.6667 6.33333 10.6667C7.40667 10.6667 8.39333 10.2733 9.15333 9.62L9.33333 9.80667V10.3333L12.6667 13.66L13.66 12.6667L10.3333 9.33333ZM6.33333 9.33333C4.67333 9.33333 3.33333 7.99333 3.33333 6.33333C3.33333 4.67333 4.67333 3.33333 6.33333 3.33333C7.99333 3.33333 9.33333 4.67333 9.33333 6.33333C9.33333 7.99333 7.99333 9.33333 6.33333 9.33333Z"
                  fill="#9AA0A3"
                />
              </g>
              <defs>
                <clipPath id="clip0_219_903">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <input
              className="search-input"
              placeholder="Search by name, defendant"
              ref={ref}
            ></input>
          </div>
          <h5 className="filter blue-link">Filter</h5>
        </div>
        <div className="cases-toolbar-right flex">
          <GrayButton>Customize</GrayButton>
          <Button
            className="toolbar-button"
            onClick={() => navigate("/add-new-case")}
          >
            + Add New Case
          </Button>
        </div>
      </div>
      <Table />
    </div>
  );
};

export default Cases;
