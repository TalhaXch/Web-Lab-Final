import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import RocketPage from './Rocket';
import MissionsPage from './Missions';
import MyProfile from './MyProfile';

function Header() {
  return (
    <div>
      <h1>Space Travelers Hub</h1>
      <Router>
        <Link to="/">Rocket Page</Link>
        <Link to="/Missions">Missions Page</Link>
        <Link to="/MyProfile">My Profile</Link>

        <Routes>
          <Route path="/" element={<RocketPage />} />
          <Route path="/Missions" element={<MissionsPage />} />
          <Route path="/MyProfile" element={<MyProfile />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </div>
  );
}

export default Header;
