import Link from "next/link";

function Introduction() {
  return (
    <div className="flex bg-gray-100 items-center justify-end">
      <div></div>
      <div className="justify-center flex flex-col gap-5 max-w-[30rem]">
        <h1 className="text-5xl">Learn with expert anytime anywhere</h1>
        <span className="text-wrap w-1/2">
          Our mission is to help people to find the best course online and learn
          with experts anytime, anywhere.
        </span>
        <Link
          href="/signUp"
          className="duration text-center w-40 rounded-2xl bg-orange-300 p-4 transition-all duration-300 hover:w-44 hover:shadow-xl">
          Create Account
        </Link>
      </div>
      <img
        className="bg-gray-100 w-1/2"
        src="/assets/others/homeheader.jpg"
        alt="Homeheader picture"
        style={{ clipPath: "polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
      />
    </div>
  );
}

export default Introduction;
