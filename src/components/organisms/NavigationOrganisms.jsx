import React from "react";
import { Link } from "react-router-dom";

const NavigationOrganisms = () => {
    return  (
        <nav className="fixed flex justify-center w-full mt-[32px]">
            <ul className="flex p-[3px] bg-[#FBFBFB] bg-blur rounded-full">
                <li className="p-5 m-1 rounded-full text-black font-thin hover:bg-[#171717] hover:text-white "><Link to={"/"}>Home</Link></li>
                <li className="p-5 m-1 rounded-full text-black font-thin hover:bg-[#171717] hover:text-white "><Link to={"/form"}>Tambah Data</Link></li>
                <li className="p-5 m-1 rounded-full text-black font-thin hover:bg-[#171717] hover:text-white "><Link to={"/app"}>Lihat Data</Link></li>
            </ul>
        </nav>
    );
};

export default NavigationOrganisms;