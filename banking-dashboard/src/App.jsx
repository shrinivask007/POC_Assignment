
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import Sidebar from "./components/Sidebar.jsx";
import TopNavbar from "./components/TopNavbar.jsx";

import Dashboard from "./pages/Dashboard.jsx";
import CustomerManagement from "./pages/CustomerManagement.jsx";

function PagePlaceholder({ title }) {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="mt-2 text-slate-500">
        This module is under development.
      </p>
    </main>
  );
}

function AppLayout() {
  const location = useLocation();

  const pageTitles = {
    "/dashboard": "Dashboard",
    "/customers": "Customer Management",
    "/accounts": "Account Management",
    "/transfers": "Fund Transfers",
    "/loans": "Loan Management",
    "/transactions": "Transactions",
    "/lock-monitor": "Lock Monitor",
  };

  const title = pageTitles[location.pathname] || "Dashboard";

  return (
    <div className="min-h-screen bg-slate-100">
      <Sidebar />

      <div className="lg:pl-64">
        <TopNavbar title={title} />

        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/customers" element={<CustomerManagement />} />

          <Route
            path="/accounts"
            element={<PagePlaceholder title="Account Management" />}
          />

          <Route
            path="/transfers"
            element={<PagePlaceholder title="Fund Transfers" />}
          />

          <Route
            path="/loans"
            element={<PagePlaceholder title="Loan Management" />}
          />

          <Route
            path="/transactions"
            element={<PagePlaceholder title="Transactions" />}
          />

          <Route
            path="/lock-monitor"
            element={<PagePlaceholder title="Lock Monitor" />}
          />

          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
