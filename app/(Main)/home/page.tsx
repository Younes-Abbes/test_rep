import BecomeAnInstructor from "../../../components/Others/BecomeAnInstructor";
import Categories from "../../../components/Others/Categories";
import { BestSellingCourses } from "@/components/Others/BestSellingCourses";
import FeatureCourses from "../../../components/Others/FeatureCourses";
import Introduction from "../../../components/Others/Introduction";
import RecentlyAddedCourses from "../../../components/Others/RecentlyAddedCourses";
import TopInstructors from "../../../components/Others/TopInstructors";
import TrustedCompanies from "../../../components/Others/TrustedCompanies";

export default async function Page({ searchParams }: { searchParams: string }) {
  return (
    <main className="flex flex-col justify-around">
      <Introduction />
      <Categories />
      <BestSellingCourses />
      <FeatureCourses />
      <RecentlyAddedCourses />
      <BecomeAnInstructor />
      <TopInstructors />
      <TrustedCompanies />
    </main>
  );
}
