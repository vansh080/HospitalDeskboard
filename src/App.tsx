import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Patients from './pages/Patients';
import Staff from './pages/Staff';
import Appointments from './pages/Appointments';
import Diagnostics from './pages/Diagnostics';
import Laboratory from './pages/Laboratory';
import Pharmacy from './pages/Pharmacy';
import Prescriptions from './pages/Prescriptions';

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route redirects to /dashboard */}
        <Route
          path="/"
          element={
            <Layout>
              <Navigate to="/dashboard" replace />
            </Layout>
          }
        />

        {/* Main routes */}
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/patients"
          element={
            <Layout>
              <Patients />
            </Layout>
          }
        />
        <Route
          path="/staff"
          element={
            <Layout>
              <Staff />
            </Layout>
          }
        />
        <Route
          path="/appointments"
          element={
            <Layout>
              <Appointments />
            </Layout>
          }
        />
        <Route
          path="/diagnostics"
          element={
            <Layout>
              <Diagnostics />
            </Layout>
          }
        />
        <Route
          path="/laboratory"
          element={
            <Layout>
              <Laboratory />
            </Layout>
          }
        />
        <Route
          path="/pharmacy"
          element={
            <Layout>
              <Pharmacy />
            </Layout>
          }
        />
        <Route
          path="/prescriptions"
          element={
            <Layout>
              <Prescriptions />
            </Layout>
          }
        />

        {/* Fallback route (optional) */}
        <Route
          path="*"
          element={
            <Layout>
              <Navigate to="/dashboard" replace />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;