import React from "react";
import { Link } from "react-router-dom";

const NavigationOrganisms = () => {
  return (
    <nav className="fixed">
      <ul className="flex flex-col h-screen items-start pt-[96px] w-[256px] pl-[12px] bg-[#EEEEEE] bg-blur mobile:w-[128px] mobile:pl-[2px]">

        <li className="flex p-5 m-1 rounded-full text-[#303030] font-thin hover:bg-[#FFFFFF]">
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m-2.5-8.5q1.45 0 2.475-1.025T13 10t-1.025-2.475T9.5 6.5T7.025 7.525T6 10t1.025 2.475T9.5 13.5m7 1q1.05 0 1.775-.725T19 12t-.725-1.775T16.5 9.5t-1.775.725T14 12t.725 1.775t1.775.725M12 20q2.125 0 3.875-1t2.825-2.65q-.525-.15-1.075-.25T16.5 16q-1.325 0-3.2.775t-3 3.05q.425.1.85.138T12 20m-3.175-.65q.875-1.8 1.988-2.675T12.5 15.5q-.725-.225-1.463-.362T9.5 15q-1.125 0-2.225.275t-2.125.775q.65 1.075 1.588 1.938t2.087 1.362"></path></svg>
          <Link className="pl-2" to={"/"}>
            Teams
          </Link>
        </li>

        <li className="flex p-5 m-1 rounded-full text-[#303030] font-thin hover:bg-[#FFFFFF]">
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4zm1 5q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"></path></svg>
          <Link className="pl-2" to={"/form"}>
            Tambah Data
          </Link>
        </li>

        <li className="flex p-5 m-1 rounded-full text-[#303030] font-thin hover:bg-[#FFFFFF]">
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M18 13q.425 0 .713-.288T19 12t-.288-.712T18 11h-3q-.425 0-.712.288T14 12t.288.713T15 13zm0-3q.425 0 .713-.288T19 9t-.288-.712T18 8h-3q-.425 0-.712.288T14 9t.288.713T15 10zm-9 3q-.9 0-1.625.163t-1.275.512q-.525.325-.8.738t-.275.887q0 .3.225.5t.55.2h6.4q.325 0 .55-.213t.225-.537q0-.425-.275-.825t-.8-.75q-.55-.35-1.275-.513T9 13m0-1q.825 0 1.412-.587T11 10t-.587-1.412T9 8t-1.412.588T7 10t.588 1.413T9 12m-5 8q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20z"></path></svg>
          <Link className="pl-2" to={"/app"}>Lihat Data</Link>
        </li>

        {/* <li className="flex p-5 m-1 rounded-full text-[#303030] font-thin hover:bg-[#FFFFFF]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M11.8 21q-1.05-.025-2.562-.238t-2.9-.687t-2.363-1.237T3 17v-2.5q0 .9.713 1.588t1.787 1.15t2.363.75t2.412.412q.225.725.613 1.388T11.8 21m-1.775-5.125q-1.125-.125-2.363-.413T5.389 14.7t-1.713-1.137T3 12V9.5q0 .95.788 1.65t1.95 1.188t2.525.75t2.487.362q-.3.55-.488 1.163t-.237 1.262M12 11q-3.725 0-6.363-1.175T3 7t2.638-2.825T12 3q3.75 0 6.375 1.175T21 7t-2.625 2.825T12 11m4.5 10q-1.875 0-3.187-1.312T12 16.5t1.313-3.187T16.5 12t3.188 1.313T21 16.5q0 .65-.187 1.25T20.3 18.9l2 2q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-2-2q-.55.325-1.15.513T16.5 21m0-2q1.05 0 1.775-.725T19 16.5t-.725-1.775T16.5 14t-1.775.725T14 16.5t.725 1.775T16.5 19"
            ></path>
          </svg>
          <Link className="pl-2" to={"/tech"}>Tech Stack</Link>
        </li> */}


      </ul>
    </nav>
  );
};

export default NavigationOrganisms;
