import React from "react";
import { recentTransactions } from "../data/dummyData.js";

// Badge styles per status.
const statusStyles = {
  Success: "bg-green-100 text-green-700",
  Pending: "bg-amber-100 text-amber-700",
  Failed: "bg-red-100 text-red-700",
};

// Currency formatter — keeps amounts clean (e.g. 12,500.00).
const formatCurrency = (amount) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);

export default function RecentTransactions() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between px-5 py-4">
        <h2 className="text-sm font-semibold text-navy-900">
          Recent Transactions
        </h2>
        <button className="text-xs font-medium text-navy-500 hover:text-navy-700">
          View all
        </button>
      </div>

      {/* Scrollable table on small screens */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-t border-slate-100 bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
              <th className="px-5 py-3 font-medium">Transaction ID</th>
              <th className="px-5 py-3 font-medium">Customer Name</th>
              <th className="px-5 py-3 font-medium">Type</th>
              <th className="px-5 py-3 font-medium">Amount</th>
              <th className="px-5 py-3 font-medium">Date</th>
              <th className="px-5 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {recentTransactions.map((txn) => (
              <tr
                key={txn.id}
                className="border-t border-slate-100 hover:bg-slate-50/60"
              >
                <td className="px-5 py-3 font-medium text-navy-900">{txn.id}</td>
                <td className="px-5 py-3 text-slate-600">{txn.customer}</td>
                <td className="px-5 py-3 text-slate-600">{txn.type}</td>
                <td className="px-5 py-3 font-medium text-slate-800">
                  {formatCurrency(txn.amount)}
                </td>
                <td className="px-5 py-3 text-slate-500">{txn.date}</td>
                <td className="px-5 py-3">
                  <span
                    className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyles[txn.status]}`}
                  >
                    {txn.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}