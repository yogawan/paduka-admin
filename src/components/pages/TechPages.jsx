import React from "react";
import NavigationOrganisms from "../organisms/NavigationOrganisms";

const TechPages = () => {
    return (
        <div>
            <NavigationOrganisms></NavigationOrganisms>
            <div className="ml-[256px] pl-[44px] pt-[16px] bg-bg-image-gradient bg-cover bg-center h-[1080px]">
                {/* Title */}
                <h1 className="text-center font-thin leading-none text-[44px] pt-4 pb-4">
                    Tech Stack
                </h1>
            </div>
        </div>
    )
}

export default TechPages;