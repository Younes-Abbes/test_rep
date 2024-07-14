import Link from "next/link";

export default function Links({
  selectedPage,
  onClick,
}: {
  selectedPage: number;
  onClick: (num: number) => void;
}) {
  return (
    <ul className="flex justify-around w-1/3 items-center p-2">
      <li>
        <Link href="/" onClick={() => onClick(1)}>
          Home
        </Link>
        <div
          className={`${
            selectedPage === 1 ? "w-full" : "w-0"
          } h-0.5 bg-orange-600 transition-all duration-300`}></div>
      </li>

      <li>
        <Link href="/courses" onClick={() => onClick(2)}>
          Courses
        </Link>
        <div
          className={`${
            selectedPage === 2 ? "w-full" : "w-0"
          } h-0.5 bg-orange-600 transition-all duration-300`}></div>
      </li>

      <li>
        <Link href="/about" onClick={() => onClick(3)}>
          About
        </Link>
        <div
          className={`${
            selectedPage === 3 ? "w-full" : "w-0"
          } h-0.5 bg-orange-600 transition-all duration-300`}></div>
      </li>

      <li>
        <Link href="/contact" onClick={() => onClick(4)}>
          Contact
        </Link>
        <div
          className={`${
            selectedPage === 4 ? "w-full" : "w-0"
          } h-0.5 bg-orange-600 transition-all duration-300`}></div>
      </li>

      <li>
        <Link href="/becomeAnInstructor" onClick={() => onClick(5)}>
          Become an Instructor
        </Link>
        <div
          className={`${
            selectedPage === 5 ? "w-full" : "w-0"
          } h-0.5 bg-orange-600 transition-all duration-300`}></div>
      </li>
    </ul>
  );
}
