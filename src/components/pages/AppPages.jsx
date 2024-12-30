import React from "react";

import DashboardTabOrganisms from "../organisms/DashboardTabOrganisms";
import CardOrganisms from "../organisms/CardOrganisms";

const AppPages = () => {
  return (
    <div>
      <DashboardTabOrganisms></DashboardTabOrganisms>
      <CardOrganisms></CardOrganisms>
    </div>
  )
}

export default AppPages;