"use client";


import { RxPeople } from "react-icons/rx";
import { MdOutlineTrendingUp } from "react-icons/md";
import { MdOutlineTrendingDown } from "react-icons/md";
import TabelPetugas from "@/components/tabelpetugaslayanan"
import TabelShiftPetugas from "@/components/tabelshiftpetugas"


export default function OverviewPage() {
    return (
    <div className="p-6">

      {/* Header */}
        <div className="mb-4">
        <h1 className="text-2xl font-bold text-gray-800">
            Overview Dashboard
        </h1>
        <p className="text-sm text-gray-500">
            Ringkasan data dan metrik utama fasilitas rehabilitasi
        </p>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-6">

            {/* Card 1 */}
            <div className="bg-linear-to-r from-blue-500 to-teal-300 p-6 rounded-xl shadow">
            {/* Icon Kanan & Kiri*/}
            <div className="flex justify-between items-start">
            {/*Icon Kiri*/}
            <div className="p-3">
                <RxPeople className="text-white text-xl"/>
            </div>
            <div className="flex justify-between items-start">
            <MdOutlineTrendingUp className="text-green-600 cursor-pointer" />
            <p className="text-sm text-green-600">
            +12%
            </p>
            </div>
            </div>
            <h1 className="text-2xl font-bold p-3 text-gray-800 text-left">
            247
            </h1>
            <p className="text-sm test-grey">
            Total Klien Aktif
            </p>
        </div>

        {/* Card 2 */}
            <div className="bg-linear-to-r from-blue-500 to-teal-300 p-6 rounded-xl shadow">
            {/* Icon Kanan & Kiri*/}
            <div className="flex justify-between items-start">
            {/*Icon Kiri*/}
            <div className= "p-3">
                <MdOutlineTrendingUp className="text-white text-xl"/>
            </div>
            <div className="flex justify-between items-start">
            <MdOutlineTrendingUp className="text-green-600 cursor-pointer" />
            <p className="text-sm text-green-600">
            +5.2%
            </p>
            </div>
            </div>
            <h1 className="text-2xl font-bold p-3 text-gray-800 text-left">
            78.5%
            </h1>
            <p className="text-sm test-grey">
            Tingkat Kesembuhan
            </p>
        </div>


        {/* Card 3 */}
            <div className="bg-linear-to-r from-blue-500 to-teal-300 p-6 rounded-xl shadow">
            {/* Icon Kanan & Kiri*/}
            <div className="flex justify-between items-start">
            {/*Icon Kiri*/}
            <div className="p-3">
                <MdOutlineTrendingDown className="text-white text-xl"/>
            </div>
            <div className="flex justify-between items-start">
            <MdOutlineTrendingDown className="text-orange-600 cursor-pointer" />
            <p className="text-sm text-orange-600">
            +12%
            </p>
            </div>
            </div>
            <h1 className="text-2xl font-bold p-3 text-gray-800 text-left">
            247
            </h1>
            <p className="text-sm test-grey">
            Total Klien Aktif
            </p>
        </div>

    </div>

        <div className="grid grid-cols-2 gap-4 mt-6">


        <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="mt-6 w-full bg-white p-6 rounded-xl shadow">
            <h1 className="text-2xl font-bold p-3 text-green-500 text-left">
                    A. Tingkat Keberhasilan Rehabilitasi Klien (Pulih)
                </h1>
         {/* Tabel 1 */}
        <div>
            <main className="w-full">
            <TabelShiftPetugas />
            </main>
            <p className="text-sm test-gray">
            Total:{" "} 
            <span className="text-bold text-green-400">
                8 Klien </span>{" "} berhasil pulih dari rehabilitasi
            </p>
        </div>
        </div>

        <div className="mt-6 w-full bg-white p-6 rounded-xl shadow">
            <h1 className="text-2xl font-bold p-3 text-green-500 text-left">
                    A. Tingkat Keberhasilan Rehabilitasi Klien (Pulih)
                </h1>
         {/* Tabel 1 */}
        <div>
            <main className="w-full">
            <TabelShiftPetugas />
            </main>
            <p className="text-sm test-gray">
            Total:{" "} 
            <span className="text-bold text-green-400">
                8 Klien </span>{" "} berhasil pulih dari rehabilitasi
            </p>
        </div>
        </div>

        </div>

        </div>
    </div>
    );
}

