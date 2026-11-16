import React from "react";
import { Server, Database } from "lucide-react";
import { systemStatus } from "../data/dummyData.js";

export default function SystemStatus() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="mb-4 text-sm font-semibold text-navy-900">System Status</h2>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Server size={16} className="text-navy-500" />
            System Status
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-700">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
            {systemStatus.system}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Database size={16} className="text-navy-500" />
            Database Status
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-700">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
            {systemStatus.database}
          </span>
        </div>
      </div>
    </div>
  );
}