import React from "react";

import DashboardTabOrganisms from "../organisms/DashboardTabOrganisms";
import TeamOrganisms from "../organisms/TeamOrganisms";

const HomePages = () => {
  return (
    <div>
      <DashboardTabOrganisms></DashboardTabOrganisms>
      <TeamOrganisms></TeamOrganisms>
    </div>
  );
};

export default HomePages;
