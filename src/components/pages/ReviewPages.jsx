import React from "react";
import DashboardTabOrganisms from "../organisms/DashboardTabOrganisms";
import ReadAllUserData from "../organisms/UserData";

const ReviewPages = () => {
    return (
        <div>
            <DashboardTabOrganisms></DashboardTabOrganisms>
            <ReadAllUserData></ReadAllUserData>
        </div>
    )
}

export default ReviewPages;