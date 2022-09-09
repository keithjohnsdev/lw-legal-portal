import "./theme";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Header from "./components/Shared/Header";
import Home from "./components/Home";
import AddCaseForm from "./components/AddCaseForm";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/add-new-case" element={<AddCaseForm />}/>
      </Routes>
    </div>
  );
}

export default App;
