import Buttons from "./Buttons";
import FilterSearch from "./FilterSearch";

export default async function SecondNav() {
  return (
    <div className="flex items-center justify-between bg-gray-200 align-middle">
      <FilterSearch />
      <Buttons />
    </div>
  );
}
