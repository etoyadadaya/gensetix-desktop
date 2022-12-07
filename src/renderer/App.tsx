import { MemoryRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import { Hello } from "../pages/hello/hello";
import Profile from "../pages/profile/profile";
import News from "../pages/profile/news/news"
import Settings from "../pages/settings/settings";
import Account from "../pages/settings/account/account";
import Orders from "../pages/settings/orders/orders";
import Hitech from "../pages/profile/hitech/hitech";
import Nanotech from "../pages/profile/nanotech/nanotech";
import Classic from "../pages/profile/classic/classic";
import Magic from "../pages/profile/magic/magic";

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
