import "./theme";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Home from "./components/Home";
import AddCase from "./components/AddCase";
import AddOpposingCounsel from "./components/AddOpposingCounsel";
import AddInternalCounsel from "./components/AddInternalCounsel";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/add-new-case" element={<AddCase />}/>
      </Routes>
    </div>
  );
}

export default App;
