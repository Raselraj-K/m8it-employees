import "./App.css";
import EmployeeList from "./Component/EmployeeList";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Preview from "./Component/Preview";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="/preview" element={<Preview />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
