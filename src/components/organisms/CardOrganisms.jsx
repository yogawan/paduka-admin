import React, { useState, useEffect } from "react";
import axios from "axios";

const CardOrganisms = () => {
  const [ktpData, setKtpData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  // API
  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/api/ktp")
      .then((response) => {
        setKtpData(response.data);
        setFilteredData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Search
  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    const filtered = ktpData.filter((data) => {
      return (
        data.Nik.includes(query) ||
        data.Nama_Lengkap.toLowerCase().includes(query.toLowerCase())
      );
    });

    setFilteredData(filtered);
  };

  return (
    <div className="ml-[256px] pl-[44px] pt-[16px] h-fit">
      
      {/* Title */}
      <h1 className="text-center font-thin leading-none text-[44px] pt-4 pb-4 border border-b-1 border-[#FFFFFF]">
        Semua Data Penduduk
      </h1>

      {/* Search */}
      <div className="flex justify-center pt-1">
        <input
          className="px-20 py-3 rounded-full bg-[#FFFFFF50] border border-[#17171725]"
          type="search"
          placeholder="Cari data penduduk"
          value={searchQuery}
          onChange={handleSearch}
        />
        <button onClick={() => handleSearch({ target: { value: searchQuery } })} className="px-10 py-3 rounded-full text-white bg-[#171717]">Search</button>
      </div>

      {/* Card */}
      <div className="pl-[16px] flex flex-wrap justify-between mt-10">
        {filteredData.length > 0 ? (
          filteredData.map((data, index) => (
            <div className="p-2 border border-[#17171725] rounded-[24px] mb-[32px]" key={index}>
              <table className="w-[540px] border-collapse">
                <thead>
                  <tr>
                    <th className="border-b px-4 py-2 text-left">Field</th>
                    <th className="border-b px-4 py-2 text-left">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {/* NIK */}
                  <tr>
                    <td className="border-b px-4 py-2">NIK</td>
                    <td className="border-b px-4 py-2">{data.Nik}</td>
                  </tr>

                  {/* Nama */}
                  <tr>
                    <td className="border-b px-4 py-2">Nama</td>
                    <td className="border-b px-4 py-2">{data.Nama_Lengkap}</td>
                  </tr>

                  {/* Golongan Darah */}
                  <tr>
                    <td className="border-b px-4 py-2">Golongan Darah</td>
                    <td className="border-b px-4 py-2">{data.Gol_Darah}</td>
                  </tr>

                  {/* Tempat Lahir */}
                  <tr>
                    <td className="border-b px-4 py-2">Tempat Lahir</td>
                    <td className="border-b px-4 py-2">{data.Tempat_Lahir}</td>
                  </tr>

                  {/* Tanggal Lahir */}
                  <tr>
                    <td className="border-b px-4 py-2">Tanggal Lahir</td>
                    <td className="border-b px-4 py-2">{new Date(data.Tanggal_Lahir).toLocaleDateString()}</td>
                  </tr>

                  {/* Jenis Kelamin */}
                  <tr>
                    <td className="border-b px-4 py-2">Jenis Kelamin</td>
                    <td className="border-b px-4 py-2">{data.Jenis_Kelamin === 'L' ? 'Laki-laki' : 'Perempuan'}</td>
                  </tr>

                  {/* Agama */}
                  <tr>
                    <td className="border-b px-4 py-2">Agama</td>
                    <td className="border-b px-4 py-2">{data.Agama}</td>
                  </tr>

                  {/* Status Perkawinan */}
                  <tr>
                    <td className="border-b px-4 py-2">Status Perkawinan</td>
                    <td className="border-b px-4 py-2">{data.Status_Kawin}</td>
                  </tr>

                  {/* Pekerjaan */}
                  <tr>
                    <td className="border-b px-4 py-2">Pekerjaan</td>
                    <td className="border-b px-4 py-2">{data.Pekerjaan}</td>
                  </tr>

                  {/* Alamat */}
                  <tr>
                    <td className="border-b px-4 py-2">Alamat</td>
                    <td className="border-b px-4 py-2">{data.Provinsi}, {data.Kabupaten}, {data.Kecamatan}, {data.Kelurahan}, {data. Dusun}</td>
                  </tr>

                  {/* Kewarganegaraan */}
                  <tr>
                    <td className="border-b px-4 py-2">Kewarganegaraan</td>
                    <td className="border-b px-4 py-2">{data.Kewarganegaraan}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))
        ) : (
          <p>Data tidak ditemukan</p>
        )}
      </div>
  </div>
  );
};

export default CardOrganisms;
