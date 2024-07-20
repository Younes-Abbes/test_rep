import Link from "next/link";

function Categories() {
  const categories = [
    {
      id: 1,
      title: "Label",
      number: 63476,
      color: "#EBEBFF",
      image: "/assets/TopCat/Cpu.png",
    },
    {
      id: 2,
      title: "Business",
      number: 52822,
      color: "#E1F7E3",
      image: "/assets/TopCat/Handshake.png",
    },
    {
      id: 3,
      title: "Finance & Accounting",
      number: 33841,
      color: "#FFF2E5",
      image: "/assets/TopCat/CreditCard.png",
    },
    {
      id: 4,
      title: "IT & Software",
      number: 22649,
      color: "#FFF0F0",
      image: "/assets/TopCat/ChartBarHorizontal.png",
    },
    {
      id: 5,
      title: "Personal Development",
      number: 20126,
      color: "#FFFFFF",
      image: "/assets/TopCat/BugDroid.png",
    },
    {
      id: 6,
      title: "Office Productivity",
      number: 13932,
      color: "#F5F7FA",
      image: "/assets/TopCat/Receipt.png",
    },
    {
      id: 7,
      title: "Marketing",
      number: 12068,
      color: "#EBEBFF",
      image: "/assets/TopCat/MegaphoneSimple.png",
    },
    {
      id: 8,
      title: "Photography & Video",
      number: 6196,
      color: "#F5F7FA",
      image: "/assets/TopCat/Camera.png",
    },
    {
      id: 9,
      title: "Lifestyle",
      number: 2736,
      color: "#FFF2E5",
      image: "/assets/TopCat/Package.png",
    },
    {
      id: 10,
      title: "Design",
      number: 2600,
      color: "#FFEEE8",
      image: "/assets/TopCat/PenNib.png",
    },
    {
      id: 11,
      title: "Health & Fitness",
      number: 1678,
      color: "#E1F7E3",
      image: "/assets/TopCat/FirstAidKit.png",
    },
    {
      id: 12,
      title: "Music",
      number: 959,
      color: "#FFF2E5",
      image: "/assets/TopCat/Headphones.png",
    },
  ];

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
