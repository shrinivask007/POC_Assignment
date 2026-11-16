import React from "react";
import { Users, Wallet, ArrowLeftRight, Landmark } from "lucide-react";

// Map each card label to a matching icon.
const iconMap = {
  "Total Customers": Users,
  "Total Accounts": Wallet,
  "Total Transactions": ArrowLeftRight,
  "Active Loans": Landmark,
};

export default function SummaryCard({ label, value }) {
  const Icon = iconMap[label] || Wallet;
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-slate-500">{label}</p>
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-50 text-navy-500">
          <Icon size={20} />
        </div>
      </div>
      <p className="mt-3 text-3xl font-bold text-navy-900">{value}</p>
    </div>
  );
}