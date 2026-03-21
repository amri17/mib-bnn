"use client";

import './globals.css';
import {useState} from "react";
import { Toaster } from "sonner";
import { IoNotificationsOutline } from "react-icons/io5";
import Navbar from "@/app/navbar";
import Sidebar from "@/components/sidebar";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <html lang="id">
      <body className="bg-white">

        {/* Navbar */}
        <Navbar />


          {/* Sidebar */}
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

          {/* Content */}
          <main className={`transition-all duration-300 p-6 ${
              isOpen ? "ml-64" : "ml-20"
            }`}
          >
            {children}
          </main>

        {/* Notifikasi */}
        <div className="fixed top-4 right-4 z-50 text-2xl">
          <IoNotificationsOutline />
        </div>

        {/* Toaster */}
        <Toaster position="top-center" richColors />

      </body>
    </html>
  );
}