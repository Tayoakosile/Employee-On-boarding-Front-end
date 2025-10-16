"use client";

import Image from "next/image";
import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
  heading: string;
  subtext: string;
  imageUrl: string;
}

export function AuthLayout({
  children,
  heading,
  subtext,
  imageUrl,
}: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div
        className="flex flex-col lg:flex-row w-full max-w-6xl min-h-[85vh] 
         bg-white rounded-lg shadow-2xl overflow-hidden"
      >
        <div className="relative w-full lg:w-1/2 h-72 lg:h-auto flex items-end justify-center">
          <Image
            src={imageUrl}
            alt="Onboarding Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/50"></div>
          <div className="relative text-center text-white pb-10 px-6">
            <h2 className="text-2xl font-semibold">Welcome to Sleeky</h2>
            <hr className="my-3 mx-auto w-14 border-white/70" />
            <p className="text-base max-w-md mx-auto">
              Join our team and start your journey. We are excited to have you
              onboard and help you grow in your role.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex items-center justify-center p-10 bg-white shadow-inner">
          <div className="w-full max-w-md">
            <h1 className="text-3xl font-bold text-gray-800 mb-3">{heading}</h1>
            <p className="text-gray-500 text-sm mb-8">{subtext}</p>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
