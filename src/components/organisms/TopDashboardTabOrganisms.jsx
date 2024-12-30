import React from "react";

import { Link } from "react-router-dom";

const TopDashboardTabOrganisms = () => {
    return (
        <nav className="fixed top-0 w-[100%]">
            <ul className="flex justify-center items-center p-8 ">
                <li className="ml-5 mr-5 flex items-center border border-[#17171715] rounded-full">
                    <input className="px-10 py-4 mr-3 rounded-full" type="text" placeholder="Search"/>
                    <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="#171717" strokeLinecap="round" strokeWidth={1.5}><path d="M14.125 12.118L15.5 13.5m-1.375-1.382a3 3 0 1 0-4.25-4.236a3 3 0 0 0 4.25 4.236Z"></path><path d="M5 15.216c-.647-1.654-1-3.415-1-5.073C4 5.646 7.582 2 12 2s8 3.646 8 8.143c0 4.462-2.553 9.67-6.537 11.531a3.45 3.45 0 0 1-2.926 0C9.265 21.08 8.138 20.144 7.194 19"></path></g></svg>
                </li>
                <li className="ml-5 mr-5">
                    <Link>
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="#171717" fillRule="evenodd" d="M10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12s0-5.657 1.172-6.828S6.229 4 10 4m3.25 5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75m1 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m1 3a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75M11 9a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 8c4 0 4-.895 4-2s-1.79-2-4-2s-4 .895-4 2s0 2 4 2" clipRule="evenodd"></path></svg>
                    </Link>
                </li>
                <li className="ml-5 mr-5">
                    <Link>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="#171717" strokeWidth={1.5}><path strokeLinecap="round" d="M22 13v-1c0-3.771 0-5.657-1.172-6.828S17.771 4 14 4h-4C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h3"></path><path strokeLinecap="round" d="M10 16H6m-4-6h20" opacity={0.4}></path><circle cx={18} cy={17} r={3}></circle><path strokeLinecap="round" d="m20.5 19.5l1 1"></path></g></svg>
                    </Link>
                </li>
                <li className="ml-5 mr-5">
                    <Link>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="#171717" fillRule="evenodd" d="m13.087 21.388l.542-.916c.42-.71.63-1.066.968-1.262c.338-.197.763-.204 1.613-.219c1.256-.021 2.043-.098 2.703-.372a5 5 0 0 0 2.706-2.706C22 14.995 22 13.83 22 11.5v-1c0-3.273 0-4.91-.737-6.112a5 5 0 0 0-1.65-1.651C18.41 2 16.773 2 13.5 2h-3c-3.273 0-4.91 0-6.112.737a5 5 0 0 0-1.651 1.65C2 5.59 2 7.228 2 10.5v1c0 2.33 0 3.495.38 4.413a5 5 0 0 0 2.707 2.706c.66.274 1.447.35 2.703.372c.85.015 1.275.022 1.613.219c.337.196.548.551.968 1.262l.542.916c.483.816 1.69.816 2.174 0M16 12a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-3-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clipRule="evenodd"></path></svg>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default TopDashboardTabOrganisms;