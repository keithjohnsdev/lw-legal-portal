import "./theme";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AddCase from "./components/AddCase/AddCase";
import CaseDetails from "./components/CaseDetails/index";
import Clients from "./components/CaseDetails/Clients";
import ClientDetail from "./components/CaseDetails/ClientDetail";
import ClaimDetails from "./components/CaseDetails/ClaimDetails";
import ClaimLog from "./components/CaseDetails/ClaimLog";

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
        <Route path="/data-to-share" element={<ClientDetail />}/>
      </Routes>
    </div>
  );
}

export default App;
