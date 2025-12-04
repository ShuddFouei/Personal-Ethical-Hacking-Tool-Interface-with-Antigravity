import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Targets from './pages/Targets';
import Scans from './pages/Scans';
import Reports from './pages/Reports';
import Terminal from './pages/Terminal';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="targets" element={<Targets />} />
          <Route path="scans" element={<Scans />} />
          <Route path="reports" element={<Reports />} />
          <Route path="terminal" element={<Terminal />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
