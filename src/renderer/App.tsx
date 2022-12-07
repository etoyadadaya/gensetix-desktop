import {MemoryRouter as Router, Route, Routes} from "react-router-dom";
import "./App.scss";
import {Hello} from "../pages/hello/hello";
import Profile from "../pages/profile/profile";
import Settings from "../pages/settings/settings";
import Account from "../pages/settings/account/account";
import Orders from "../pages/settings/orders/orders";
import Play from "../pages/profile/play/play";
import Installations from "../pages/profile/installations/installations";
import Skins from "../pages/profile/skins/skins";
import Patches from "../pages/profile/patches/patches";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello/>}/>
        <Route path="profile" element={<Profile/>}>
          <Route path="play" element={<Play/>}/>
          <Route path="installations" element={<Installations/>}/>
          <Route path="skins" element={<Skins/>}/>
          <Route path="patches" element={<Patches/>}/>
          <Route path="settings" element={<Settings/>}/>
        </Route>
        <Route path="settings" element={<Settings/>}>
          <Route path="account" element={<Account/>}/>
          <Route path="orders" element={<Orders/>}/>
        </Route>
      </Routes>
    </Router>
  );
}
