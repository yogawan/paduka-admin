import React, { useState, useEffect } from "react";
import axios from "axios";

const CardOrganisms = () => {
  const [ktpData, setKtpData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Mengambil data dari API
    axios
      .get("http://127.0.0.1:5000/api/ktp")
      .then((response) => {
        setKtpData(response.data); // Menyimpan data ke state
        setFilteredData(response.data); // Menyimpan data yang sama ke state filter
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query); // Menyimpan nilai input pencarian

    // Menyaring data berdasarkan query pencarian
    const filtered = ktpData.filter((data) => {
      return (
        data.Nik.includes(query) ||
        data.Nama_Lengkap.toLowerCase().includes(query.toLowerCase()) ||
        data.Alamat.toLowerCase().includes(query.toLowerCase())
      );
    });

    setFilteredData(filtered); // Mengupdate data yang sudah difilter
  };

  return (
    <div className="ml-[256px] pl-[44px] pt-[16px] bg-bg-image-gradient bg-cover bg-center h-fit">
      
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
          value={searchQuery} // Menampilkan nilai input pencarian
          onChange={handleSearch} // Menangani perubahan input
        />
        <button className="px-10 py-3 rounded-full text-white bg-[#171717]">Search</button>
      </div>

      {/* Card */}
      {/* <div className="pl-[16px] flex flex-wrap justify-between mt-10">
        {filteredData.length > 0 ? (
          filteredData.map((data, index) => (
            <div className="p-2 border border-[#17171725] rounded-[32px] mb-[32px]" key={index}>
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
                    <td className="border-b px-4 py-2">{data.Nik}</td>
                  </tr>
                  <tr>
                    <td className="border-b px-4 py-2">Nama</td>
                    <td className="border-b px-4 py-2">{data.Nama_Lengkap}</td>
                  </tr>
                  <tr>
                    <td className="border-b px-4 py-2">Golongan Darah</td>
                    <td className="border-b px-4 py-2">{data.Gol_Darah}</td>
                  </tr>
                  <tr>
                    <td className="border-b px-4 py-2">Tempat Lahir</td>
                    <td className="border-b px-4 py-2">{data.Tempat_Lahir}</td>
                  </tr>
                  <tr>
                    <td className="border-b px-4 py-2">Tanggal Lahir</td>
                    <td className="border-b px-4 py-2">{new Date(data.Tanggal_Lahir).toLocaleDateString()}</td>
                  </tr>
                  <tr>
                    <td className="border-b px-4 py-2">Jenis Kelamin</td>
                    <td className="border-b px-4 py-2">{data.Jenis_Kelamin === 'L' ? 'Laki-laki' : 'Perempuan'}</td>
                  </tr>
                  <tr>
                    <td className="border-b px-4 py-2">Agama</td>
                    <td className="border-b px-4 py-2">{data.Agama}</td>
                  </tr>
                  <tr>
                    <td className="border-b px-4 py-2">Status Perkawinan</td>
                    <td className="border-b px-4 py-2">{data.Status_Kawin}</td>
                  </tr>
                  <tr>
                    <td className="border-b px-4 py-2">Pekerjaan</td>
                    <td className="border-b px-4 py-2">{data.Pekerjaan}</td>
                  </tr>
                  <tr>
                    <td className="border-b px-4 py-2">Alamat</td>
                    <td className="border-b px-4 py-2">{data.Alamat}</td>
                  </tr>
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
      </div> */}

      {/* Card */}
      <div className="flex flex-wrap justify-between mt-10">
        <div className="p-2 border border-[#17171725] rounded-[32px] mb-[32px]">
                <table className="w-[550px] border-collapse">
                  <thead>
                    <tr>
                      <th className="border-b px-4 py-2 text-left">Field</th>
                      <th className="border-b px-4 py-2 text-left">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-b px-4 py-2">NIK</td>
                      <td className="border-b px-4 py-2">Text</td>
                    </tr>
                    <tr>
                      <td className="border-b px-4 py-2">Nama</td>
                      <td className="border-b px-4 py-2">Text</td>
                    </tr>
                    <tr>
                      <td className="border-b px-4 py-2">Golongan Darah</td>
                      <td className="border-b px-4 py-2">Text</td>
                    </tr>
                    <tr>
                      <td className="border-b px-4 py-2">Tempat Lahir</td>
                      <td className="border-b px-4 py-2">Text</td>
                    </tr>
                    <tr>
                      <td className="border-b px-4 py-2">Tanggal Lahir</td>
                      <td className="border-b px-4 py-2">Text</td>
                    </tr>
                    <tr>
                      <td className="border-b px-4 py-2">Jenis Kelamin</td>
                      <td className="border-b px-4 py-2">Text</td>
                    </tr>
                    <tr>
                      <td className="border-b px-4 py-2">Agama</td>
                      <td className="border-b px-4 py-2">Text</td>
                    </tr>
                    <tr>
                      <td className="border-b px-4 py-2">Status Perkawinan</td>
                      <td className="border-b px-4 py-2">Text</td>
                    </tr>
                    <tr>
                      <td className="border-b px-4 py-2">Pekerjaan</td>
                      <td className="border-b px-4 py-2">Text</td>
                    </tr>
                    <tr>
                      <td className="border-b px-4 py-2">Alamat</td>
                      <td className="border-b px-4 py-2">Text</td>
                    </tr>
                    <tr>
                      <td className="border-b px-4 py-2">Kewarganegaraan</td>
                      <td className="border-b px-4 py-2">Text</td>
                    </tr>
                  </tbody>
                </table>
        </div>

        <div className="p-2 border border-[#17171725] rounded-[32px] mb-[32px]">
                <table className="w-[550px] border-collapse">
                  <thead>
                    <tr>
                      <th className="border-b px-4 py-2 text-left">Field</th>
                      <th className="border-b px-4 py-2 text-left">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-b px-4 py-2">NIK</td>
                      <td className="border-b px-4 py-2">Text</td>
                    </tr>
                    <tr>
                      <td className="border-b px-4 py-2">Nama</td>
                      <td className="border-b px-4 py-2">Text</td>
                    </tr>
                    <tr>
                      <td className="border-b px-4 py-2">Golongan Darah</td>
                      <td className="border-b px-4 py-2">Text</td>
                    </tr>
                    <tr>
                      <td className="border-b px-4 py-2">Tempat Lahir</td>
                      <td className="border-b px-4 py-2">Text</td>
                    </tr>
                    <tr>
                      <td className="border-b px-4 py-2">Tanggal Lahir</td>
                      <td className="border-b px-4 py-2">Text</td>
                    </tr>
                    <tr>
                      <td className="border-b px-4 py-2">Jenis Kelamin</td>
                      <td className="border-b px-4 py-2">Text</td>
                    </tr>
                    <tr>
                      <td className="border-b px-4 py-2">Agama</td>
                      <td className="border-b px-4 py-2">Text</td>
                    </tr>
                    <tr>
                      <td className="border-b px-4 py-2">Status Perkawinan</td>
                      <td className="border-b px-4 py-2">Text</td>
                    </tr>
                    <tr>
                      <td className="border-b px-4 py-2">Pekerjaan</td>
                      <td className="border-b px-4 py-2">Text</td>
                    </tr>
                    <tr>
                      <td className="border-b px-4 py-2">Alamat</td>
                      <td className="border-b px-4 py-2">Text</td>
                    </tr>
                    <tr>
                      <td className="border-b px-4 py-2">Kewarganegaraan</td>
                      <td className="border-b px-4 py-2">Text</td>
                    </tr>
                  </tbody>
                </table>
        </div>

        <div className="p-2 border border-[#17171725] rounded-[32px] mb-[32px]">
                <table className="w-[550px] border-collapse">
                  <thead>
                    <tr>
                      <th className="border-b px-4 py-2 text-left">Field</th>
                      <th className="border-b px-4 py-2 text-left">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-b px-4 py-2">NIK</td>
                      <td className="border-b px-4 py-2">Text</td>
                    </tr>
                    <tr>
                      <td className="border-b px-4 py-2">Nama</td>
                      <td className="border-b px-4 py-2">Text</td>
                    </tr>
                    <tr>
                      <td className="border-b px-4 py-2">Golongan Darah</td>
                      <td className="border-b px-4 py-2">Text</td>
                    </tr>
                    <tr>
                      <td className="border-b px-4 py-2">Tempat Lahir</td>
                      <td className="border-b px-4 py-2">Text</td>
                    </tr>
                    <tr>
                      <td className="border-b px-4 py-2">Tanggal Lahir</td>
                      <td className="border-b px-4 py-2">Text</td>
                    </tr>
                    <tr>
                      <td className="border-b px-4 py-2">Jenis Kelamin</td>
                      <td className="border-b px-4 py-2">Text</td>
                    </tr>
                    <tr>
                      <td className="border-b px-4 py-2">Agama</td>
                      <td className="border-b px-4 py-2">Text</td>
                    </tr>
                    <tr>
                      <td className="border-b px-4 py-2">Status Perkawinan</td>
                      <td className="border-b px-4 py-2">Text</td>
                    </tr>
                    <tr>
                      <td className="border-b px-4 py-2">Pekerjaan</td>
                      <td className="border-b px-4 py-2">Text</td>
                    </tr>
                    <tr>
                      <td className="border-b px-4 py-2">Alamat</td>
                      <td className="border-b px-4 py-2">Text</td>
                    </tr>
                    <tr>
                      <td className="border-b px-4 py-2">Kewarganegaraan</td>
                      <td className="border-b px-4 py-2">Text</td>
                    </tr>
                  </tbody>
                </table>
        </div>

        <div className="p-2 border border-[#17171725] rounded-[32px] mb-[32px]">
                <table className="w-[550px] border-collapse">
                  <thead>
                    <tr>
                      <th className="border-b px-4 py-2 text-left">Field</th>
                      <th className="border-b px-4 py-2 text-left">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-b px-4 py-2">NIK</td>
                      <td className="border-b px-4 py-2">Text</td>
                    </tr>
                    <tr>
                      <td className="border-b px-4 py-2">Nama</td>
                      <td className="border-b px-4 py-2">Text</td>
                    </tr>
                    <tr>
                      <td className="border-b px-4 py-2">Golongan Darah</td>
                      <td className="border-b px-4 py-2">Text</td>
                    </tr>
                    <tr>
                      <td className="border-b px-4 py-2">Tempat Lahir</td>
                      <td className="border-b px-4 py-2">Text</td>
                    </tr>
                    <tr>
                      <td className="border-b px-4 py-2">Tanggal Lahir</td>
                      <td className="border-b px-4 py-2">Text</td>
                    </tr>
                    <tr>
                      <td className="border-b px-4 py-2">Jenis Kelamin</td>
                      <td className="border-b px-4 py-2">Text</td>
                    </tr>
                    <tr>
                      <td className="border-b px-4 py-2">Agama</td>
                      <td className="border-b px-4 py-2">Text</td>
                    </tr>
                    <tr>
                      <td className="border-b px-4 py-2">Status Perkawinan</td>
                      <td className="border-b px-4 py-2">Text</td>
                    </tr>
                    <tr>
                      <td className="border-b px-4 py-2">Pekerjaan</td>
                      <td className="border-b px-4 py-2">Text</td>
                    </tr>
                    <tr>
                      <td className="border-b px-4 py-2">Alamat</td>
                      <td className="border-b px-4 py-2">Text</td>
                    </tr>
                    <tr>
                      <td className="border-b px-4 py-2">Kewarganegaraan</td>
                      <td className="border-b px-4 py-2">Text</td>
                    </tr>
                  </tbody>
                </table>
        </div>
      </div>
  </div>
  );
};

export default CardOrganisms;
