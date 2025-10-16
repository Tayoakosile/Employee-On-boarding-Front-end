"use client";

import { useState } from "react";
import Header from "./Header";
import { Sidebar } from "./Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        role="admin"
      />

      <div className="flex flex-col flex-1 lg:ml-64 transition-all">
        <Header onMenuClick={() => setSidebarOpen(true)} role="admin" />
        <main className="flex-1 p-6 bg-gray-50">{children}</main>
      </div>
    </div>
  );
}
