import React from "react";

export default function Logo({ collapsed = false }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-500 text-white shadow-sm">
        <span className="text-lg font-bold tracking-tight">I</span>
      </div>
      {!collapsed && (
        <div className="leading-tight">
          <p className="text-sm font-semibold text-white">India Bank</p>
          <p className="text-[11px] text-slate-300">Retail Banking</p>
        </div>
      )}
    </div>
  );
}