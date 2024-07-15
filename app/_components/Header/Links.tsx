import { LinkProvider, useLink } from "@/app/_contexts/LinkContext";
import Link from "next/link";
export default function Links() {
  return (
    <LinkProvider>
      <ul className="flex justify-around w-1/3 items-center p-2">
        <LinkElement url="/" num={1}>
          Home
        </LinkElement>
        <LinkElement url="/courses" num={2}>
          courses
        </LinkElement>
        <LinkElement url="/about" num={3}>
          about
        </LinkElement>
        <LinkElement url="/contact" num={4}>
          contact
        </LinkElement>
        <LinkElement url="/becomeAnInstructor" num={5}>
          become an instructor
        </LinkElement>
      </ul>
    </LinkProvider>
  );
}

function LinkElement({
  children,
  url,
  num,
}: {
  children: any;
  url: string;
  num: number;
}): JSX.Element {
  const { selectedPage, setSelectedPage } = useLink();

  return (
    <li>
      <Link href={url} onClick={() => setSelectedPage(num)}>
        {children}
      </Link>
      <div
        className={`${
          selectedPage === num ? "w-full" : "w-0"
        } h-0.5 bg-orange-600 transition-all duration-300`}></div>
    </li>
  );
}
