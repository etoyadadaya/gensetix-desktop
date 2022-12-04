import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import {Hello} from "../pages/hello/hello";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello/>} />
      </Routes>
    </Router>
  );
}
