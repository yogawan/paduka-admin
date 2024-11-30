import React, { useState } from "react";

import NavigationMolecules from "../molecules/NavigationMolecules";

const FormOrganisms = () => {
  const [formData, setFormData] = useState({
    nama: "",
    nik: "",
    gol_darah: "",
    tempatLahir: "",
    tanggalLahir: "",
    jenisKelamin: "",
    agama: "",
    statusPerkawinan: "",
    pekerjaan: "",
    alamat: "",
    kewarganegaraan: "",
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
    console.log("Berhasil dikirim.");
  };

  return (
    <div>
      <NavigationMolecules></NavigationMolecules>
      <div className="flex justify-center items-center flex-wrap-reverse pt-[128px]">
        <div className="w-[610px] p-6">
          <img className="w-[100%]" src="/ilustrator.png" alt="" />
          <img className="w-[95%] mt-[-44px]" src="/image_second.png" alt="" />
        </div>
        <div className="w-[610px] p-6">
          <h1 className="text-center font-thin leading-none text-[44px] pt-4 pb-4 border border-b-1 border-[#FFFFFF]">
            Form Input <br />Data Penduduk
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* NIK */}
            <div className="space-y-2">
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
                className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#171717] text-[#17171795]"
                required
                placeholder="Masukan nik anda"
              />
            </div>

            {/* Nama Lengkap */}
            <div className="space-y-2">
              <label className="block font-medium text-gray-700 ml-3" htmlFor="nama">
                Nama Lengkap
              </label>
              <input
                id="nama"
                type="text"
                name="nama"
                value={formData.nama}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#171717] text-[#17171795]"
                required
                placeholder="Masukan nama lengkap anda"
              />
            </div>

            {/* Gol. Darah */}
            <div className="space-y-2">
                <label className="block font-medium text-gray-700 ml-3" htmlFor="gol_darah">
                  Gol. Darah
                </label>
                <select
                  id="gol_darah"
                  name="gol_darah"
                  value={formData.gol_darah}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#171717] text-[#17171795]"
                  required
                >
                  <option value="">Pilih</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="AB">AB</option>
                  <option value="O">O</option>
                </select>
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
                  className="w-full p-[13px] border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-[#171717] text-[#17171795]"
                  required
                  placeholder="Masukan kota/kabupaten"
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
                  className="w-full p-3 border border-gray-300 rounded-r-full focus:outline-none focus:ring-2 focus:ring-[#171717] text-[#17171795]"
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
                  className="w-full p-4 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-[#171717] text-[#17171795]"
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
                  className="w-full p-4 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-[#171717] text-[#17171795]"
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
                  className="w-full p-4 border border-gray-300 rounded-r-full focus:outline-none focus:ring-2 focus:ring-[#171717] text-[#17171795]"
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
            <div className="space-y-1">
              <label className="block font-medium text-gray-700 ml-3" htmlFor="pekerjaan">
                Pekerjaan
              </label>
              <input
                id="pekerjaan"
                type="text"
                name="pekerjaan"
                value={formData.pekerjaan}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#171717] text-[#17171795]"
                required
                placeholder="Masukan pekerjaan anda"
              />
            </div>

            {/* Alamat */}
            <div className="space-y-1 mt-[0px]">
              <label className="block font-medium text-gray-700 ml-3" htmlFor="alamat">
                Alamat
              </label>
              <textarea
                id="alamat"
                name="alamat"
                value={formData.alamat}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#171717] text-[#17171795]"
                rows={3}
                required
              ></textarea>
            </div>

            {/* Kewarganegaraan */}
            <div className="space-y-2">
                <label className="block font-medium text-gray-700 ml-3" htmlFor="kewarganegaraan">
                  Kewarganegaraan
                </label>
                <select
                  id="kewarganegaraan"
                  name="kewarganegaraan"
                  value={formData.kewarganegaraan}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#171717] text-[#17171795]"
                  required
                >
                  <option value="">Pilih</option>
                  <option value="Indonesia">WNI</option>
                  <option value="Asing">WNA</option>
                </select>
            </div>

            {/* Button */}
            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="w-[100%] py-5 px-8 text-white bg-[#171717] rounded-full hover:bg-gray-700"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormOrganisms;
