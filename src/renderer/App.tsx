import {MemoryRouter as Router, Route, Routes} from "react-router-dom";
import "./App.scss";
import {Hello} from "../pages/hello/hello";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello/>}/>
      </Routes>
    </Router>
  );
}
