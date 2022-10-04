import "./theme";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AddCase from "./components/AddCase/AddCase";
import CaseDetails from "./components/CaseDetails/index";
import Clients from "./components/CaseDetails/Clients";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/add-new-case" element={<AddCase />}/>
        <Route path="/case-details" element={<CaseDetails />}/>
        <Route path="/clients" element={<Clients />}/>
      </Routes>
    </div>
  );
}

export default App;
