import Buttons from "./Buttons";
import FilterSearch from "./FilterSearch";

export default function SecondNav(): JSX.Element {
  return (
    <div className="flex items-center justify-between bg-gray-200 align-middle">
      <FilterSearch />
      <Buttons />
    </div>
  );
}
