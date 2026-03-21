"use client";

export default function TabelKeberhasilan() {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                    <tr> 
                        <th className="border px-4 py-2">No</th>
                        <th className="border px-4 py-2">Nama</th>
                        <th className="border px-4 py-2">Umur</th>
                        <th className="border px-4 py-2">Alamat</th>
                        <th className="border px-4 py-2">Email</th>
                        <th className="border px-4 py-2">No HP</th>
                        <th className="border px-4 py-2">Status</th>
                    </tr>   
                </thead>
                <tbody>
                <tr className="text-center">
            <td className="border px-4 py-2">1</td>
            <td className="border px-4 py-2">Andi</td>
            <td className="border px-4 py-2">21</td>
            <td className="border px-4 py-2">Jakarta</td>
            <td className="border px-4 py-2">andi@mail.com</td>
            <td className="border px-4 py-2">08123456789</td>
            <td className="border px-4 py-2">Aktif</td>
            </tr>

            <tr className="text-center">
            <td className="border px-4 py-2">2</td>
            <td className="border px-4 py-2">Budi</td>
            <td className="border px-4 py-2">23</td>
            <td className="border px-4 py-2">Bandung</td>
            <td className="border px-4 py-2">budi@mail.com</td>
            <td className="border px-4 py-2">08987654321</td>
            <td className="border px-4 py-2">Nonaktif</td>
            </tr>
            </tbody>
            </table>
        </div>
    )
}