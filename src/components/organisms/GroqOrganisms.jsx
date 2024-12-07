import React, { useState } from 'react';
import { requestToGroqAI } from '../../utilities/groq';
import { Link } from 'react-router-dom';

const GroqOrganisms = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const customAnswers = {
    'siapa orang paling tua': 'Jawaban khusus: Orang tertua yang tercatat dalam sejarah adalah Jeanne Calment dari Prancis, yang hidup hingga usia 122 tahun dan 164 hari.',
    'berapa umur bumi': 'Jawaban khusus: Umur Bumi diperkirakan sekitar 4,54 miliar tahun berdasarkan penelitian geologi.',
    'apa arti kehidupan': 'Jawaban khusus: Arti kehidupan adalah 42! Ini adalah referensi dari "The Hitchhiker\'s Guide to the Galaxy."',
    'siapa presiden pertama indonesia': 'Jawaban khusus: Presiden pertama Indonesia adalah Ir. Soekarno, yang memimpin dari tahun 1945 hingga 1967.',
    'apa ibukota indonesia': 'Jawaban khusus: Ibukota Indonesia adalah Jakarta.',
    'berapa kecepatan cahaya': 'Jawaban khusus: Kecepatan cahaya di ruang hampa adalah 299.792.458 meter per detik.',
    'penduduk paling tua': "Miko Dian Rachmadany adalah Penduduk Tertua, tangal lahir 1992-01-12"
  };

  const AskAI = async () => {
    const content = document.getElementById('content').value.toLowerCase();

    setLoading(true);

    if (customAnswers[content]) {
      setData(customAnswers[content]);
      setLoading(false);
      return;
    }

    try {
      const ai = await requestToGroqAI(content);
      setData(ai);
    } catch (error) {
      console.error('Error:', error);
      setData('Terjadi kesalahan. Silakan coba lagi.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-bg-image-gradient bg-cover bg-center h-[940px] mobile:h-[940px] flex flex-col items-center py-8 pl-[280px] mobile:pl-[128px]">
      {/* Title */}
      <h1 className='text-[44px] font-thin mobile:text-[24px]'>Tanya Apa Saja</h1>

      {/* Form Input */}
      <div className="mt-10 w-[720px] mobile:w-[280px]">
        <div className="flex flex-col items-end border border-[#17171725] rounded-3xl p-3">
          
          {/* Input */}
          <input
            type="text"
            name="content"
            id="content"
            placeholder="Ayoo tanya sesuatu...."
            className="w-full px-10 py-10 border rounded-[16px] focus:outline-[#171717]"
          />

          {/* Button */}
          <div className="relative inline-flex group mt-6">
            {/* Background Gradient dan Blur Effect */}
            <div
              className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"
            ></div>

            {/* Tombol dengan Efek Hover dan Fokus */}
            <button
              onClick={AskAI}
              disabled={loading} // Disable tombol saat loading
              className="relative inline-flex items-center justify-center px-12 py-6 text-lg font-bold text-white bg-[#171717] rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-all duration-200"
            >
            {loading ? 'Memproses...' : 'Tanya AI'} {/* Indikator tombol */}
            </button>
          </div>

        </div>
      </div>

      {/* Answer Section */}
      <div className="mt-10 w-[720px] mobile:w-[280px]">
        <div className="border border-[#17171725] rounded-3xl p-6 text-gray-800">
          <h2 className="text-lg font-semibold mb-2">Jawaban AI:</h2>
          <div className="text-sm">
            {loading ? ( // Indikator loading
              <p className="text-blue-600 animate-pulse">Sedang memproses jawaban...</p>
            ) : (
              data || (
                <p className="text-gray-400 italic">
                  Masukkan pertanyaan di atas untuk mendapatkan jawaban.
                </p>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroqOrganisms;
