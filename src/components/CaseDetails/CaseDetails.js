import { Header, Header1 } from "../Shared/Header";
import { useLocation } from "react-router-dom";

const CaseDetails = () => {
    const {state} = useLocation();
    console.log(state);
  return (
    <div>
    <Header>
      <Header1 />
    </Header>
    </div>

  );
};

export default CaseDetails;
