import "./theme";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AddCase from "./components/AddCase";
import CaseDetails from "./components/CaseDetails/index";
import Clients from "./components/CaseDetails/Clients";
import ClientDetail from "./components/ClientDetail";
import ClaimDetails from "./components/ClientDetail/ClaimDetails";
import ClaimLog from "./components/ClientDetail/ClaimLog";
import DataToShare from "./components/ClientDetail/DataToShare";
import ViewMedicalDiagnosis from "./components/ClientDetail/ViewMedicalDiagnosis";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/add-new-case" element={<AddCase />}/>
        <Route path="/case-details" element={<CaseDetails />}/>
        <Route path="/clients" element={<Clients />}/>
        <Route path="/client-detail" element={<ClientDetail />}/>
        <Route path="/claim-details" element={<ClaimDetails />}/>
        <Route path="/claim-log" element={<ClaimLog />}/>
        <Route path="/data-to-share" element={<DataToShare />}/>
        <Route path="/view-medical-diagnosis" element={<ViewMedicalDiagnosis />}/>
      </Routes>
    </div>
  );
}

export default App;
