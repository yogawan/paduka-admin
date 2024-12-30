import React, { useEffect, useState } from "react";
import axios from "axios";

const ReadAllUserData = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedUser, setSelectedUser] = useState(null); // Data user yang dipilih untuk edit
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false); // Kontrol visibilitas popup

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/api/alluserdata");
        setUserData(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleEditClick = (user) => {
    setSelectedUser(user);
    setShowModal(true); // Tampilkan modal
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:5000/api/userdata/${selectedUser.id}`,
        selectedUser,
        {
          headers: {
            "Content-Type": "application/json",
          }
        }
      );
      setMessage(response.data.message);

      // Update tabel setelah berhasil diubah
      setUserData((prevData) =>
        prevData.map((user) =>
          user.id === selectedUser.id ? { ...selectedUser } : user
        )
      );

      setShowModal(false); // Tutup modal setelah update
      setSelectedUser(null); // Reset selected user
    } catch (err) {
      setMessage("Error: " + (err.response?.data?.error || "Something went wrong"));
    }
  };

  const closeModal = () => {
    setShowModal(false); // Tutup modal
    setSelectedUser(null); // Reset selected user
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="pl-32 pt-5">
      <h1 className="text-2xl font-bold mb-4">Review</h1>
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Username</th>
            <th className="border border-gray-300 px-4 py-2">NIK</th>
            <th className="border border-gray-300 px-4 py-2">Nama Lengkap</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.id} className="hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">{user.id}</td>
              <td className="border border-gray-300 px-4 py-2">{user.username}</td>
              <td className="border border-gray-300 px-4 py-2">{user.Nik}</td>
              <td className="border border-gray-300 px-4 py-2">{user.Nama_Lengkap}</td>
              <td className="border border-gray-300 px-4 py-2">{user.Status}</td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  onClick={() => handleEditClick(user)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Popup Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white w-1/3 rounded-lg shadow-lg p-6 relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={closeModal}
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4">Edit User Data</h2>
            <form onSubmit={handleUpdateSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="Nama_Lengkap"
                  value={selectedUser.Nama_Lengkap || ""}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Status
                </label>
                <select
                  name="Status"
                  value={selectedUser.Status || ""}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Pilih Status</option>
                  <option value="Sedang di Review">Sedang di Review</option>
                  <option value="Disetujui">Disetujui</option>
                  <option value="Ditolak">Ditolak</option>
                </select>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 mr-2"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {message && <p className="text-green-500 mt-4">{message}</p>}
    </div>
  );
};

export default ReadAllUserData;
