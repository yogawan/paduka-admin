import React from "react";

import { Link } from "react-router-dom";

const DashboardTabOrganisms = () => {
    return (
        <nav className="fixed top-0 bg-[#F9F9F9]">
            <ul className="flex flex-col justify-center items-center p-8 h-[100vh]">
                <li className="mt-5 mb-5">
                    <Link to={"/"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="#171717" fillRule="evenodd" d="M3 10.417c0-3.198 0-4.797.378-5.335c.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2s1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 5.638-4.239 8.375-6.899 9.536C13.38 21.842 13.02 22 12 22s-1.38-.158-2.101-.473C7.239 20.365 3 17.63 3 11.991zM14 9a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 8c4 0 4-.895 4-2s-1.79-2-4-2s-4 .895-4 2s0 2 4 2" clipRule="evenodd"></path></svg>
                    </Link>
                </li>
                <li className="mt-5 mb-5">
                    <Link to="/form">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="#171717" fillRule="evenodd" d="M10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12s0-5.657 1.172-6.828S6.229 4 10 4m3.25 5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75m1 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m1 3a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75M11 9a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 8c4 0 4-.895 4-2s-1.79-2-4-2s-4 .895-4 2s0 2 4 2" clipRule="evenodd"></path></svg>
                    </Link>
                </li>
                <li className="mt-5 mb-5">
                    <Link to="/app">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="#171717" strokeWidth={1.5}><path strokeLinecap="round" d="M22 13v-1c0-3.771 0-5.657-1.172-6.828S17.771 4 14 4h-4C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h3"></path><path strokeLinecap="round" d="M10 16H6m-4-6h20" opacity={0.4}></path><circle cx={18} cy={17} r={3}></circle><path strokeLinecap="round" d="m20.5 19.5l1 1"></path></g></svg>
                    </Link>
                </li>
                <li className="mt-5 mb-5">
                    <Link to="/chat">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="#171717" fillRule="evenodd" d="m13.087 21.388l.542-.916c.42-.71.63-1.066.968-1.262c.338-.197.763-.204 1.613-.219c1.256-.021 2.043-.098 2.703-.372a5 5 0 0 0 2.706-2.706C22 14.995 22 13.83 22 11.5v-1c0-3.273 0-4.91-.737-6.112a5 5 0 0 0-1.65-1.651C18.41 2 16.773 2 13.5 2h-3c-3.273 0-4.91 0-6.112.737a5 5 0 0 0-1.651 1.65C2 5.59 2 7.228 2 10.5v1c0 2.33 0 3.495.38 4.413a5 5 0 0 0 2.707 2.706c.66.274 1.447.35 2.703.372c.85.015 1.275.022 1.613.219c.337.196.548.551.968 1.262l.542.916c.483.816 1.69.816 2.174 0M16 12a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-3-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clipRule="evenodd"></path></svg>
                    </Link>
                </li>
                <li className="mt-5 mb-5">
                    <Link to="/req">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="#171717" fillRule="evenodd" clipRule="evenodd"><path d="M3.172 19.828C4.343 21 6.229 21 10 21h3.89a5.47 5.47 0 0 1-.89-3q0-.452.07-.885a.75.75 0 0 1 .41-1.365a5.52 5.52 0 0 1 3.376-3H2V13c0 3.771 0 5.657 1.172 6.828M6 18.25a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75m3 0a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75M3.172 4.172C2 5.343 2 7.229 2 11v.25h20V11c0-3.771 0-5.657-1.172-6.828S17.771 3 14 3h-4C6.229 3 4.343 3 3.172 4.172M9 9.25a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75M5.25 8.5a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 0-1.5 0zm7.5-1a.75.75 0 0 1 .75-.75H18a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75"></path><path d="M14.929 16.753c.389-1.497 1.924-2.503 3.576-2.503c1.277 0 2.44.58 3.106 1.515a.75.75 0 1 1-1.222.87c-.36-.505-1.048-.885-1.884-.885c-.967 0-1.687.482-2 1.08a.75.75 0 0 1 .15 1.24l-.583.5a.75.75 0 0 1-.976 0l-.584-.5a.75.75 0 0 1 .417-1.317m6 .677a.75.75 0 0 1 .975 0l.584.5a.75.75 0 0 1-.417 1.317c-.389 1.497-1.924 2.503-3.576 2.503c-1.277 0-2.44-.58-3.106-1.515a.75.75 0 1 1 1.222-.87c.36.505 1.048.885 1.884.885c.967 0 1.687-.482 2-1.08a.75.75 0 0 1-.151-1.24z"></path></g></svg>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default DashboardTabOrganisms;