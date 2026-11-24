
import React, { useState } from "react";

import {
  LayoutDashboard,
  Users,
  Wallet,
  ArrowLeftRight,
  Landmark,
  Receipt,
  Lock,
  Menu,
  X,
} from "lucide-react";

import Logo from "./Logo.jsx";

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "customers", label: "Customers", icon: Users },
  { id: "accounts", label: "Accounts", icon: Wallet },
  { id: "transfers", label: "Fund Transfers", icon: ArrowLeftRight },
  { id: "loans", label: "Loans", icon: Landmark },
  { id: "transactions", label: "Transactions", icon: Receipt },
  { id: "lock", label: "Lock Monitor", icon: Lock },
];

export default function Sidebar({ currentPage, setCurrentPage }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const content = (
    <div className="flex h-full flex-col">
      <div className="flex h-16 items-center justify-between px-5">
        <Logo />

        <button
          className="text-slate-400 hover:text-white lg:hidden"
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >
          <X size={22} />
        </button>
      </div>

      <nav className="mt-2 flex-1 space-y-1 px-3">
        {navItems.map((item) => {
          const Icon = item.icon;

          const active = item.id === currentPage;
          return (
            <button
              key={item.id}
              onClick={() => {
                setCurrentPage(item.id);
                setMobileOpen(false);
              }}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                active
                  ? "bg-navy-500 text-white shadow-sm"
                  : "text-slate-300 hover:bg-slate-700/50 hover:text-white"
              }`}
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="border-t border-slate-700/60 p-4">
        <p className="text-xs text-slate-400">BankEase v1.0</p>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 bg-navy-900 lg:block">
        {content}
      </aside>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileOpen(false)}
          />

          <aside className="absolute inset-y-0 left-0 w-64 bg-navy-900">
            {content}
          </aside>
        </div>
      )}

      {/* Mobile toggle */}
      <button
        className="fixed bottom-4 left-4 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-navy-500 text-white shadow-lg lg:hidden"
        onClick={() => setMobileOpen(true)}
        aria-label="Open menu"
      >
        <Menu size={22} />
      </button>
    </>
  );
}
