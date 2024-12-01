import React, { useState } from "react";
import axios from "axios";

import NavigationOrganisms from "../organisms/NavigationOrganisms";

const FormOrganisms = () => {
  const [formData, setFormData] = useState({
    Nik: '',
    Nama_Lengkap: '',
    Gol_Darah: '',
    Tempat_Lahir: '',
    Tanggal_Lahir: '',
    Jenis_Kelamin: '',
    Agama: '',
    Status_Kawin: '',
    Pekerjaan: '',
    Alamat: '',
    Kewarganegaraan: ''
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
      const response = await axios.post('http://127.0.0.1:5000/api/ktp', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Data berhasil dikirim:', response.data);
      alert("Data Penduduk Berhasil di Tambahkan.")
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
    }
  };
  

  return (
    <div>
      <NavigationOrganisms></NavigationOrganisms>
      <div className="flex justify-center items-center flex-wrap-reverse pt-[128px]">
        <div className="w-[610px] p-6">
          <img className="w-[100%]" src="/ilustrator.png" alt="" />
          <img className="w-[95%] mt-[-44px]" src="/image_second.png" alt="" />
        </div>
        <div className="w-[610px] p-6">
          <h1 className="text-center font-thin leading-none text-[44px] pt-4 pb-4 border border-b-1 border-[#FFFFFF]">
            Form Input <br />Data Penduduk
          </h1>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* NIK */}
            <div className="space-y-2">
              <label className="block font-medium text-gray-700 ml-3" htmlFor="nik">
                NIK
              </label>
              <input
                type="text"
                name="Nik"
                value={formData.Nik}
                onChange={handleChange}
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
                type="text"
                name="Nama_Lengkap"
                value={formData.Nama_Lengkap}
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
                  type="text"
                  name="Gol_Darah"
                  value={formData.Gol_Darah}
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
                  type="text"
                  name="Tempat_Lahir"
                  value={formData.Tempat_Lahir}
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
                  type="date"
                  name="Tanggal_Lahir"
                  value={formData.Tanggal_Lahir}
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
                  type="text"
                  name="Jenis_Kelamin"
                  value={formData.Jenis_Kelamin}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-[#171717] text-[#17171795]"
                  required
                >
                  <option value="">Pilih</option>
                  <option value="L">Laki-laki</option>
                  <option value="P">Perempuan</option>
                </select>
              </div>

              {/* Agama */}
              <div className="space-y-2 w-[49%]">
                <label className="block font-medium text-gray-700 ml-3" htmlFor="agama">
                  Agama
                </label>
                <select
                  type="text"
                  name="Agama"
                  value={formData.Agama}
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
                  type="text"
                  name="Status_Kawin"
                  value={formData.Status_Kawin}
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
                type="text"
                name="Pekerjaan"
                value={formData.Pekerjaan}
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
                type="text"
                name="Alamat"
                value={formData.Alamat}
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
                  type="text"
                  name="Kewarganegaraan"
                  value={formData.Kewarganegaraan}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#171717] text-[#17171795]"
                  required
                >
                  <option value="">Pilih</option>
                  <option value="WNI">WNI</option>
                  <option value="WNA">WNA</option>
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