import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import {Hello} from "../pages/hello/hello";
import {Profile} from "../pages/profile/profile";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </Router>
  );
}
