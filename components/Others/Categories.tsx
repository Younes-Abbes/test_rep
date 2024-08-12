import { categories } from "@/Data/data";
import Link from "next/link";

function Categories() {
  return (
    <div className="mt-20 flex w-screen flex-col items-center">
      <h1 className="text-2xl">Browse Top Category</h1>
      <div className="flex max-w-[68rem] flex-wrap justify-around gap-2 p-10">
        {categories.map((category) => (
          <Category category={category} key={category.id} />
        ))}
      </div>
      <div className="py-5">
        We have more categories and subcategories
        <Link href="#" className="text-customText pl-3 text-orange-500">
          Browse All →
        </Link>
      </div>
    </div>
  );
}

export default Categories;

function Category({ category }: { category: any }) {
  return (
    <button
      className="flex w-60 items-center space-x-5 rounded-md p-3 transition-all duration-500 hover:shadow-xl"
      style={{ backgroundColor: category.color }}>
      <img
        className={category.id === 5 ? "bg-red-700" : "bg-white"}
        src={category.image}
        alt="img"
      />
      <div className="flex flex-col items-start">
        <h2>{category.title}</h2>
        <span>{category.number} categories</span>
      </div>
    </button>
  );
}
