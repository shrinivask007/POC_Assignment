import React from "react";
import { UserPlus, CreditCard, Send } from "lucide-react";
import { quickActions } from "../data/dummyData.js";

// Map each quick action type to a Lucide icon.
const iconMap = {
  customer: UserPlus,
  account: CreditCard,
  transfer: Send,
};

export default function QuickActions() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="mb-4 text-sm font-semibold text-navy-900">Quick Actions</h2>
      <div className="flex flex-col gap-2 sm:flex-row">
        {quickActions.map((action) => {
          const Icon = iconMap[action.type] || Send;
          return (
            <button
              key={action.id}
              className="flex items-center justify-center gap-2 rounded-lg border border-navy-500/20 bg-navy-50 px-4 py-2.5 text-sm font-medium text-navy-700 transition-colors hover:bg-navy-100"
            >
              <Icon size={16} />
              {action.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}