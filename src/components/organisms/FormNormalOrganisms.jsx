// import React, { useState } from 'react';
// import axios from 'axios';

// function FormNormalOrganisms() {
//   const [formData, setFormData] = useState({
//     Nik: '',
//     Nama_Lengkap: '',
//     Gol_Darah: '',
//     Tempat_Lahir: '',
//     Tanggal_Lahir: '',
//     Jenis_Kelamin: '',
//     Agama: '',
//     Status_Kawin: '',
//     Pekerjaan: '',
//     Alamat: '',
//     Kewarganegaraan: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(formData);
//     try {
//       const response = await axios.post('http://127.0.0.1:5000/api/ktp', formData, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//       console.log('Data berhasil dikirim:', response.data);
//     } catch (error) {
//       console.error('Terjadi kesalahan:', error);
//     }
//   };

//   return (
//     <form className='flex flex-col' onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="Nik"
//         value={formData.Nik}
//         onChange={handleChange}
//         placeholder="Nik"
//       />
//       <input
//         type="text"
//         name="Nama_Lengkap"
//         value={formData.Nama_Lengkap}
//         onChange={handleChange}
//         placeholder="Nama Lengkap"
//       />
//       <input
//         type="text"
//         name="Gol_Darah"
//         value={formData.Gol_Darah}
//         onChange={handleChange}
//         placeholder="Gol Darah"
//       />
//       <input
//         type="text"
//         name="Tempat_Lahir"
//         value={formData.Tempat_Lahir}
//         onChange={handleChange}
//         placeholder="Tempat Lahir"
//       />
//       <input
//         type="date"
//         name="Tanggal_Lahir"
//         value={formData.Tanggal_Lahir}
//         onChange={handleChange}
//         placeholder="Tanggal Lahir"
//       />
//       <input
//         type="text"
//         name="Jenis_Kelamin"
//         value={formData.Jenis_Kelamin}
//         onChange={handleChange}
//         placeholder="Jenis Kelamin"
//       />
//       <input
//         type="text"
//         name="Agama"
//         value={formData.Agama}
//         onChange={handleChange}
//         placeholder="Agama"
//       />
//       <input
//         type="text"
//         name="Status_Kawin"
//         value={formData.Status_Kawin}
//         onChange={handleChange}
//         placeholder="Status Kawin"
//       />
//       <input
//         type="text"
//         name="Pekerjaan"
//         value={formData.Pekerjaan}
//         onChange={handleChange}
//         placeholder="Pekerjaan"
//       />
//       <input
//         type="text"
//         name="Alamat"
//         value={formData.Alamat}
//         onChange={handleChange}
//         placeholder="Alamat"
//       />
//       <input
//         type="text"
//         name="Kewarganegaraan"
//         value={formData.Kewarganegaraan}
//         onChange={handleChange}
//         placeholder="Kewarganegaraan"
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default FormNormalOrganisms;
