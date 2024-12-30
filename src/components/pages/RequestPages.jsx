import React from "react";

import ApprovedOrganisms from "../organisms/ApprovedOrganisms";
import RejectedOrganisms from "../organisms/RejectedOrganisms";
import ProcessOrganisms from "../organisms/ProcessOrganisms";
import DashboardTabOrganisms from "../organisms/DashboardTabOrganisms";

const RequestPages = () => {
    return (
        <div>
            <DashboardTabOrganisms></DashboardTabOrganisms>
            <div className="flex mt-10 ml-28">
                <ProcessOrganisms></ProcessOrganisms>
                <ApprovedOrganisms></ApprovedOrganisms>
                <RejectedOrganisms></RejectedOrganisms>
            </div>
        </div>
    )
};

export default RequestPages;