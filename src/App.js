import "./theme";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AddCase from "./components/AddCase/AddCase";

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
