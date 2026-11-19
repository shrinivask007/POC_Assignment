
import React from "react";
import SummaryCard from "../components/SummaryCard.jsx";
import QuickActions from "../components/QuickActions.jsx";
import RecentTransactions from "../components/RecentTransactions.jsx";
import SystemStatus from "../components/SystemStatus.jsx";
import { summaryCards } from "../data/dummyData.js";

function Dashboard() {
  return (
    <main className="space-y-6 p-4 sm:p-6 lg:p-8">
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {summaryCards.map((card) => (
          <SummaryCard
            key={card.id}
            label={card.label}
            value={card.value}
          />
        ))}
      </section>

      <QuickActions />
      <RecentTransactions />
      <SystemStatus />
    </main>
  );
}

export default Dashboard;
