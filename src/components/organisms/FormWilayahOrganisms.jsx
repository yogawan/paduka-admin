import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FormWilayahOrganisms = () => {
  const [provinsi, setProvinsi] = useState([]);
  const [kabupaten, setKabupaten] = useState([]);
  const [kecamatan, setKecamatan] = useState([]);
  const [kelurahan, setKelurahan] = useState([]);

  const [selectedProvinsi, setSelectedProvinsi] = useState('');
  const [selectedKabupaten, setSelectedKabupaten] = useState('');
  const [selectedKecamatan, setSelectedKecamatan] = useState('');

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get('https://api.binderbyte.com/wilayah/provinsi?api_key=65f5ba6e519e4a3f5a1b33a17dec44e663b52ba880e3d914b4cd660b3e95ff87')
      .then(response => {
        setProvinsi(response.data.value || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (selectedProvinsi) {
      setLoading(true);
      axios.get(`https://api.binderbyte.com/wilayah/kabupaten?api_key=65f5ba6e519e4a3f5a1b33a17dec44e663b52ba880e3d914b4cd660b3e95ff87&id_provinsi=${selectedProvinsi}`)
        .then(response => {
          setKabupaten(response.data.value || []);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [selectedProvinsi]);

  useEffect(() => {
    if (selectedKabupaten) {
      setLoading(true);
      axios.get(`https://api.binderbyte.com/wilayah/kecamatan?api_key=65f5ba6e519e4a3f5a1b33a17dec44e663b52ba880e3d914b4cd660b3e95ff87&id_kabupaten=${selectedKabupaten}`)
        .then(response => {
          setKecamatan(response.data.value || []);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [selectedKabupaten]);

  useEffect(() => {
    if (selectedKecamatan) {
      setLoading(true);
      axios.get(`https://api.binderbyte.com/wilayah/kelurahan?api_key=65f5ba6e519e4a3f5a1b33a17dec44e663b52ba880e3d914b4cd660b3e95ff87&id_kecamatan=${selectedKecamatan}`)
        .then(response => {
          setKelurahan(response.data.value || []);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [selectedKecamatan]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      provinsi: selectedProvinsi,
      kabupaten: selectedKabupaten,
      kecamatan: selectedKecamatan,
      kelurahan: selectedKecamatan,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Provinsi:</label>
        <select onChange={(e) => setSelectedProvinsi(e.target.value)} value={selectedProvinsi}>
          <option value="">Pilih Provinsi</option>
          {loading ? <option>Loading...</option> : 
            provinsi.map(prov => (
              <option key={prov.id} value={prov.id}>{prov.name}</option>
            ))}
        </select>
      </div>
      <div>
        <label>Kabupaten:</label>
        <select onChange={(e) => setSelectedKabupaten(e.target.value)} value={selectedKabupaten} disabled={!selectedProvinsi}>
          <option value="">Pilih Kabupaten</option>
          {loading ? <option>Loading...</option> : 
            kabupaten.map(kab => (
              <option key={kab.id} value={kab.id}>{kab.name}</option>
            ))}
        </select>
      </div>
      <div>
        <label>Kecamatan:</label>
        <select onChange={(e) => setSelectedKecamatan(e.target.value)} value={selectedKecamatan} disabled={!selectedKabupaten}>
          <option value="">Pilih Kecamatan</option>
          {loading ? <option>Loading...</option> : 
            kecamatan.map(kec => (
              <option key={kec.id} value={kec.id}>{kec.name}</option>
            ))}
        </select>
      </div>
      <div>
        <label>Kelurahan:</label>
        <select disabled={!selectedKecamatan}>
          <option value="">Pilih Kelurahan</option>
          {loading ? <option>Loading...</option> : 
            kelurahan.map(kel => (
              <option key={kel.id} value={kel.id}>{kel.name}</option>
            ))}
        </select>
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default FormWilayahOrganisms;