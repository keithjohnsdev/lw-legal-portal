import { Header, Header1 } from "./Shared/Header";
import Button from "./Shared/Button";
import { useNavigate } from "react-router-dom";
import Cases from "./Cases";
import { useState } from "react";

const Home = (props) => {
  const [cases, setCases] = useState(true);
  const navigate = useNavigate();
  return (
    <>
      <Header>
        <Header1 />
      </Header>
      {cases ? <Cases /> : <div className="add-first-case">
        <img
          className="briefcase"
          src={require("../theme/assets/images/briefcase.png")}
          alt=""
        />
        <p>
          Looks like you do not have any cases created yet. Want to add your
          first one?
        </p>
        <Button onClick={() => {navigate("/add-new-case")}}>+ Add New Case</Button>
      </div>}
    </>
  );
};

export default Home;
