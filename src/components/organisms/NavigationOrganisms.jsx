import React from "react";
import { Link } from "react-router-dom";

const NavigationOrganisms = () => {
  return (
    <nav className="fixed">
      <ul className="flex flex-col h-screen items-start pt-[96px] w-[256px] pl-[12px] bg-[#F9F9F9] bg-blur">

        <li className="flex p-5 m-1 rounded-full text-[#303030] font-thin hover:bg-[#FFFFFF]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
          >
            <path fill="currentColor" d="M4 21V9l8-6l8 6v12h-6v-7h-4v7z"></path>
          </svg>
          <Link className="pl-2" to={"/"}>
            Teams
          </Link>
        </li>

        <li className="flex p-5 m-1 rounded-full text-[#303030] font-thin hover:bg-[#FFFFFF]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 13.725q-.25 0-.488-.062t-.462-.188l-8.45-4.6q-.275-.15-.388-.375T2.1 8t.113-.5t.387-.375l8.45-4.6q.225-.125.463-.188T12 2.275t.488.063t.462.187l8.45 4.6q.275.15.388.375t.112.5t-.112.5t-.388.375l-8.45 4.6q-.225.125-.462.188t-.488.062m0 2l7.85-4.275q.05-.025.475-.125q.425 0 .713.288t.287.712q0 .275-.125.5t-.4.375l-7.85 4.275q-.225.125-.462.188t-.488.062t-.488-.062t-.462-.188L3.2 13.2q-.275-.15-.4-.375t-.125-.5q0-.425.288-.712t.712-.288q.125 0 .238.038t.237.087zm0 4l7.85-4.275q.05-.025.475-.125q.425 0 .713.288t.287.712q0 .275-.125.5t-.4.375l-7.85 4.275q-.225.125-.462.188t-.488.062t-.488-.062t-.462-.188L3.2 17.2q-.275-.15-.4-.375t-.125-.5q0-.425.288-.712t.712-.288q.125 0 .238.038t.237.087z"
            ></path>
          </svg>
          <Link className="pl-2" to={"/form"}>
            Tambah Data
          </Link>
        </li>

        <li className="flex p-5 m-1 rounded-full text-[#303030] font-thin hover:bg-[#FFFFFF]">
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
          <Link className="pl-2" to={"/app"}>Lihat Data</Link>
        </li>

        <li className="flex p-5 m-1 rounded-full text-[#303030] font-thin hover:bg-[#FFFFFF]">
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
          <Link className="pl-2" to={"/app"}>Tech Stack</Link>
        </li>


      </ul>
    </nav>
  );
};

export default NavigationOrganisms;
