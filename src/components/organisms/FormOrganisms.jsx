import React, { useState } from "react";

const FormOrganisms = () => {
  const [formData, setFormData] = useState({
    nama: "",
    nik: "",
    tempatLahir: "",
    tanggalLahir: "",
    jenisKelamin: "",
    agama: "",
    statusPerkawinan: "",
    pekerjaan: "",
    alamat: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Form submitted!");
  };

  return (
    <div>
      <div className="flex justify-center items-center flex-wrap">
        <div className="w-[610px] p-6">
            <h1 className="text-center font-thin leading-none text-[44px] pt-4 pb-4 border border-b-1 border-[#FFFFFF]">Form Input <br />Data Penduduk</h1>
            <img className="w-[100%]" src="/ilustrator.png" alt="" />
        </div>
        <div className="w-[610px] p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex justify-between">
                {/* NIK */}
                <div className="space-y-2 w-[50%]">
                <label className="block font-medium text-gray-700 ml-3" htmlFor="nik">
                    NIK
                </label>
                <input
                    id="nik"
                    type="text"
                    name="nik"
                    value={formData.nik}
                    onChange={handleChange}
                    maxLength={16}
                    className="w-full p-3 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                </div>

                {/* Nama Lengkap */}
                <div className="space-y-2 w-[50%]">
                <label className="block font-medium text-gray-700 ml-3" htmlFor="nama">
                    Nama Lengkap
                </label>
                <input
                    id="nama"
                    type="text"
                    name="nama"
                    value={formData.nama}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-r-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                </div>
            </div>

            <div className="flex justify-between">
                {/* Tempat Lahir */}
                <div className="space-y-2 w-[40%]">
                <label className="block font-medium text-gray-700 ml-3" htmlFor="tempatLahir">
                    Tempat Lahir
                </label>
                <input
                    id="tempatLahir"
                    type="text"
                    name="tempatLahir"
                    value={formData.tempatLahir}
                    onChange={handleChange}
                    className="w-full p-[13px] border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                </div>

                {/* Tanggal Lahir */}
                <div className="space-y-2 w-[60%]">
                <label className="block font-medium text-gray-700 ml-3" htmlFor="tanggalLahir">
                    Tanggal Lahir
                </label>
                <input
                    id="tanggalLahir"
                    type="date"
                    name="tanggalLahir"
                    value={formData.tanggalLahir}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-r-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                </div>
            </div>

            <div className="flex justify-between">
                {/* Jenis Kelamin */}
                <div className="space-y-2 w-[49%]">
                <label className="block font-medium text-gray-700 ml-3" htmlFor="jenisKelamin">
                    Jenis Kelamin
                </label>
                <select
                    id="jenisKelamin"
                    name="jenisKelamin"
                    value={formData.jenisKelamin}
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                >
                    <option value="">Pilih</option>
                    <option value="Laki-laki">Laki-laki</option>
                    <option value="Perempuan">Perempuan</option>
                </select>
                </div>

                {/* Agama */}
                <div className="space-y-2 w-[49%]">
                <label className="block font-medium text-gray-700 ml-3" htmlFor="agama">
                    Agama
                </label>
                <select
                    id="agama"
                    name="agama"
                    value={formData.agama}
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                >
                    <option value="">Pilih</option>
                    <option value="Islam">Islam</option>
                    <option value="Kristen">Kristen</option>
                    <option value="Katolik">Katolik</option>
                    <option value="Hindu">Hindu</option>
                    <option value="Buddha">Buddha</option>
                    <option value="Konghucu">Konghucu</option>
                </select>
                </div>

                {/* Status Perkawinan */}
                <div className="space-y-2 w-[49%]">
                <label className="block font-medium text-gray-700 ml-3" htmlFor="statusPerkawinan">
                    Status Kawin
                </label>
                <select
                    id="statusPerkawinan"
                    name="statusPerkawinan"
                    value={formData.statusPerkawinan}
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-300 rounded-r-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                >
                    <option value="">Pilih</option>
                    <option value="Belum Kawin">Belum Kawin</option>
                    <option value="Kawin">Kawin</option>
                    <option value="Cerai Hidup">Cerai Hidup</option>
                    <option value="Cerai Mati">Cerai Mati</option>
                </select>
                </div>
            </div>

            {/* Pekerjaan */}
            <div className="space-y-2">
                <label className="block font-medium text-gray-700 ml-3" htmlFor="pekerjaan">
                Pekerjaan
                </label>
                <input
                id="pekerjaan"
                type="text"
                name="pekerjaan"
                value={formData.pekerjaan}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                />
            </div>

            {/* Alamat */}
            <div className="space-y-2">
                <label className="block font-medium text-gray-700 ml-3" htmlFor="alamat">
                Alamat
                </label>
                <textarea
                id="alamat"
                name="alamat"
                value={formData.alamat}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={3}
                required
                ></textarea>
            </div>

            <button
                type="submit"
                className="w-full py-5 bg-[#171717] text-white font-semibold rounded-full hover:bg-blue-700 transition-colors"
            >
                Kirim Data
            </button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default FormOrganisms;
