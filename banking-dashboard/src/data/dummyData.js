// Dummy data for the BankEase Dashboard
// No backend, no database — just sample data to render the UI.

export const summaryCards = [
  { id: 1, label: "Total Customers", value: 120 },
  { id: 2, label: "Total Accounts", value: 250 },
  { id: 3, label: "Total Transactions", value: 85 },
  { id: 4, label: "Active Loans", value: 32 },
];

export const quickActions = [
  { id: 1, label: "Add Customer", type: "customer" },
  { id: 2, label: "Create Account", type: "account" },
  { id: 3, label: "New Transfer", type: "transfer" },
];

export const recentTransactions = [
  {
    id: "TXN-001",
    customer: "Aisha Rahman",
    type: "Deposit",
    amount: 12500.0,
    date: "2026-11-17",
    status: "Success",
  },
  {
    id: "TXN-002",
    customer: "John Miller",
    type: "Transfer",
    amount: 3200.5,
    date: "2026-11-17",
    status: "Pending",
  },
  {
    id: "TXN-003",
    customer: "Priya Sharma",
    type: "Withdrawal",
    amount: 850.0,
    date: "2026-11-16",
    status: "Success",
  },
  {
    id: "TXN-004",
    customer: "Daniel Chen",
    type: "Transfer",
    amount: 5400.0,
    date: "2026-11-16",
    status: "Failed",
  },
  {
    id: "TXN-005",
    customer: "Fatima Noor",
    type: "Deposit",
    amount: 9800.75,
    date: "2026-11-15",
    status: "Success",
  },
  {
    id: "TXN-006",
    customer: "Robert Kim",
    type: "Withdrawal",
    amount: 240.0,
    date: "2026-11-15",
    status: "Pending",
  },
];

export const systemStatus = {
  system: "Online",
  database: "Demo Mode",
};
