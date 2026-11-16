import React from "react";
import { Search, Bell } from "lucide-react";

export default function TopNavbar({ title = "Dashboard" }) {
  return (
    <header className="sticky top-0 z-20 flex h-16 items-center justify-between gap-4 border-b border-slate-200 bg-white px-4 sm:px-6 lg:px-8">
      {/* Page title */}
      <h1 className="text-lg font-semibold text-navy-900">{title}</h1>

      {/* Search bar */}
      <div className="relative hidden max-w-xs flex-1 md:block">
        <Search
          size={16}
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />
        <input
          type="text"
          placeholder="Search customers, accounts..."
          className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2 pl-9 pr-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-navy-500 focus:bg-white focus:outline-none"
        />
      </div>

      <div className="flex items-center gap-3">
        {/* Notification icon */}
        <button
          className="relative flex h-9 w-9 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100"
          aria-label="Notifications"
        >
          <Bell size={18} />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
        </button>

        {/* Admin profile */}
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-500 text-sm font-semibold text-white">
            AK
          </div>
          <div className="hidden leading-tight sm:block">
            <p className="text-sm font-medium text-navy-900">Admin</p>
            <p className="text-xs text-slate-400">Administrator</p>
          </div>
        </div>
      </div>
    </header>
  );
}