import { Link } from "react-router-dom";

export const Header = (props) => {
  return <div className="header">{props.children}</div>;
};

export const Header1 = (props) => {
  return (
    <>
      <div className="header1-left">
        <img src={require("../../theme/assets/images/dash.png")} alt="" />
      </div>
      <h4>Cases</h4>
      <div className="header1-right">
        <div className="user-text">
          <h5>Allen Admin</h5>
          <h5 style={{ fontWeight: 400 }}>ABC Law Firm</h5>
        </div>
        <img
          className="caret"
          src={require("../../theme/assets/images/icon-caret.png")}
          alt=""
        />
        <div className="icon-div">
          <img
            className="bell"
            src={require("../../theme/assets/images/icon.png")}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export const Header2 = (props) => {
  return (
    <div className="header2">
      <div className="header2-left">
        <Link to="/" className="gray-link">Cancel</Link>
      </div>
      <div className="header2-center">
        <h5>Add New Case</h5>
      </div>
      <div className="header2-right">
      <Link to="/" className="blue-link">Save</Link>
      </div>
    </div>
  );
};

export default Header;
