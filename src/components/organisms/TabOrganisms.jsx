import React from "react";
import { Link } from "react-router-dom";

const TabOrganisms = () => {
    return (
        <nav className="flex justify-between items-center ml-[300px] mb-[32px]">
            <ul className="flex items-center mt-[12px]">
                <li className="px-10 py-3 bg-[#171717] mr-3 text-[#FFFFFF] rounded-full font-thin">
                    <Link to={"/"}>Lihat Data</Link>
                </li>
                <li className="px-10 py-3 mr-3 text-[#171717] font-thin">
                    <Link to={"/"}>Tambah Data</Link>
                </li>
            </ul>
        </nav>
    )
}

export default TabOrganisms;