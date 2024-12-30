import React from "react";

import NavigationOrganisms from "../organisms/NavigationOrganisms";
import DashboardTabOrganisms from "../organisms/DashboardTabOrganisms";
import GroqOrganisms from "../organisms/GroqOrganisms";

const AIPages = () => {
    return (
        <div>
            <DashboardTabOrganisms></DashboardTabOrganisms>
            <GroqOrganisms></GroqOrganisms>
        </div>
    )
}

export default AIPages;