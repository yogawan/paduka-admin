import React, { useState } from "react";
import axios from "axios";
import NavigationOrganisms from "../organisms/NavigationOrganisms";

const FormOrganisms = () => {
  const [formData, setFormData] = useState({
    Nik: "",
    Nama_Lengkap: "",
    Gol_Darah: "",
    Tempat_Lahir: "",
    Tanggal_Lahir: "",
    Jenis_Kelamin: "",
    Agama: "",
    Status_Kawin: "",

    Pekerjaan: "",
    Provinsi: "",
    Kabupaten: "",
    Kecamatan: "",
    Kelurahan: "",
    Dusun: "",
    Kewarganegaraan: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/api/ktp",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Data berhasil dikirim:", response.data);
      setFormData({
        Nik: "",
        Nama_Lengkap: "",
        Gol_Darah: "",
        Tempat_Lahir: "",
        Tanggal_Lahir: "",
        Jenis_Kelamin: "",
        Agama: "",
        Status_Kawin: "",
        Pekerjaan: "",
        Provinsi: "",
        Kabupaten: "",
        Kecamatan: "",
        Kelurahan: "",
        Dusun: "",
        Kewarganegaraan: "",
      });
      alert("Data Penduduk Berhasil di Tambahkan.");
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
    }
  };
  
  return (
    <div className="bg-bg-image-gradient bg-cover bg-center h-screen">
      <NavigationOrganisms></NavigationOrganisms>
      <div className="flex justify-end items-center flex-wrap">
        <div className="ml-[280px] w-[1440px] h-full p-3 rounded-[24px]">

          {/* Form */}
          <form className="flex justify-between items-start space-y-6" onSubmit={handleSubmit}>
            
            {/* Left */}
            <div className="w-[50%] p-4">
              {/* NIK */}
              <div className="space-y-2">
                <label
                  className="mt-[12px] block font-medium text-gray-700 ml-3"
                  htmlFor="nik"
                >
                  NIK
                </label>
                <input
                  type="text"
                  name="Nik"
                  value={formData.Nik}
                  onChange={handleChange}
                  className="w-full p-3 bg-transparent border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#171717] text-[#17171795]"
                  required
                  placeholder="Masukan nik anda"
                />
              </div>

              {/* Nama Lengkap */}
              <div className="space-y-2">
                <label
                  className="mt-[12px] block font-medium text-gray-700 ml-3"
                  htmlFor="nama"
                >
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="Nama_Lengkap"
                  value={formData.Nama_Lengkap}
                  onChange={handleChange}
                  className="w-full bg-[#FFFFFF50] p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#171717] text-[#17171795]"
                  required
                  placeholder="Masukan nama lengkap anda"
                />
              </div>

              {/* Gol. Darah */}
              <div className="space-y-2">
                <label
                  className="mt-[12px] block font-medium text-gray-700 ml-3"
                  htmlFor="gol_darah"
                >
                  Gol. Darah
                </label>
                <select
                  type="text"
                  name="Gol_Darah"
                  value={formData.Gol_Darah}
                  onChange={handleChange}
                  className="w-full bg-[#FFFFFF50] p-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#171717] text-[#17171795]"
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
                  <label
                    className="mt-[12px] block font-medium text-gray-700 ml-3"
                    htmlFor="tempatLahir"
                  >
                    Tempat Lahir
                  </label>
                  <input
                    type="text"
                    name="Tempat_Lahir"
                    value={formData.Tempat_Lahir}
                    onChange={handleChange}
                    className="w-full bg-[#FFFFFF50] p-[13px] border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-[#171717] text-[#17171795]"
                    required
                    placeholder="Masukan kota/kabupaten"
                  />
                </div>

                {/* Tanggal Lahir */}
                <div className="space-y-2 w-[60%]">
                  <label
                    className="mt-[12px] block font-medium text-gray-700 ml-3"
                    htmlFor="tanggalLahir"
                  >
                    Tanggal Lahir
                  </label>
                  <input
                    type="date"
                    name="Tanggal_Lahir"
                    value={formData.Tanggal_Lahir}
                    onChange={handleChange}
                    className="w-full bg-[#FFFFFF50] p-3 border border-gray-300 rounded-r-full focus:outline-none focus:ring-2 focus:ring-[#171717] text-[#17171795]"
                    required
                  />
                </div>
              </div>

              {/* Jenis Kelamin */}
              <div className="space-y-2">
                <label
                  className="mt-[12px] block font-medium text-gray-700 ml-3"
                  htmlFor="jenisKelamin"
                >
                  Jenis Kelamin
                </label>
                <select
                  type="text"
                  name="Jenis_Kelamin"
                  value={formData.Jenis_Kelamin}
                  onChange={handleChange}
                  className="w-[100%] bg-[#FFFFFF50] p-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#171717] text-[#17171795]"
                  required
                >
                  <option value="">Pilih</option>
                  <option value="L">Laki-laki</option>
                  <option value="P">Perempuan</option>
                </select>
              </div>

              {/* Agama */}
              <div className="space-y-2">
                <label
                  className="mt-[12px] block font-medium text-gray-700 ml-3"
                  htmlFor="agama"
                >
                  Agama
                </label>
                <select
                  type="text"
                  name="Agama"
                  value={formData.Agama}
                  onChange={handleChange}
                  className="w-full bg-[#FFFFFF50] p-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#171717] text-[#17171795]"
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
            <div className="space-y-2">
              <label
                className="mt-[12px] block font-medium text-gray-700 ml-3"
                htmlFor="statusPerkawinan"
              >
                Status Kawin
              </label>
              <select
                type="text"
                name="Status_Kawin"
                value={formData.Status_Kawin}
                onChange={handleChange}
                className="w-full bg-[#FFFFFF50] p-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#171717] text-[#17171795]"
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

            {/* Right */}
            <div className="w-[50%] p-4">
              {/* Pekerjaan */}
              <div className="space-y-1">
                <label
                  className="block font-medium text-gray-700 ml-3"
                  htmlFor="pekerjaan"
                >
                  Pekerjaan
                </label>
                <select
                  name="Pekerjaan"
                  value={formData.Pekerjaan}
                  onChange={handleChange}
                  className="w-full bg-[#FFFFFF50] p-4 border border-[#17171725] rounded-full focus:outline-none focus:ring-2 focus:ring-[#171717] text-[#17171795]"
                  required
                >
                  <option value="">Pilih Pekerjaan</option>
                  <option value="Belum / Tidak Bekerja">Belum / Tidak Bekerja</option>
                  <option value="Mengurus Rumah Tangga">Mengurus Rumah Tangga</option>
                  <option value="Pelajar / Mahasiswa">Pelajar / Mahasiswa</option>
                  <option value="Pensiunan">Pensiunan</option>
                  <option value="Pegawai Negeri Sipil">Pegawai Negeri Sipil</option>
                  <option value="Tentara Nasional Indonesia">Tentara Nasional Indonesia</option>
                  <option value="Kepolisian RI">Kepolisian RI</option>
                  <option value="Perdagangan">Perdagangan</option>
                </select>
              </div>

              {/* Alamat */}
              <div className="space-y-1">
                <label
                  className="mt-[12px] block font-medium text-gray-700 ml-3"
                  htmlFor="pekerjaan"
                >
                  Alamat
                </label>
              </div>
              <div className="bg-[#FFFFFF50]  rounded-[32px] mt-2 p-2 border border-[#17171725]">
                <div className="space-y-2">
                  <select
                    type="text"
                    name="Provinsi"
                    value={formData.Provinsi}
                    onChange={handleChange}
                    className="w-full p-4 bg-[#FFFFFF50] rounded-full focus:outline-none focus:ring-2 focus:ring-[#171717] text-[#17171795]"
                    required
                  >
                    <option value="">Provinsi</option>
                    <option value="DIY">Daerah Istimewa Yogyakarta</option>
                  </select>

                  <select
                    type="text"
                    name="Kabupaten"
                    value={formData.Kabupaten}
                    onChange={handleChange}
                    className="w-full p-4 bg-[#FFFFFF50] rounded-full focus:outline-none focus:ring-2 focus:ring-[#171717] text-[#17171795]"
                    required
                  >
                    <option value="">Kabupaten/Kota</option>
                    <option value="Sleman">Sleman</option>
                    <option value="Yogyakarta">Yogyakarta</option>
                    <option value="Gunung Kidul">Gunung Kidul</option>
                    <option value="Bantul">Bantul</option>
                    <option value="Kulon Progo">Kulon Progo</option>
                  </select>

                  <select
                    type="text"
                    name="Kecamatan"
                    value={formData.Kecamatan}
                    onChange={handleChange}
                    className="w-full p-4 bg-[#FFFFFF50] rounded-full focus:outline-none focus:ring-2 focus:ring-[#171717] text-[#17171795]"
                    required
                  >
                    <option value="">Kecamatan</option>
                    <option value="Samigaluh">Samigaluh</option>
                    <option value="Kalibawang">Kalibawang</option>
                    <option value="Girimulyo">Girimulyo</option>
                    <option value="Nangulan">Nanggulan</option>
                  </select>

                  <select
                    type="text"
                    name="Kelurahan"
                    value={formData.Kelurahan}
                    onChange={handleChange}
                    className="w-full p-4 bg-[#FFFFFF50] rounded-full focus:outline-none focus:ring-2 focus:ring-[#171717] text-[#17171795]"
                    required
                  >
                    <option value="">Kelurahan/Desa</option>
                    <option value="Kembang">Kembang</option>
                    <option value="Jatisarono">Jatisarono</option>
                    <option value="Wijimulyo">Wijimulyo</option>
                    <option value="Tanjung">Tanjungharjo</option>
                  </select>
              
                  <textarea
                    type="text"
                    name="Dusun"
                    placeholder="Masukan Alamat"
                    value={formData.Dusun}
                    onChange={handleChange}
                    className="w-full p-3 bg-[#FFFFFF50] border border-[#17171725] rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#171717] text-[#17171795]"
                    rows={3}
                    required
                ></textarea>
                </div>
              </div>

              {/* Kewarganegaraan */}
              <div className="space-y-2">
                <label
                  className="mt-[12px] block font-medium text-gray-700 ml-3"
                  htmlFor="kewarganegaraan"
                >
                  Kewarganegaraan
                </label>
                <select
                  type="text"
                  name="Kewarganegaraan"
                  value={formData.Kewarganegaraan}
                  onChange={handleChange}
                  className="w-full p-4 bg-[#FFFFFF50] border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#171717] text-[#17171795]"
                  required
                >
                  <option value="">Pilih</option>
                  <option value="WNI">WNI</option>
                  <option value="WNA">WNA</option>
                </select>
              </div>

              {/* Button */}
              <div className="flex justify-end">
                {/* Tombol dengan Efek Gradient dan Blur */}
                <div className="relative inline-flex group mt-8">
                  {/* Background Gradient dan Blur Effect */}
                  <div
                    className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"
                  ></div>

                  {/* Tombol dengan Efek Hover dan Fokus */}
                  <button 
                    type="submit"
                    className="relative inline-flex items-center justify-center px-12 py-6 text-lg font-bold text-white bg-[#171717] rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-all duration-200"
                  >
                    Simpan Data
                  </button>
                  
                </div>
              </div>

            </div>
          </form>

        </div>
            
      </div>
    </div>
  );
};

export default FormOrganisms;
