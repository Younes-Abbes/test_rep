import BecomeAnInstructor from "../../../components/Others/BecomeAnInstructor";
import Categories from "../../../components/Others/Categories";
import Courses from "../../../components/Others/Courses";
import FeatureCourses from "../../../components/Others/FeatureCourses";
import Introduction from "../../../components/Others/Introduction";
import RecentlyAddedCourses from "../../../components/Others/RecentlyAddedCourses";
import TopInstructors from "../../../components/Others/TopInstructors";
import TrustedCompanies from "../../../components/Others/TrustedCompanies";

export default function Page() {
  return (
    <main className="flex flex-col justify-around">
      <Introduction />
      <Categories />
      <Courses />
      <FeatureCourses />
      <RecentlyAddedCourses />
      <BecomeAnInstructor />
      <TopInstructors />
      <TrustedCompanies />
    </main>
  );
}
