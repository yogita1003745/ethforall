import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Dashboard from "./pages/dao-dashboard/dao-dashboard";
import GuildNftList from "./pages/guilds/guild-nft-list/guild-nft-list";
import GuildUpload from "./pages/guilds/guild-upload/guild-upload";
import GuildsInfo from "./pages/guilds/guilds-info/guilds-info";
import GuildsList from "./pages/guilds/guilds-list/guilds-list";
import Home from "./pages/home/home";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact index path="/" element={<Home />} />
          <Route exact path="guilds-list" element={<GuildsList />} />
          <Route exact path="guilds-info" element={<GuildsInfo />} />
          <Route exact path="guilds-nft-list" element={<GuildNftList />} />
          <Route exact path="guilds-upload" element={<GuildUpload />} />
          <Route exact path="dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}
