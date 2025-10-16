// src/components/dashboard/Header.tsx
"use client";

import { Menu } from "lucide-react";
import Image from "next/image";

interface HeaderProps {
  onMenuClick: () => void;
  role: "admin" | "employee";
}

export default function Header({ onMenuClick, role }: HeaderProps) {
  return (
    <header className="flex items-center justify-between h-16 bg-white shadow px-6">
      <button className="lg:hidden" onClick={onMenuClick}>
        <Menu className="w-6 h-6 text-gray-700" />
      </button>

      <h2 className="text-lg font-semibold text-gray-800 capitalize">
        {role === "admin" ? "Admin Dashboard" : "Employee Dashboard"}
      </h2>

      <div className="flex items-center space-x-4">
        <span className="text-gray-700 capitalize">{role}</span>
        <div className="relative w-10 h-10 rounded-full border overflow-hidden">
          <Image
            src="https://i.postimg.cc/T1Dy0XQk/20250925-1709-Confident-Smiling-Woman-remix-01k60t3gbzf068670vyya6aq35.png"
            alt="User Avatar"
            fill
            sizes="40px"
            className="object-cover"
          />
        </div>
      </div>
    </header>
  );
}
