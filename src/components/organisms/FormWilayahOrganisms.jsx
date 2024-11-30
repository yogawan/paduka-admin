import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FormWilayahOrganisms = () => {
  // Deklarasi state untuk menyimpan data provinsi, kabupaten, kecamatan, kelurahan
  const [provinsi, setProvinsi] = useState([]);   // Menyimpan data provinsi
  const [kabupaten, setKabupaten] = useState([]);   // Menyimpan data kabupaten
  const [kecamatan, setKecamatan] = useState([]);   // Menyimpan data kecamatan
  const [kelurahan, setKelurahan] = useState([]);   // Menyimpan data kelurahan

  // Deklarasi state untuk menyimpan pilihan dari pengguna
  const [selectedProvinsi, setSelectedProvinsi] = useState('');   // Menyimpan ID provinsi yang dipilih
  const [selectedKabupaten, setSelectedKabupaten] = useState(''); // Menyimpan ID kabupaten yang dipilih
  const [selectedKecamatan, setSelectedKecamatan] = useState(''); // Menyimpan ID kecamatan yang dipilih

  // State untuk menandakan apakah data sedang dimuat (loading)
  const [loading, setLoading] = useState(false);

  // Effect untuk mengambil data provinsi dari API saat komponen pertama kali dimuat
  useEffect(() => {
    setLoading(true); // Set loading true ketika mulai mengambil data
    axios.get('https://api.binderbyte.com/wilayah/provinsi?api_key=65f5ba6e519e4a3f5a1b33a17dec44e663b52ba880e3d914b4cd660b3e95ff87')
      .then(response => {
        console.log('Provinsi:', response.data); // Log data provinsi untuk debug
        setProvinsi(response.data.value || []); // Set data provinsi jika berhasil
        setLoading(false); // Set loading false setelah data diterima
      })
      .catch(error => {
        console.error('Error fetching provinsi:', error); // Log error jika gagal mengambil data
        setLoading(false); // Set loading false jika terjadi error
      });
  }, []); // Efek ini hanya dijalankan sekali ketika komponen pertama kali dimuat

  // Effect untuk mengambil data kabupaten saat provinsi dipilih
  useEffect(() => {
    if (selectedProvinsi) { // Cek jika ada provinsi yang dipilih
      setLoading(true); // Set loading true ketika mulai mengambil data
      axios.get(`https://api.binderbyte.com/wilayah/kabupaten?api_key=65f5ba6e519e4a3f5a1b33a17dec44e663b52ba880e3d914b4cd660b3e95ff87&id_provinsi=${selectedProvinsi}`)
        .then(response => {
          console.log('Kabupaten:', response.data); // Log data kabupaten untuk debug
          setKabupaten(response.data.value || []); // Set data kabupaten jika berhasil
          setLoading(false); // Set loading false setelah data diterima
        })
        .catch(error => {
          console.error('Error fetching kabupaten:', error); // Log error jika gagal mengambil data
          setLoading(false); // Set loading false jika terjadi error
        });
    }
  }, [selectedProvinsi]); // Efek ini dijalankan ketika `selectedProvinsi` berubah

  // Effect untuk mengambil data kecamatan saat kabupaten dipilih
  useEffect(() => {
    if (selectedKabupaten) { // Cek jika ada kabupaten yang dipilih
      setLoading(true); // Set loading true ketika mulai mengambil data
      axios.get(`https://api.binderbyte.com/wilayah/kecamatan?api_key=65f5ba6e519e4a3f5a1b33a17dec44e663b52ba880e3d914b4cd660b3e95ff87&id_kabupaten=${selectedKabupaten}`)
        .then(response => {
          console.log('Kecamatan:', response.data); // Log data kecamatan untuk debug
          setKecamatan(response.data.value || []); // Set data kecamatan jika berhasil
          setLoading(false); // Set loading false setelah data diterima
        })
        .catch(error => {
          console.error('Error fetching kecamatan:', error); // Log error jika gagal mengambil data
          setLoading(false); // Set loading false jika terjadi error
        });
    }
  }, [selectedKabupaten]); // Efek ini dijalankan ketika `selectedKabupaten` berubah

  // Effect untuk mengambil data kelurahan saat kecamatan dipilih
  useEffect(() => {
    if (selectedKecamatan) { // Cek jika ada kecamatan yang dipilih
      setLoading(true); // Set loading true ketika mulai mengambil data
      axios.get(`https://api.binderbyte.com/wilayah/kelurahan?api_key=65f5ba6e519e4a3f5a1b33a17dec44e663b52ba880e3d914b4cd660b3e95ff87&id_kecamatan=${selectedKecamatan}`)
        .then(response => {
          console.log('Kelurahan:', response.data); // Log data kelurahan untuk debug
          setKelurahan(response.data.value || []); // Set data kelurahan jika berhasil
          setLoading(false); // Set loading false setelah data diterima
        })
        .catch(error => {
          console.error('Error fetching kelurahan:', error); // Log error jika gagal mengambil data
          setLoading(false); // Set loading false jika terjadi error
        });
    }
  }, [selectedKecamatan]); // Efek ini dijalankan ketika `selectedKecamatan` berubah

  // Fungsi untuk menangani saat form disubmit
  const handleSubmit = (e) => {
    e.preventDefault(); // Mencegah reload halaman saat submit
    console.log({
      provinsi: selectedProvinsi,    // Tampilkan provinsi yang dipilih
      kabupaten: selectedKabupaten,  // Tampilkan kabupaten yang dipilih
      kecamatan: selectedKecamatan,  // Tampilkan kecamatan yang dipilih
      kelurahan: selectedKecamatan,  // Tampilkan kelurahan yang dipilih (seharusnya selectedKelurahan)
    });
  };

  return (
    <form onSubmit={handleSubmit}> {/* Form yang menangani submit */}

      {/* Dropdown untuk memilih Provinsi */}
      <div>
        <label>Provinsi:</label>
        <select onChange={(e) => setSelectedProvinsi(e.target.value)} value={selectedProvinsi}>
          <option value="">Pilih Provinsi</option>
          {loading ? <option>Loading...</option> : 
            provinsi.map(prov => (
              <option key={prov.id} value={prov.id}>{prov.name}</option> // Menampilkan pilihan provinsi
            ))}
        </select>
      </div>

      {/* Dropdown untuk memilih Kabupaten */}
      <div>
        <label>Kabupaten:</label>
        <select onChange={(e) => setSelectedKabupaten(e.target.value)} value={selectedKabupaten} disabled={!selectedProvinsi}>
          <option value="">Pilih Kabupaten</option>
          {loading ? <option>Loading...</option> : 
            kabupaten.map(kab => (
              <option key={kab.id} value={kab.id}>{kab.name}</option> // Menampilkan pilihan kabupaten
            ))}
        </select>
      </div>

      {/* Dropdown untuk memilih Kecamatan */}
      <div>
        <label>Kecamatan:</label>
        <select onChange={(e) => setSelectedKecamatan(e.target.value)} value={selectedKecamatan} disabled={!selectedKabupaten}>
          <option value="">Pilih Kecamatan</option>
          {loading ? <option>Loading...</option> : 
            kecamatan.map(kec => (
              <option key={kec.id} value={kec.id}>{kec.name}</option> // Menampilkan pilihan kecamatan
            ))}
        </select>
      </div>

      {/* Dropdown untuk memilih Kelurahan */}
      <div>
        <label>Kelurahan:</label>
        <select disabled={!selectedKecamatan}>
          <option value="">Pilih Kelurahan</option>
          {loading ? <option>Loading...</option> : 
            kelurahan.map(kel => (
              <option key={kel.id} value={kel.id}>{kel.name}</option> // Menampilkan pilihan kelurahan
            ))}
        </select>
      </div>

      {/* Tombol untuk submit form */}
      <button type="submit">Save</button>
    </form>
  );
};

export default FormWilayahOrganisms;
