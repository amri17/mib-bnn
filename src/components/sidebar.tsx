'use client'

import Link from "next/link"
import { FaBars, FaHome } from "react-icons/fa"
import { CiGrid41 } from "react-icons/ci";
import { RxPeople } from "react-icons/rx";
import { LuBuilding2 } from "react-icons/lu";
import { BsPersonGear } from "react-icons/bs";
import { MdAttachMoney } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  return (
    <>
      {/* Sidebar */}
      <nav className={`fixed left-0 top-0 z-10 h-full bg-blue-900 transition-all duration-300 ${isOpen ? "w-56" : "w-16"}`}>
        {/* Tombol buka/tutup */}
        <div className="flex justify-end p-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-blue-900 w-8 h-8 rounded flex items-center justify-center text-white hover:bg-orange-300"
          >
            <FaBars />
          </button>
        </div>
        
        {/* Konten sidebar */}
        <ul className="text-white px-2 py-2  space-y-0">
          {isOpen && (
            <li className="text-center italic font-bold text-2xl">BNN</li>
  
          )}
          
          <li className="flex items-center hover:bg-orange-300 p-3 rounded transition-colors ">
            <Link href="@/components/sidebar" className="flex items-center w-full">
            <CiGrid41 className="mr-2" />
            <span className={`transition-all duration-300 ${isOpen ? "opacity-100" : "opacity-0 w-0 overflow-hidden"}`}>
              Overview
            </span>
            </Link>
          </li>

          <li className="flex items-center hover:bg-orange-300 p-3 rounded transition-colors">
            <Link href="@/components/sidebar" className="flex items-center w-full">
            <RxPeople className="mr-2" />
            <span className={`transition-all duration-300 ${isOpen ? "opacity-100" : "opacity-0 w-0 overflow-hidden"}`}>
              Rehabilitasi Klien
            </span>
            </Link>
          </li>

          <li className="flex items-center hover:bg-orange-300 p-3 rounded transition-colors">
            <Link href="@/components/sidebar" className="flex items-center w-full">
            <LuBuilding2 className="mr-2" />
            <span className={`transition-all duration-300 ${isOpen ? "opacity-100" : "opacity-0 w-0 overflow-hidden"}`}>
              Kapasitas & Hunian
            </span>
            </Link>
          </li>

          <li className="flex items-center hover:bg-orange-300 p-3 rounded transition-colors">
            <Link href="@/components/sidebar" className="flex items-center w-full">
            <BsPersonGear className="mr-2" />
            <span className={`transition-all duration-300 ${isOpen ? "opacity-100" : "opacity-0 w-0 overflow-hidden"}`}>
              SDM
            </span>
            </Link>
          </li>
          <li className="flex items-center hover:bg-orange-300 p-3 rounded transition-colors">
            <Link href="@/components/sidebar" className="flex items-center w-full">
            <MdAttachMoney className="mr-2" />
            <span className={`transition-all duration-300 ${isOpen ? "opacity-100" : "opacity-0 w-0 overflow-hidden"}`}>
              Keuangan
            </span>
            </Link>
          </li>

          <li className="flex items-center hover:bg-orange-300 p-3 rounded transition-colors">
            <Link href="@/components/sidebar" className="flex items-center w-full">
            <FaRegStar className="mr-2" />
            <span className={`transition-all duration-300 ${isOpen ? "opacity-100" : "opacity-0 w-0 overflow-hidden"}`}>
              Kepuasan Layanan
            </span>
            </Link>
          </li>
        </ul>
      </nav>
            {/* Overlay untuk mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-white bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}