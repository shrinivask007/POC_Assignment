import React, { useState } from "react";
import { Plus, Search, Filter, X } from "lucide-react";
import { initialCustomers } from "../data/customerData.js";

const kycBadgeStyles = {
  Verified: "bg-green-100 text-green-700 border-green-200",
  Pending: "bg-amber-100 text-amber-700 border-amber-200",
  Rejected: "bg-red-100 text-red-700 border-red-200",
};

export default function CustomerManagement() {
  const [customers, setCustomers] = useState(initialCustomers);
  const [search, setSearch] = useState("");
  const [filterKyc, setFilterKyc] = useState("");
  const [filterType, setFilterType] = useState("");

  const filtered = customers.filter((c) => {
    const matchesSearch =
      c.firstName.toLowerCase().includes(search.toLowerCase()) ||
      c.lastName.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase()) ||
      c.id.toLowerCase().includes(search.toLowerCase());
    const matchesKyc = filterKyc ? c.kycStatus === filterKyc : true;
    const matchesType = filterType ? c.accountType === filterType : true;
    return matchesSearch && matchesKyc && matchesType;
  });

  const clearFilters = () => {
    setSearch("");
    setFilterKyc("");
    setFilterType("");
  };

  return (
    <div className="p-6">
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-navy-900">Customer Management</h1>
          <p className="text-slate-500">Manage and view all bank customers.</p>
        </div>
        <button className="flex items-center gap-2 rounded-lg bg-navy-500 px-4 py-2 text-white hover:bg-navy-600 transition">
          <Plus size={18} />
          Add Customer
        </button>
      </div>

      {/* Filters */}
      <div className="mb-6 flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-4 sm:flex-row">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-3 text-slate-400" />
          <input
            type="text"
            placeholder="Search by name, email or ID..."
            className="w-full rounded-lg border border-slate-200 py-2 pl-9 pr-3 text-sm focus:outline-none focus:border-navy-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <select
          className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-600"
          value={filterKyc}
          onChange={(e) => setFilterKyc(e.target.value)}
        >
          <option value="">All KYC Status</option>
          <option value="Verified">Verified</option>
          <option value="Pending">Pending</option>
          <option value="Rejected">Rejected</option>
        </select>
        <select
          className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-600"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="">All Account Types</option>
          <option value="Savings">Savings</option>
          <option value="Current">Current</option>
          <option value="Loan">Loan</option>
        </select>
        <button
          onClick={clearFilters}
          className="flex items-center justify-center gap-1 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-500 hover:bg-slate-50"
        >
          <X size={16} />
          Clear
        </button>
      </div>

      {/* Table */}
      <div className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-500 uppercase tracking-wide text-xs">
              <tr>
                <th className="px-6 py-4">ID</th>
                <th className="px-6 py-4">Full Name</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">Phone</th>
                <th className="px-6 py-4">Type</th>
                <th className="px-6 py-4">KYC</th>
                <th className="px-6 py-4">Registration</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((c) => (
                <tr key={c.id} className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-navy-900">{c.id}</td>
                  <td className="px-6 py-4">{`${c.firstName} ${c.lastName}`}</td>
                  <td className="px-6 py-4 text-slate-600">{c.email}</td>
                  <td className="px-6 py-4 text-slate-600">{c.phone}</td>
                  <td className="px-6 py-4">{c.accountType}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs border ${kycBadgeStyles[c.kycStatus]}`}>
                      {c.kycStatus}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-500">{c.registrationDate}</td>
                  <td className="px-6 py-4 text-right space-x-2">
                    <button className="text-navy-500 hover:text-navy-700 font-medium text-xs">View</button>
                    <button className="text-blue-500 hover:text-blue-700 font-medium text-xs">Edit</button>
                    <button className="text-red-500 hover:text-red-700 font-medium text-xs">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}