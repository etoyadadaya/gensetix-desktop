import {MemoryRouter as Router, Route, Routes} from "react-router-dom";
import "./App.scss";
import {Account, Classic, Hello, Hitech, Magic, Nanotech, News, Orders, Profile, Settings} from "../pages";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="profile" element={<Profile />}>
          <Route path="news" element={<News />} />
          <Route path="hitech" element={<Hitech />} />
          <Route path="nanotech" element={<Nanotech />} />
          <Route path="classic" element={<Classic />} />
          <Route path="magic" element={<Magic />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="settings" element={<Settings />}>
          <Route path="account" element={<Account />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Routes>
    </Router>
  );
}
