import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ResumeForm from './ResumeForm';
import WorkeInformationForm from './WorkeInformationForm';
import PrivateInformationForm from './PrivateInformationForm';
import HrSettingsForm from './HrSettingsForm';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/resume">Resume</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/familystatus">Work Information</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/privateInformation">Private Information</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/hrSettings">Hr Settings</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container mt-4">
          <Routes>
            <Route path="/resume" element={<ResumeForm />} />
            <Route path="/familystatus" element={<WorkeInformationForm />} />
            <Route path="/privateInformation" element={<PrivateInformationForm />} />
            <Route path="/hrSettings" element={<HrSettingsForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
