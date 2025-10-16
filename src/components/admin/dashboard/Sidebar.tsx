"use client";

import { X, Home, Users, ClipboardList } from "lucide-react";
import Link from "next/link";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
  role: "admin" | "employee";
}

export function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-blue-700 text-white transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:translate-x-0`}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b border-blue-600">
          <h2 className="text-xl font-semibold">Sleeky Admin</h2>
          <button className="lg:hidden" onClick={onClose}>
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="p-6 space-y-4">
          <Link
            href="/admin/dashboard"
            className="flex items-center space-x-3 p-2 rounded-md hover:bg-blue-600 transition"
          >
            <Home className="w-5 h-5" />
            <span>Dashboard</span>
          </Link>

          <Link
            href="/admin/employees"
            className="flex items-center space-x-3 p-2 rounded-md hover:bg-blue-600 transition"
          >
            <Users className="w-5 h-5" />
            <span>Employees</span>
          </Link>

          <Link
            href="/admin/invitations"
            className="flex items-center space-x-3 p-2 rounded-md hover:bg-blue-600 transition"
          >
            <ClipboardList className="w-5 h-5" />
            <span>Invitations</span>
          </Link>
        </nav>
      </aside>
    </>
  );
}
