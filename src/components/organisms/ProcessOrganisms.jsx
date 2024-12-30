import React, { useEffect, useState } from "react";
import axios from "axios";

const ProcessOrganisms = () => {
  const [approvedData, setApprovedData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/api/alluserdata");
        // Filter hanya data dengan status "Disetujui"
        const approved = response.data.filter((item) => item.Status === "Sedang di Review");
        setApprovedData(approved);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {/* Jika tidak ada data dengan status "Disetujui" */}
      {approvedData.length === 0 ? (
        <p>No approved data available.</p>
      ) : (
        <div className="flex flex-col">
          <h1 className="text-[16px] font-thin mb-4">Proses</h1>
          {approvedData.map((user) => (
            <div
              key={user.id}
              className="bg-[#F9F9F9] m-2 p-5 rounded-[24px] w-[400px]"
            >
              {/* Ikon atau ilustrasi */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={48}
                height={48}
                viewBox="0 0 24 24"
              >
                <path
                  fill="#3b3b3b"
                  fillRule="evenodd"
                  d="M10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12s0-5.657 1.172-6.828S6.229 4 10 4m3.25 5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75m1 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m1 3a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75M11 9a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 8c4 0 4-.895 4-2s-1.79-2-4-2s-4 .895-4 2s0 2 4 2"
                  clipRule="evenodd"
                ></path>
              </svg>

              {/* NIK */}
              <p className="p-2 border border-[#17171715] text-[12px] font-thin w-fit rounded-full mt-2">
                {user.Nik}
              </p>

              {/* Nama Lengkap */}
              <p className="text-[32px] font-thin">{user.Nama_Lengkap}</p>

              {/* Alamat Sebelumnya */}
              <div className="flex flex-wrap items-center mt-3">
                <p className="mr-3 font-thin">{user.Provinsi}</p>
                <p className="p-2 border border-[#17171715] text-[12px] font-thin w-fit rounded-full">
                  Alamat Sebelumnya
                </p>
              </div>

              {/* Alamat Sekarang */}
              <div className="flex flex-wrap items-center mt-3">
                <p className="mr-3 font-thin">{user.NewProvinsi}</p>
                <p className="p-2 border border-[#17171715] text-[12px] font-thin w-fit rounded-full">
                  Alamat Sekarang
                </p>
              </div>

              {/* Status */}
              <div className="flex items-center mt-3">
                <p className="mr-1 text-yellow-500">{user.Status}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="yellow"
                    fillRule="evenodd"
                    d="M1.25 7A.75.75 0 0 1 2 6.25h8a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 7m0 5a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75M17 17a5 5 0 1 0 0-10a5 5 0 0 0 0 10m.75-7a.75.75 0 0 0-1.5 0v1.846c0 .18.065.355.183.491l1 1.154a.75.75 0 0 0 1.134-.982l-.817-.943z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProcessOrganisms;
