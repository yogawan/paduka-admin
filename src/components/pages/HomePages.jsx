import React from "react";
import { Link } from "react-router-dom";
import NavigationMolecules from "../molecules/NavigationMolecules";

const HomePages = () => {
  return (
    <div>
      <NavigationMolecules />

      <div className="pt-[128px]">
        <h1 className="text-center font-thin leading-none text-[44px] pt-4 pb-4 border border-b-1 border-[#FFFFFF] mb-[44px]">
            Semua Data Penduduk
        </h1>
        <div className="flex justify-center pb-4">
          <input className="px-20 py-3 rounded-full bg-[#FCFCFC] border border-[#17171725]" type="search" placeholder="Cari data penduduk" />
          <button className="px-10 py-3 rounded-full text-white bg-[#171717]">Search</button>
        </div>
        <div className="pl-[16px] flex flex-wrap justify-between">
            <div className="p-2 border border-[#17171725] rounded-[32px] mb-[32px]">
              <table className="w-[450px] border-collapse">
                <thead>
                  <tr>
                    <th className="border-b px-4 py-2 text-left">Field</th>
                    <th className="border-b px-4 py-2 text-left">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b px-4 py-2">NIK</td>
                    <td className="border-b px-4 py-2">3310022901250001</td>
                  </tr>
                  <tr>
                    <td className="border-b px-4 py-2">Nama</td>
                    <td className="border-b px-4 py-2">Yogawan Aditya Pratama</td>
                  </tr>
                  <tr>
                    <td className="border-b px-4 py-2">Golongan Darah</td>
                    <td className="border-b px-4 py-2">0</td>
                  </tr>
                  <tr>
                    <td className="border-b px-4 py-2">Tempat Lahir</td>
                    <td className="border-b px-4 py-2">Klaten</td>
                  </tr>
                  <tr>
                    <td className="border-b px-4 py-2">Tanggal Lahir</td>
                    <td className="border-b px-4 py-2">1 Jan 2005</td>
                  </tr>
                  <tr>
                    <td className="border-b px-4 py-2">Jenis Kelamin</td>
                    <td className="border-b px-4 py-2">Laki-laki</td>
                  </tr>
                  <tr>
                    <td className="border-b px-4 py-2">Agama</td>
                    <td className="border-b px-4 py-2">Islam</td>
                  </tr>
                  <tr>
                    <td className="border-b px-4 py-2">Status Perkawinan</td>
                    <td className="border-b px-4 py-2">Belum Menikah</td>
                  </tr>
                  <tr>
                    <td className="border-b px-4 py-2">Pekerjaan</td>
                    <td className="border-b px-4 py-2">Serabutan</td>
                  </tr>
                  <tr>
                    <td className="border-b px-4 py-2">Alamat</td>
                    <td className="border-b px-4 py-2">Prambanan, Klaten</td>
                  </tr>
                  <tr>
                    <td className="border-b px-4 py-2">Kewarganegaraan</td>
                    <td className="border-b px-4 py-2">WNI</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-2 border border-[#17171725] rounded-[32px] mb-[32px]">
              <table className="w-[450px] border-collapse">
                <thead>
                  <tr>
                    <th className="border-b px-4 py-2 text-left">Field</th>
                    <th className="border-b px-4 py-2 text-left">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b px-4 py-2">NIK</td>
                    <td className="border-b px-4 py-2">3310022901250001</td>
                  </tr>
                  <tr>
                    <td className="border-b px-4 py-2">Nama</td>
                    <td className="border-b px-4 py-2">Yogawan Aditya Pratama</td>
                  </tr>
                  <tr>
                    <td className="border-b px-4 py-2">Golongan Darah</td>
                    <td className="border-b px-4 py-2">0</td>
                  </tr>
                  <tr>
                    <td className="border-b px-4 py-2">Tempat Lahir</td>
                    <td className="border-b px-4 py-2">Klaten</td>
                  </tr>
                  <tr>
                    <td className="border-b px-4 py-2">Tanggal Lahir</td>
                    <td className="border-b px-4 py-2">1 Jan 2005</td>
                  </tr>
                  <tr>
                    <td className="border-b px-4 py-2">Jenis Kelamin</td>
                    <td className="border-b px-4 py-2">Laki-laki</td>
                  </tr>
                  <tr>
                    <td className="border-b px-4 py-2">Agama</td>
                    <td className="border-b px-4 py-2">Islam</td>
                  </tr>
                  <tr>
                    <td className="border-b px-4 py-2">Status Perkawinan</td>
                    <td className="border-b px-4 py-2">Belum Menikah</td>
                  </tr>
                  <tr>
                    <td className="border-b px-4 py-2">Pekerjaan</td>
                    <td className="border-b px-4 py-2">Serabutan</td>
                  </tr>
                  <tr>
                    <td className="border-b px-4 py-2">Alamat</td>
                    <td className="border-b px-4 py-2">Prambanan, Klaten</td>
                  </tr>
                  <tr>
                    <td className="border-b px-4 py-2">Kewarganegaraan</td>
                    <td className="border-b px-4 py-2">WNI</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-2 border border-[#17171725] rounded-[32px] mb-[32px]">
              <table className="w-[450px] border-collapse">
                <thead>
                  <tr>
                    <th className="border-b px-4 py-2 text-left">Field</th>
                    <th className="border-b px-4 py-2 text-left">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b px-4 py-2">NIK</td>
                    <td className="border-b px-4 py-2">3310022901250001</td>
                  </tr>
                  <tr>
                    <td className="border-b px-4 py-2">Nama</td>
                    <td className="border-b px-4 py-2">Yogawan Aditya Pratama</td>
                  </tr>
                  <tr>
                    <td className="border-b px-4 py-2">Golongan Darah</td>
                    <td className="border-b px-4 py-2">0</td>
                  </tr>
                  <tr>
                    <td className="border-b px-4 py-2">Tempat Lahir</td>
                    <td className="border-b px-4 py-2">Klaten</td>
                  </tr>
                  <tr>
                    <td className="border-b px-4 py-2">Tanggal Lahir</td>
                    <td className="border-b px-4 py-2">1 Jan 2005</td>
                  </tr>
                  <tr>
                    <td className="border-b px-4 py-2">Jenis Kelamin</td>
                    <td className="border-b px-4 py-2">Laki-laki</td>
                  </tr>
                  <tr>
                    <td className="border-b px-4 py-2">Agama</td>
                    <td className="border-b px-4 py-2">Islam</td>
                  </tr>
                  <tr>
                    <td className="border-b px-4 py-2">Status Perkawinan</td>
                    <td className="border-b px-4 py-2">Belum Menikah</td>
                  </tr>
                  <tr>
                    <td className="border-b px-4 py-2">Pekerjaan</td>
                    <td className="border-b px-4 py-2">Serabutan</td>
                  </tr>
                  <tr>
                    <td className="border-b px-4 py-2">Alamat</td>
                    <td className="border-b px-4 py-2">Prambanan, Klaten</td>
                  </tr>
                  <tr>
                    <td className="border-b px-4 py-2">Kewarganegaraan</td>
                    <td className="border-b px-4 py-2">WNI</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

    </div>
  );
};

export default HomePages;
