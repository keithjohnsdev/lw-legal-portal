import "./theme";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AddCase from "./components/AddCase/AddCase";
import CaseDetails from "./components/CaseDetails/CaseDetails";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/add-new-case" element={<AddCase />}/>
        <Route path="/case-details" element={<CaseDetails />}/>
      </Routes>
    </div>
  );
}

export default App;
