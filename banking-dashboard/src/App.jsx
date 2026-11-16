import React, { useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import TopNavbar from "./components/TopNavbar.jsx";
import SummaryCard from "./components/SummaryCard.jsx";
import QuickActions from "./components/QuickActions.jsx";
import RecentTransactions from "./components/RecentTransactions.jsx";
import SystemStatus from "./components/SystemStatus.jsx";
import { summaryCards } from "./data/dummyData.js";
import CustomerManagement from "./pages/CustomerManagement.jsx";

function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");

  const renderContent = () => {
    switch (currentPage) {
      case "dashboard":
        return (
          <main className="space-y-6 p-4 sm:p-6 lg:p-8">
            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {summaryCards.map((card) => (
                <SummaryCard key={card.id} label={card.label} value={card.value} />
              ))}
            </section>
            <QuickActions />
            <RecentTransactions />
            <SystemStatus />
          </main>
        );
      case "customers":
        return <CustomerManagement />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <div className="lg:pl-64">
        <TopNavbar title={currentPage === "dashboard" ? "Dashboard" : "Customer Management"} />
        {renderContent()}
      </div>
    </div>
  );
}

export default App;