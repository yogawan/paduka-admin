import React from "react";
import { Link } from "react-router-dom";

const TeamOrganisms = () => {
    return (
      <div className="ml-[256px] mobile:ml-[128px] pl-[100px] mobile:pl-[12px] pt-[128px] bg-bg-image-gradient bg-cover bg-center h-screen">
        <div className="w-[610px] mobile:w-[400px] text-start">
          {/* Nama dan NIM */}
          <h1 className="text-3xl mobile:text-[16px] mobile:w-full font-thin mb-1 text-[#171717]">Yogawan Aditya Pratama</h1>
          <h2 className="text-lg mobile:w-full text-[#17171775] font-thin mb-3">5220411056</h2>
          
          <h1 className="text-3xl mobile:text-[16px] mobile:w-full font-thin mb-1 text-[#171717]">Miko Dian Rachmandany</h1>
          <h2 className="text-lg mobile:w-full text-[#17171775] font-thin mb-3">5220411060</h2>
          
          <h1 className="text-3xl mobile:text-[16px] mobile:w-full font-thin mb-1 text-[#171717]">Sandy Maulana Rifqi</h1>
          <h2 className="text-lg mobile:w-full text-[#17171775] font-thin mb-3">5220411069</h2>
          
          <h1 className="text-3xl mobile:text-[16px] mobile:w-full font-thin mb-1 text-[#171717]">Trio Saputro</h1>
          <h2 className="text-lg mobile:w-full text-[#17171775] font-thin mb-12">5220411097</h2>

          <div className="flex flex-wrap w-full items-center mobile:items-start mobile:flex-col">
            {/* Tombol dengan Efek Gradient dan Blur */}
            <div className="relative inline-flex group">
              {/* Background Gradient dan Blur Effect */}
              <div
                className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"
              ></div>

              {/* Tombol dengan Efek Hover dan Fokus */}
              <Link
                to="/form"
                className="relative inline-flex items-center justify-center px-12 py-6 text-lg font-bold text-white bg-[#171717] rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-all duration-200"
                role="button"
              >
                Get Started
              </Link>
            </div>

            <a className="ml-6 mobile:mt-6" href="https://github.com/yogawan/tugas-desain-front-end">Our GitHub</a>
          </div>
        </div>
      </div>
    )
}

export default TeamOrganisms;