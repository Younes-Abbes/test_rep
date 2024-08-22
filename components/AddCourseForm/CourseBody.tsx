import React from "react";
import BasicInformation from "./BasicInformation";
import AdvancedInformation from "./AdvancedInformation";
import Curriculum from "./Curriculum";
import PublishCourse from "./PublishCourse";

export default function CourseBody({
  page,
  setPage,
}: {
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
}) {
  switch (page) {
    case "Basic Information":
      return <BasicInformation setPage={setPage} />;
    case "Advanced Information":
      return <AdvancedInformation />;
    case "Curriculum":
      return <Curriculum />;
    case "Publish Course":
      return <PublishCourse />;
    default:
      return (
        <div className="text-red-500 text-3xl">nothing to be rendered here</div>
      );
  }
}
