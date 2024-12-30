import React from "react";

import DashboardTabOrganisms from "../organisms/DashboardTabOrganisms";
import FormOrganisms from "../organisms/FormOrganisms";

const FormPages = () => {
    return (
        <div>
            <DashboardTabOrganisms></DashboardTabOrganisms>
            <FormOrganisms></FormOrganisms>
        </div>
    )
}

export default FormPages;