import BecomeAnInstructor from "./_components/Others/BecomeAnInstructor";
import Categories from "./_components/Others/Categories";
import Courses from "./_components/Others/Courses";
import FeatureCourses from "./_components/Others/FeatureCourses";
import Introduction from "./_components/Others/Introduction";
import RecentlyAddedCourses from "./_components/Others/RecentlyAddedCourses";
import TopInstructors from "./_components/Others/TopInstructors";
import TrustedCompanies from "./_components/Others/TrustedCompanies";

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
